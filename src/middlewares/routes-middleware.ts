import { Router } from "express";
import { MealsController } from "../controllers/meals-controller";
import { MealsService } from "../services/meals-service";

const mealsController = new MealsController(new MealsService());
const router = Router();

router.get("/:id", mealsController.getById);
router.get("/", mealsController.getAll);
router.post("/", mealsController.create);
router.post("/rate", mealsController.rate)

export default router;

// export class RouterConfig {
//   private readonly router(): Router {}

//   constructor(private readonly mealsController: MealsController) {
//     this.router = Router();

//     this.router.get("/:id", mealsController.getById);
//     this.router.get("/", mealsController.getAll);
//     this.router.post("/", mealsController.create);
//   }
// }

// export default RouterConfig;
