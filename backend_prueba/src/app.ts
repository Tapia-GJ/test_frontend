import express, { Express } from "express";
import cors from "cors";
import { router } from "./routes/index.js";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/", router);

export { app };
