import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import initSocket from "./utils/socket";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

initSocket();

app.get("/", (req: Request, res: Response) => {
  res.send("RTEditor Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
