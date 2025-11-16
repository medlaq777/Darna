import express from "express";
import "dotenv/config";
import Config from "./src/config/index.js";
import db from "./src/config/db.js";
import AuthRoute from "./src/routes/auth.route.js";
const app = express();
app.use(express.json());
await db.connect();
const port = Config.port;
app.use("/api", AuthRoute.build());

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
