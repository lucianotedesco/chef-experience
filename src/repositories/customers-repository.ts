import { UserRegisterDto } from "../models/dtos/user-register-dto";
import { Customers } from "../models/entities/customers";

export class CustomersRepository {
  async findByUserId(userId: number) {
    return Customers.findOne({
      where: { user_id: userId },
    });
  }

  async create(dto: UserRegisterDto, userId: number) {
    return Customers.create({
      name: dto.username,
      user_id: userId,
    });
  }
}
