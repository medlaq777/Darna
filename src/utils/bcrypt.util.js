import bcrypt from "bcryptjs";

class BcryptUtil {
  constructor(saltRounds = 10) {
    this.saltRounds = saltRounds;
  }
  async hash(password) {
    if (!password) throw new Error("Password Required");
    const hashed = await bcrypt.hash(password, this.saltRounds);
    return hashed;
  }

  async compare(password, hashedPassword) {
    if (!password || !hashedPassword)
      throw new Error("password and hash are required");
    return await bcrypt.compare(password, hashedPassword);
  }
}

export default new BcryptUtil();
