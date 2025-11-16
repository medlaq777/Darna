import bcrypt from "bcryptjs";

class BcryptUtil {
  constructor(saltRounds = 10) {
    this.saltRounds = saltRounds;
  }
  static hash(password) {
    if (!password) throw new Error("Password Required");
    return bcrypt.hash(password, this.saltRounds);
  }

  static compare(password, hashedPassword) {
    if (!password || !hashedPassword)
      throw new Error("password and hash are required");
    return bcrypt.compare(password, hashedPassword);
  }
}

export default BcryptUtil();
