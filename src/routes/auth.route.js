import express from "express";
import authController from "../controllers/auth.controller.js";

class AuthRoute {
  static build() {
    const router = express.Router();
    router.post("/register", authController.register.bind(authController));
    router.post("/login", authController.login.bind(authController));
    router.get("/profile", authController.profile.bind(authController));
    return router;
  }
}
export default AuthRoute;
