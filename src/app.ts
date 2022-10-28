import express, { json, urlencoded } from "express";
import startup from "./config/startup-config";
import router from "./routes";

const app = express();
const port = 3000;

startup();

app.use("/chefs", router)

app.use(json())
app.use(urlencoded({extended: true}))

app.use((
  err: Error,
  req: express.Request,
  res: express.Response
) => {
  res.status(500).json({message: err.message});
});

app.listen(port, () => {
  console.log(`Chef Experience API: Hosted on http://localhost:${port}`);
});


