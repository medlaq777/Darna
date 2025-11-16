import bcrypt from "bcryptjs";

class BcryptUtil {
  static hash(password, saltRounds = 10) {
    if (!password) throw new Error("Password Required");
    return bcrypt.hash(password, saltRounds);
  }

  static compare(password, hashedPassword) {
    if (!password || !hashedPassword)
      throw new Error("password and hash are required");
    return bcrypt.compare(password, hashedPassword);
  }
}

export default BcryptUtil;
