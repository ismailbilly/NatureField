import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import userRoutes from './routes/user.js'
import authRoutes from './routes/auth.js'
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//Database connection
//db.dbConnection()
const port =process.env.PORT || 5500

mongoose
  .connect(
    process.env.Mongo_URL
  )
  .then(() => {
    console.log("====================================");
    console.log("DB Connected");
    console.log("====================================");
  })
  .catch((err) => {
    console.log("====================================");
    console.log(err);
    console.log("====================================");
  });
//api routes
app.use('/api/user', userRoutes)
app.use("/api/auth", authRoutes);
//Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//Route not found
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

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