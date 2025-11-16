import express from "express";
import authController from "../controllers/auth.controller.js";

class AuthRoute {
  static build() {
    const router = express.Router();
    router.post("/register", authController.register.bind(authController));
    return router;
  }
}
export default AuthRoute;
