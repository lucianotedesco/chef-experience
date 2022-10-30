import { sequelize } from "./database-config";

export default class StartUp {
  static setup() {
    sequelize
      .authenticate()
      .then(() => {
        console.log("Sequelize: Connected successfully");
      })
      .catch((e: Error) => {
        console.log(e.message);
      });

    const syncSequelize = false;
    if (syncSequelize) {
      sequelize
        .sync({force: true})
        .then(() => {
          console.log("Sequelize: Database sync completed");
        })
        .catch((e: Error) => {
          console.log(e.message);
        });
    }
  }
}
