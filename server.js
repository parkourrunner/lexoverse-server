const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const wordController = require('./controllers/wordController');
const { errorHandler } = require('./middlewares/errorMiddleware');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', wordController);


app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
