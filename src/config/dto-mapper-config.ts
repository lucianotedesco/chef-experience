import { buildMapper, IMapper } from "dto-mapper";
import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { MealRateDto } from "../models/dtos/meal-rate-dto";

//we store the dto mappers beacuse their creation it's very expensive
export class DtoMappers {
  private static _mealCreateDtoMapper: IMapper<MealCreateDto, unknown>;
  private static _mealsRatesDtoMapper: IMapper<MealRateDto, unknown>;

  public static get mealCreateDtoMapper() {
    if (this._mealCreateDtoMapper)
        return this._mealCreateDtoMapper;
    else
        this._mealCreateDtoMapper = buildMapper(MealCreateDto);
        return this._mealCreateDtoMapper
  }

  public static get mealsRatesDtoMapper() {
    if (this._mealsRatesDtoMapper)
        return this._mealsRatesDtoMapper;
    else
        this._mealsRatesDtoMapper = buildMapper(MealRateDto);
        return this._mealsRatesDtoMapper
  }
}
