import { buildMapper, IMapper } from "dto-mapper";
import { MealCreateDto } from "../models/dtos/meal-create-dto";
import { MealDto } from "../models/dtos/meal-dto";
import { MealRateDto } from "../models/dtos/meal-rate-dto";
import { UserLoginDto } from "../models/dtos/user-login-dto";
import { UserRegisterDto } from "../models/dtos/user-register-dto";

//we store the dto mappers beacuse their creation it's very expensive
export class DtoMappers {
  private static _mealCreateDtoMapper: IMapper<MealCreateDto, unknown>;
  private static _mealsRatesDtoMapper: IMapper<MealRateDto, unknown>;
  private static _userRegisterDtoMapper: IMapper<UserRegisterDto, unknown>;
  private static _userLoginDtoMapper: IMapper<UserLoginDto, unknown>;
  private static _mealDtoMapper: IMapper<MealDto, unknown>;

  public static get mealCreateDtoMapper() {
    if (this._mealCreateDtoMapper) return this._mealCreateDtoMapper;
    else this._mealCreateDtoMapper = buildMapper(MealCreateDto);
    return this._mealCreateDtoMapper;
  }

  public static get mealsRatesDtoMapper() {
    if (this._mealsRatesDtoMapper) return this._mealsRatesDtoMapper;
    else this._mealsRatesDtoMapper = buildMapper(MealRateDto);
    return this._mealsRatesDtoMapper;
  }

  public static get userRegisterDtoMapper() {
    if (this._userRegisterDtoMapper) return this._userRegisterDtoMapper;
    else this._userRegisterDtoMapper = buildMapper(UserRegisterDto);
    return this._userRegisterDtoMapper;
  }

  public static get userLoginDtoMapper() {
    if (this._userLoginDtoMapper) return this._userLoginDtoMapper;
    else this._userLoginDtoMapper = buildMapper(UserLoginDto);
    return this._userLoginDtoMapper;
  }

  public static get MealDtoMapper() {
    if (this._mealDtoMapper) return this._mealDtoMapper;
    else this._mealDtoMapper = buildMapper(MealDto);
    return this._mealDtoMapper;
  }
}
