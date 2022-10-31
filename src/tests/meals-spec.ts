import { MealsFactory } from "../factories/meals-factory";
import { MealsRatesFactory } from "../factories/meals-rates-factory";
import { MealDto } from "../models/dtos/meal-dto";
import { MealRateDto } from "../models/dtos/meal-rate-dto";
import { ChefsRepository } from "../repositories/chefs-repository";
import { MealsRatesRepository } from "../repositories/meals-rates-repository";
import { MealsRepository } from "../repositories/meals-repository";
import { MealsService } from "../services/meals-service";

describe("mealsService", () => {
  let mockMealsRepository: MealsRepository;
  let mockMealsRatesRepository: MealsRatesRepository;
  let mealsService: MealsService;
  let mealsDto: MealDto[];
  let mealRate: MealRateDto;
  let meal: MealDto;

  beforeEach(() => {
    mealsDto = [
      MealsFactory.getMeal("meal1", "chef1", 5),
      MealsFactory.getMeal("meal2", "chef2", 5),
      MealsFactory.getMeal("meal3", "chef3", 5),
      MealsFactory.getMeal("meal4", "chef4", 5),
      MealsFactory.getMeal("meal5", "chef5", 5),
    ];

    mockMealsRepository = new MealsRepository();
    mockMealsRatesRepository = new MealsRatesRepository();

    mealsService = new MealsService(
      mockMealsRepository,
      mockMealsRatesRepository,
      new ChefsRepository()
    );
  });

  describe("can rate meal", () => {
    it("should pass rate validations", async () => {
      meal = MealsFactory.getMeal("meal1", "chef1", 5);
      mealRate = MealsRatesFactory.getMealRate(1, 5);

      jest
        .spyOn(mockMealsRepository, "findById")
        .mockImplementation(async () => meal);

      jest
        .spyOn(mockMealsRatesRepository, "findOne")
        .mockImplementation(async () => null);

      expect(async () => await mealsService.canRateMeal(mealRate, 0)).not.toThrow();
    });

    describe("can't rate meal (invalid rate)", () => {
      it("shouldn't pass rate validations because invalid rate", async () => {
        meal = MealsFactory.getMeal("meal1", "chef1", 5);
        mealRate = MealsRatesFactory.getMealRate(1, 8);

        jest
          .spyOn(mockMealsRepository, "findById")
          .mockImplementation(async () => meal);

        jest
          .spyOn(mockMealsRatesRepository, "findOne")
          .mockImplementation(async () => null);

        expect(async () => await mealsService.canRateMeal(mealRate, 0)).rejects.toThrow();
      });

      describe("search", () => {
        it("have to return a collection of meals and rates", async () => {
          jest
            .spyOn(mockMealsRepository, "findAll")
            .mockImplementation(async () => mealsDto);

          expect(await mealsService.getAll()).toStrictEqual(mealsDto);
        });
      });
    });
  });
});
