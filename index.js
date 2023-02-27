import express from "express";
import searchRoutes from "./routes/search.js"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import * as dotenv from "dotenv"

const app = express();
dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/search", searchRoutes)

const runServer = () => {
      try { mongoose.connect(process.env.DBURL)
        .then(() => console.log('Database Engaged'))
        .then(() =>  app.listen(process.env.PORT))
        .then(() => console.log(`running on http://localhost:${process.env.PORT}`))
      } catch (error) {
        console.error(error);       
      }
  };


runServer()