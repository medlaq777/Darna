import jwt from "jsonwebtoken";
import Config from "../config/index.js";

class JwtUtil {
  static generateToken(payload) {
    return jwt.sign(payload, Config.jwtSecret, {
      expiresIn: Config.jwtExpiresIn,
    });
  }

  static verifyToken(token) {
    return jwt.verify(token, Config.jwtSecret);
  }
}
export default JwtUtil;
