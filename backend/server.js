const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');



const app = express();
app.use(express.json());
dotenv.config();

connectDB();

app.get('/', (req,res) =>{
    res.send("API is running...");
});



app.use('/api/users',userRoutes);
app.use('/api/notes',noteRoutes);


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
