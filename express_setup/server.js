import express from "express";
import dotenv from 'dotenv';
import contactRouter from './routes/contactRoutes.js';
import errorHandler from "./middleware/errorHandler.js";
import connectDb from "./config/dbConnection.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config(); //LOADS dotenv file in process.env
connectDb();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/api/contacts" , contactRouter);
app.use("/api/users" , userRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on the port ${port}`);
});

