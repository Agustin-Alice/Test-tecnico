import express from "express";
import transactionsRouter from "./src/api/routes/transactions.routes.ts";

const app = express();
app.use(express.json());
app.use("/transactions", transactionsRouter);


export default app;