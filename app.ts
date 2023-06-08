import express, { Express } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import Helmet from "helmet";

dotenv.config({
  path: ".env",
});

import router from "./src/routers";
import { error } from "./src/middlewares/error";

const app: Express = express();

app.use(cors());
app.use(Helmet());

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms"),
);
app.use("/api", router);
app.use(error);

const PORT: number = Number(process.env["PORT"]) || 3000;

app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});
