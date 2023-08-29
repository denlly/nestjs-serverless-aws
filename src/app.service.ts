import { Injectable } from '@nestjs/common';
import { UserDto } from './dto';

@Injectable()
export class AppService {

  private readonly users: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  register(dto: UserDto): void {
    this.users.push(dto);
  }

  async userList(): Promise<any> {
    return this.users;
  }


}
