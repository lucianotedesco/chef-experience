import express, { json, urlencoded } from "express";
import startup from "./config/startup";
import router from "./middlewares/routes-middleware";
import errorHandler from "./middlewares/error-handler-middleware"

const app = express();
const port = 3000;

startup();

app.use(express.json());
app.use("/meals", router);

app.use((err, req, res, next) => {
  errorHandler(res, err);
});

app.listen(port, () => {
  console.log(`Chef Experience API: Hosted on http://localhost:${port}`);
});
