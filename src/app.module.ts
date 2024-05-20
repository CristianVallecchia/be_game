import { Module } from '@nestjs/common';

import { TypeOrmModule } from './datasource/typeorm.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [TypeOrmModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
