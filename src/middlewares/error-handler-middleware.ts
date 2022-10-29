import { BusinessError, InternalError } from "../models/error-types";

const errorHandler = (res, err) => {
  if (err instanceof BusinessError)
    res.status(400).json({ error: err.message });
  if (err instanceof InternalError || err instanceof Error)
    res.status(500).json({ error: err.message });
};

export default errorHandler;
