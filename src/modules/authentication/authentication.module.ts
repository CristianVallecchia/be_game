import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthenticationController } from 'src/controllers/authentication/authtentication.controller';
import { AuthService } from 'src/services/authentication/authentication.service';
import { UserService } from 'src/services/user/user.service.impl';
import { JwtStrategy } from 'src/strategies/authentication/jwt-strategy';
import { LocalStrategy } from 'src/strategies/authentication/local-strategy';
import { RefreshTokenStrategy } from 'src/strategies/authentication/refresh-token.strategy';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      global: true,
      secret: `${process.env.jwt_secret}`,
      signOptions: { expiresIn: '60s' },
    }),
    UserModule,
  ],
  providers: [
    AuthService,
    UserService,
    LocalStrategy,
    JwtStrategy,
    RefreshTokenStrategy,
  ],
  exports: [AuthService],
  controllers: [AuthenticationController],
})
export class AuthModule {}
