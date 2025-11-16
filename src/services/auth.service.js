import userRepo from "../repositories/user.repository.js";
import Bcrypt from "../utils/bcrypt.util.js";
import Jwt from "../utils/jwt.util.js";

class AuthService {
  constructor(userRepoInstance) {
    this.userRepo = userRepoInstance;
  }

  async register({ fullName, email, password }) {
    if (!email || !password) {
      const err = new Error("Email and Password are required");
      err.status = 400;
      throw err;
    }
    const UserExists = await this.userRepo.findByEmail(email);
    if (UserExists) {
      const err = new Error("User already exists");
      err.status = 409;
      throw err;
    }
    const hashed = await Bcrypt.hash(password, 10);
    const user = await this.userRepo.create({
      fullName,
      email,
      password: hashed,
    });
    const token = Jwt.generateToken({
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    });
    return { user: this.sanitize(user), token };
  }

  sanitize(user) {
    if (!user || typeof user !== "object") return {};
    const obj = user?.toObject() ?? user;
    const { password, __v, ...rest } = obj || {};
    return rest;
  }
}
export default new AuthService(userRepo);
