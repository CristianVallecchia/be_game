import { Module } from '@nestjs/common';

import { TypeOrmModule } from './datasource/typeorm.module';
import { AuthModule } from './modules/authentication/authentication.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [TypeOrmModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
