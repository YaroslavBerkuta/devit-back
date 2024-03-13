import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async fetchData(index: number): Promise<number> {
    const delay = Math.floor(Math.random() * 1000) + 1;
    await new Promise((resolve) => setTimeout(resolve, delay));

    return index;
  }
}
