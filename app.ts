import express, { Express } from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config({
  path: ".env",
});

import router from "./routers";
import { error } from "./middlewares/error";

const app: Express = express();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use("/api", router);
app.use(error);

const PORT: number = Number(process.env["PORT"]) || 3000;

app.listen(PORT);
