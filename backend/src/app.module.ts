import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { MedicalStaffModule } from './medical-staff/medical-staff.module';
import { MedicalHistoryModule } from './medical-history/medical-history.module';
import { SpecialtyModule } from './specialty/specialty.module';
import { SpecialtyProcessModule } from './specialty-process/specialty-process.module';
import { DatabaseModule } from './database/database.module';
import { SpecialtyControlModule } from './specialty-control/specialty-control.module';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { ProfileMenuModule } from './profile-menu/profile-menu.module';
import { ProfileModule } from './profile/profile.module';
import { GrowthStageModule } from './growth-stage/growth-stage.module';
import { ServiceDeliveryInstitutionModule } from './service-delivery-institution/service-delivery-institution.module';
import { HealthNetworkModule } from './health-network/health-network.module';
import { AnthropometricMeasurementModule } from './anthropometric-measurement/anthropometric-measurement.module';
import { PatientMeasurementModule } from './patient-measurement/patient-measurement.module';
import { VaccineModule } from './vaccine/vaccine.module';
import { DoseModule } from './dose/dose.module';
import { KardexModule } from './kardex/kardex.module';
import { TypeListModule } from './type-list/type-list.module';
import { ProductModule } from './product/product.module';
import { KardexMasterModule } from './kardex-master/kardex-master.module';
import { AreaModule } from './area/area.module';
import moment from 'moment';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { CampaignModule } from './campaign/campaign.module';
import { CampaignMovementModule } from './campaign-movement/campaign-movement.module';

@Module({
  imports: [PatientModule, MedicalStaffModule, MedicalHistoryModule, SpecialtyModule, SpecialtyProcessModule, DatabaseModule, SpecialtyControlModule, AuthModule, MenuModule, ProfileMenuModule, ProfileModule, GrowthStageModule, ServiceDeliveryInstitutionModule, HealthNetworkModule, AnthropometricMeasurementModule, PatientMeasurementModule, VaccineModule, DoseModule, KardexModule, TypeListModule, ProductModule, KardexMasterModule, AreaModule, CampaignModule, CampaignMovementModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'MomentWrapper',
      useValue: moment
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
