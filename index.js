import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { playerRouter } from "./src/routes/player.js";
import { accountRouter } from "./src/routes/account.js";
import {
  connect,
  connector_get,
  disconnect,
} from "./src/configs/db_connect.js";
import chalker from "chalkercli";
import chalk from "chalk";
import path from "path";

const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

chalker.neon("\n[+] Starting the API Server...", 3);

setTimeout(async () => {
  await connect();
  app.use("/player", playerRouter);
  app.use("/account", accountRouter);

  app.listen(port, () => {
    console.log(
      chalk.green("[+] Server is listening on port -> "),
      chalk.yellow(port)
    );
    console.log(chalk.green("[+] Server Successfully Started\n"));
  });
  //await db_connect.disconnect();
}, 5000);
