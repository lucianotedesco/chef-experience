import { Router } from "express";
import { AuthController } from "../controllers/auth-controller";
import { MealsController } from "../controllers/meals-controller";
import { Chefs } from "../models/entities/chefs";
import { ChefsRepository } from "../repositories/chefs-repository";
import { CustomersRepository } from "../repositories/customers-repository";
import { MealsRatesRepository } from "../repositories/meals-rates-repository";
import { MealsRepository } from "../repositories/meals-repository";
import { UsersRepository } from "../repositories/users-repository";
import { AuthService } from "../services/auth-service";
import { MealsService } from "../services/meals-service";

const router = Router();

const mealsController = new MealsController(
  new MealsService(
    new MealsRepository(),
    new MealsRatesRepository(),
    new ChefsRepository(),
    new CustomersRepository()
  )
);

const usersController = new AuthController(
  new AuthService(
    new UsersRepository(),
    new ChefsRepository(),
    new CustomersRepository()
  )
);

const mealsRoute = "/meals";
router.get(`${mealsRoute}/`, mealsController.getAll);
router.post(`${mealsRoute}/`, mealsController.create);
router.post(`${mealsRoute}/rate`, mealsController.rate);

const authRoute = "/auth";
router.post(`${authRoute}/register`, usersController.register);
router.post(`${authRoute}/login`, usersController.login);

export default router;
