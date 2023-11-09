import { configDotenv } from "dotenv";
import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";

import cors from "cors";

import v1Routes from "./routes/v1/index.js";

configDotenv({ path: process.env.NODE_ENV === "production" ? "./.env.production" : "./.env.development" });

const app: Express = express();

const port = process.env.NODE_PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", v1Routes);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send(`Mode: ${process.env.NODE_ENV} | EasyBuy Up & Running Updated!`);
});

app.listen(port, async () => {
  console.log(`\n\n\nMODE: ${process.env.NODE_ENV}\nhttp://localhost:${port}`);
});
