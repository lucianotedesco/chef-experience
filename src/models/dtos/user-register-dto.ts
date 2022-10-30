import { dto, include } from "dto-mapper";
import { EnumDataType } from "sequelize";

@dto()
export class UserRegisterDto {
  @include()
  username: string;

  @include()
  password: string;

  @include()
  role: string;
}
