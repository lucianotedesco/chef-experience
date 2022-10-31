import { UserRegisterDto } from "../models/dtos/user-register-dto";
import { Customers } from "../models/entities/customers";

export class CustomersRepository {
  async findById(id: number) {
    return Customers.findByPk(id);
  }

  async create(dto: UserRegisterDto, userId: number) {
    return Customers.create({
      name: dto.username,
      user_id: userId,
    });
  }
}
