import express from "express";
import "dotenv/config";
import Config from "./src/config/index.js";
import db from "./src/config/db.js";

const app = express();
app.use(express.json());
await db.connect();

const port = 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
