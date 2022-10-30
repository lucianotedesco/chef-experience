import express from "express";
import { StartUp } from "./config/startup-config";
import router from "./middlewares/routes-middleware";
import errorHandler from "./middlewares/error-handler-middleware"

const app = express();
const port = 3000;

StartUp.setup();

app.use(express.json());
app.use("/meals", router);

app.use((err, req, res, next) => {
  errorHandler(res, err);
});

app.listen(port, () => {
  console.log(`Chef Experience API: Hosted on http://localhost:${port}`);
});
