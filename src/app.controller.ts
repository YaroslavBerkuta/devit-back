import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async fetchData(@Body('index') index: number) {
    return this.appService.fetchData(index);
  }
}
