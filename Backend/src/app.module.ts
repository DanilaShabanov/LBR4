import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModel } from './categories.module';
import { KitchenModel } from './kitchen.module';

@Module({
	imports: [CategoriesModel, KitchenModel],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
