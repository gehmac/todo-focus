import { Body, Controller, Post } from "@nestjs/common";
import { UserCreateControllerType } from "./user-controller-type";

@Controller({
  version: "*",
  path: "user",
})
export class UserCreateController {
  constructor() {}

  @Post("/create")
  async create(
    @Body() body : UserCreateControllerType
  ) {
    return {
      ...body
    }
  }
}
