import { RequestHandler } from "express";
import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { MealRateDto } from "../models/dtos/meal-rate-dto";
import { DtoMappers } from "../config/dto-mapper-config";
import { MealsService } from "../services/meals-service";
import { AuthError, RoleError } from "../models/error-types";

export class MealsController {
  constructor(private readonly _mealsService: MealsService) {}

  getAll: RequestHandler = async (req, res, next) => {
    try {
      const chefId = req.query.chef_id ? Number(req.query.chef_id) : null;
      const meals = await this._mealsService.getAll(chefId);

      return res.status(200).json({ meals: meals });
    } catch (err) {
      next(err);
    }
  };

  create: RequestHandler = async (req, res, next) => {
    try {
      const role = req.body.user.user_role 
      if (role != "chef")
        throw new RoleError("Only a chef cant create meals")

      const mealCreateDto: MealCreateDto =
        DtoMappers.mealCreateDtoMapper.deserialize({ ...req.body });

      await this._mealsService.create(mealCreateDto);

      return res.status(200).json({ message: "Meal created successfully" });
    } catch (err) {
      next(err);
    }
  };

  rate: RequestHandler = async (req, res, next) => {
    try {
      const user = req.body.user
      
      if (user.user_role != "customer")
        throw new RoleError("Only a customer cant rate meals")

      const mealRateDto: MealRateDto =
        DtoMappers.mealsRatesDtoMapper.deserialize({ ...req.body });

      //await this._mealsService.rate(mealRateDto, user.);
      return res.status(200).json({ message: "Meal rated successfully" });
    } catch (err) {
      next(err);
    }
  };
}
