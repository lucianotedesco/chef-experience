import express from "express";
import Config from "./config/startup-config";
import router from "./middlewares/routes-middleware";
import errorHandler from "./middlewares/error-handler-middleware";
import auth from "./middlewares/auth-middleware";

const app = express();
Config.startup();

app
  .use(express.json())
  .use(auth)
  .use("/", router)
  .use((err, req, res, next) => {
    errorHandler(res, err);
  });

app.listen(3000, () => {
  console.log(`Chef Experience API: Hosted on http://localhost:${3000}`);
});
