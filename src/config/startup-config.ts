import { sequelize } from "./database-config";

export class StartUp {
  static setup() {
    sequelize
      .authenticate()
      .then(() => {
        console.log("Sequelize: Connected successfully");
      })
      .catch((e: Error) => {
        console.log(e.message);
      });

    const syncSequelize = true;
    if (syncSequelize) {
      sequelize
        .sync()
        .then(() => {
          console.log("Sequelize: Database sync completed");
        })
        .catch((e: Error) => {
          console.log(e.message);
        });
    }
  }
}
