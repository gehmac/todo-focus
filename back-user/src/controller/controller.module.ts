import { Module } from "@nestjs/common";
import { UserCreateController } from "./user/user-create-controller";

@Module({
  controllers: [UserCreateController],
})
export class ControllerModule {}
