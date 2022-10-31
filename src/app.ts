import express from "express";
import Config from "./config/startup-config";
import router from "./middlewares/routes-middleware";
import errorHandler from "./middlewares/error-handler-middleware";
import { verify } from "jsonwebtoken";
import { AuthError } from "./models/error-types";

const app = express();

Config.startup();

app
  .use(express.json())
  .use(auth)
  .use("/", router)
  .use((err, req, res, next) => {
    errorHandler(res, err);
  });

function auth(req, res, next) {
  try{
    if ((<string>req.originalUrl).startsWith("/auth"))
      return next();

    const token = req.headers['authorization'].split(" ")[1];
    const decoded = verify(token,Config.token);
    req.user = decoded;
    next();
  }
  catch(err){
    throw new AuthError();
  }
}

app.listen(3000, () => {
  console.log(`Chef Experience API: Hosted on http://localhost:${3000}`);
});
