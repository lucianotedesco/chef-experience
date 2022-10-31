import { dto, include } from "dto-mapper";

@dto()
export class UserLoginDto {
  @include()
  username: string;

  @include()
  password: string;
}
