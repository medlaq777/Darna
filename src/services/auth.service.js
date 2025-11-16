import UserRepo from "../repositories/user.repository.js";
import Bcrypt from "../utils/bcrypt.util.js";

class AuthService {
  constructor(UserRepo) {
    this.UserRepo = UserRepo;
  }

  async register({ fullName, email, password }) {
    if (!email || !password) {
      const err = new Error("Email and Password are required");
      err.status = 400;
      throw err;
    }
    const UserExists = await this.UserRepo.findByEmail(email);
    if (UserExists) {
      const err = new Error("User already exists");
      err.status = 409;
      throw err;
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await this.UserRepo.create({
      fullName,
      email,
      password: hashed,
    });
  }
}
