import { Controller, Get,Body,Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('register')
  register(@Body() dto:UserDto ): void {
    this.appService.register(dto);
  }

  @Get('users')
  users(){
    return this.appService.userList();
  }
}
