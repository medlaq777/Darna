import mongoose from "mongoose";
import Config from "./index.js";

class Database {
  connected = false;
  async connect() {
    if (this.connected) return;
    if (!Config.mongoUri) throw new Error("MongoDb Uri not Found");
    try {
      await mongoose.connect(Config.mongoUri);
      this.connected = true;
      console.log("MongoDb connected");
    } catch (err) {
      console.error("MongoDb connection error", err);
      throw err;
    }
  }
}

export default new Database();
