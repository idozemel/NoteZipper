const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const connectDB = async () =>{
    mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`)
    .then((ans) => {
      console.log(`Mongo is Connected: ${ans.connection.host}`)}).catch((err) => {
      console.error(err);
      process.exit();
    });
};


module.exports = connectDB;