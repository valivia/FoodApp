import { Injectable } from "@nestjs/common";

@Injectable()
export class IngredientService {

  findAll() {
    return `This action returns all ingredient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }
}
