import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { MedicalStaffProvider } from 'src/medical-staff/providers/medical-staff.provider';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '3600s'}
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService, 
    ...MedicalStaffProvider, 
  ],
})
export class AuthModule {}
