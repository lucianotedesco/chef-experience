import { RequestHandler } from "express";
import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { MealRateDto } from "../models/dtos/meal-rate-dto";
import { DtoMappers } from "../config/dto-mapper-config";
import { MealsService } from "../services/meals-service";

export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  getById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    try {
      const meal = await this.mealsService.getById(Number(id));
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
  };

  create: RequestHandler = async (req, res, next) => {
    try {
      const mealCreateDto: MealCreateDto =
        DtoMappers.mealCreateDtoMapper.deserialize({ ...req.body });

      await this.mealsService.create(mealCreateDto);
      return res.status(200).json({ message: "Meal created successfully" });
    } catch (err) {
      next(err);
    }
  };

  rate: RequestHandler = async (req, res, next) => {
    try {
      const mealRateDto: MealRateDto =
        DtoMappers.mealsRatesDtoMapper.deserialize({ ...req.body });

      await this.mealsService.rate(mealRateDto);
      return res.status(200).json({ message: "Meal rated successfully" });
    } catch (err) {
      next(err);
    }
  };
}
