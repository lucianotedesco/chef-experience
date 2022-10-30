import { buildMapper, IMapper } from "dto-mapper";
import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { MealRateDto } from "../models/dtos/meal-rate-dto";
import { UserRegisterDto } from "../models/dtos/user-register-dto";

//we store the dto mappers beacuse their creation it's very expensive
export class DtoMappers {

  private static _mealCreateDtoMapper: IMapper<MealCreateDto, unknown>;
  public static get mealCreateDtoMapper() {
    if (this._mealCreateDtoMapper)
        return this._mealCreateDtoMapper;
    else
        this._mealCreateDtoMapper = buildMapper(MealCreateDto);
        return this._mealCreateDtoMapper
  }

  private static _mealsRatesDtoMapper: IMapper<MealRateDto, unknown>;
  public static get mealsRatesDtoMapper() {
    if (this._mealsRatesDtoMapper)
        return this._mealsRatesDtoMapper;
    else
        this._mealsRatesDtoMapper = buildMapper(MealRateDto);
        return this._mealsRatesDtoMapper
  }

  private static _userRegisterDtoMapper: IMapper<UserRegisterDto, unknown>;
  public static get userRegisterDtoMapper() {
    if (this._userRegisterDtoMapper)
        return this._userRegisterDtoMapper;
    else
        this._userRegisterDtoMapper = buildMapper(UserRegisterDto);
        return this._userRegisterDtoMapper
  }
}
