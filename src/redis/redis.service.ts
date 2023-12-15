import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class RedisService {
  constructor(@Inject('REDIS') private readonly redis) {}

  async get(key: string) {
    return await this.redis.get(key);
  }

  async set(key: string, value: string | number, seconds?: number) {
    await this.redis.set(key, value);
    if (seconds) {
      await this.redis.expire(key, seconds);
    }
  }
}
