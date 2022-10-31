import {
  BusinessError,
  InternalError,
  DtoError,
  AuthError,
} from "../models/error-types";

const errorHandler = (res, err) => {
  if (err instanceof AuthError)
    return res.status(401).json({ error: "Auth Error: Ensure you are logged in and using the token on the request"});
  if (err instanceof DtoError)
    return res.status(400).json({ parameters_error: err.message });
  if (err instanceof BusinessError)
    return res.status(400).json({ business_error: err.message });
  if (err instanceof InternalError || err instanceof Error)
    return res.status(500).json({ error: err.message });
};

export default errorHandler;
