import express from "express";
import { authRouter } from "./routes/auth.js";

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(5000, () => {
  console.log("backend is running");
});
