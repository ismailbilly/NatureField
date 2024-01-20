import express from "express";
import dotenv from "dotenv";
dotenv.config();
import {dbConnection} from './config/db.js'
import userRoutes from './routes/user.js'
import authRoutes from './routes/auth.js'
import listingRouter from './routes/listing.js'

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))

dbConnection()
const port =process.env.PORT || 5500


//api routes
app.use('/api/user', userRoutes)
app.use("/api/auth", authRoutes);
app.use("/api/listing", listingRouter);

//Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//Error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});