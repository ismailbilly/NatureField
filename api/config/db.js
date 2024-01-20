export const dbConnection = () => {
    mongoose
      .connect(process.env.Mongo_URL)
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
}
