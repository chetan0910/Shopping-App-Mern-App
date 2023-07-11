const express = require("express");
const {errorHandler} = require('./middlewares/errorMiddleware');
require('colors');
const products = require('./data/products');
const dotenv = require("dotenv");
const connectDb = require('./config/config');
const productRoutes = require('./routes/productsRoute');
const usersRoutes = require('./routes/UsersRoute');

//dotenv config
dotenv.config();

//Connecting to mongodb database
connectDb();
const app = express();

//Middleware for Body Parser
app.use(express.json());

app.use('/api',productRoutes);
app.use("/api/users", usersRoutes);

app.use(errorHandler);
const PORT = 8080;

app.listen(process.env.PORT || PORT,() => {console.log(`server running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`.inverse);
});