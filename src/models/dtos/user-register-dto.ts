import { dto, include, mapTo } from "dto-mapper";

@dto()
export class UserRegisterDto {
  @include()
  username: string;

  @include()
  password: string;

  @include()
  user_role: string;
}
