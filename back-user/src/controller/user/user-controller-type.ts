import { IsString } from 'class-validator';

export class UserCreateControllerType {
  @IsString()
  username: string

  @IsString()
  email: string

  @IsString()
  password: string

}