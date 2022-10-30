import { BusinessError, InternalError, DtoError } from "../models/error-types";

const errorHandler = (res, err) => {
  if (err instanceof DtoError)
    return res.status(400).json({ parameters_error: err.message });
  if (err instanceof BusinessError)
    return res.status(400).json({ business_error: err.message });
  if (err instanceof InternalError || err instanceof Error)
    return res.status(500).json({ error: err.message });
};

export default errorHandler;
