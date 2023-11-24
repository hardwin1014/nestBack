import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';
import { SystemModule } from '@/modules/admin/system/system.module';

@Module({
  imports: [SystemModule],
  controllers: [PersonalController],
  providers: [PersonalService],
})
export class PersonalModule {}
