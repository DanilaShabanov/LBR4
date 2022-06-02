import { Injectable } from '@nestjs/common';
import { Category } from './Models/Category';

@Injectable()
export class CategoriesService {
	private readonly categories: Category[] = [
		{
			"id": 0,
			"name": "Русская"
		},
		{
			"id": 1,
			"name": "Азиатская"
		},
		{
			"id": 2,
			"name": "Европейская"
		}
	];

	public findAllCategories(): Category[] {
		return this.categories;
	}
}
