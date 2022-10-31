import { verify } from "jsonwebtoken";
import Config from "../config/startup-config";
import { AuthError } from "../models/error-types";

const auth = (req, res, next) => {
  try {
    if ((<string>req.originalUrl).startsWith("/auth")) return next();

    const token = req.headers["authorization"].split(" ")[1];
    const decoded = verify(token, Config.token);
    req.user = decoded;
    next();
  } catch (err) {
    throw new AuthError();
  }
};

export default auth;
