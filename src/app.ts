import express from "express";
import StartUp from "./config/startup-config";
import router from "./middlewares/routes-middleware";
import errorHandler from "./middlewares/error-handler-middleware";

const app = express();

StartUp.setup();

app
  .use(express.json())
  .use("/", router)
  .use((err, req, res, next) => {
    errorHandler(res, err);
  });

app.listen(3000, () => {
  console.log(`Chef Experience API: Hosted on http://localhost:${3000}`);
});
