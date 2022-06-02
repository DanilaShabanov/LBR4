import { Module } from '@nestjs/common';
import { kitchenController } from './kitchen.controller';
import { Kitchen } from './kitchen.service';

@Module({
  controllers: [kitchenController],
  providers: [Kitchen],
})
export class KitchenModel {}
