//Env Var
require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
//API
import Auth from "./API/Auth";

//Database connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

//Auth Route
zomato.use("/auth", Auth);

zomato.get("/", (req,res) => res.json({message: "SetUp Success!!"}));

zomato.listen(4000, ()=>
ConnectDB()
.then(()=>console.log("Server is up and running"))
.catch(()=>console.log("DB connection failed")));