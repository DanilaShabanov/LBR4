import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './Models/Category';

@Controller()
export class CategoriesController {
	public constructor(
		private readonly categoriesService: CategoriesService)
	{ }

	@Get('categories')
	public getAllCategories(): Category[] {
		return this.categoriesService.findAllCategories();
	}
}
