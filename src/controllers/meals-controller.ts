import { RequestHandler } from "express";
import { MealsService } from "../services/meals-service";

export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  getById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    try {
      const meal = await this.mealsService.getById(id);
      return res.status(200).json({ meals: meal });
    } catch (err) {
      next(err);
    }
  };

  getAll: RequestHandler = async (req, res, next) => {
    try {
      const meals = await this.mealsService.getAll();
      return res.status(200).json({ meals: meals });
    } catch (err) {
      next(err);
    }
  }

  create: RequestHandler = async (req, res, next) => {
    try {
      await this.mealsService.create({ ...req.body });

      return res.status(200).json({ message: "Meal created successfully" });
    } catch (err) {
      next(err);
    }
  };

  rate: RequestHandler = async (req, res, next) => {
    try {
      await this.mealsService.rate({ ...req.body });

      return res.status(200).json({ message: "Meal rated successfully" });
    } catch (err) {
      next(err);
    }
  };
}
