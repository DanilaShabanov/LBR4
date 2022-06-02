import { Controller, Get, Param } from '@nestjs/common';
import { Kitchen } from './kitchen.service';
import { kitchen } from './Models/kitchen';

@Controller('')
export class kitchenController {
	public constructor(
		private readonly kitchenService: Kitchen)
	{ }

	@Get('kitchen')
	public getAllKitchen(): kitchen[] {
		return this.kitchenService.findAllKitchens();
	}

	@Get('kitchens/:categoryId')
	public getKitchenByCategoryId(@Param() params): kitchen[] {
		return this.kitchenService.getKitchenByCategoryId(params);
	}

	@Get('kitchen/:id')
	public getKitchenById(@Param('id') id: number): kitchen {
		return this.kitchenService.getKitchen(id);
	}
}

