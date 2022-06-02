import { BaseService } from './base.service';
import type { Headline } from '../Models/headline.model';

export class HeadlinesService extends BaseService {
	public constructor(
		baseApiUrl: string)
	{
		super(`${baseApiUrl}/headlines`);
	}

	public Read(id: number, callback: (headline: Headline) => void): void {
		return this.Request('GET', `${this.apiUrl}/${id}`, callback);
	}

	public ReadAll(callback: (headlines: Array<Headline>) => void): void {
		return this.Request('GET', `${this.apiUrl}/`, callback);
	}

	public ReadByCategory(categoryId: number, callback: (headlines: Array<Headline>) => void): void {
		const filteredCallback = (headlines: Array<Headline>) => callback(headlines
			.filter(headline => headline.categoryId === categoryId)
		);

		return this.ReadAll(filteredCallback);
	}

	public ReadByTag(tag: string, callback: (headlines: Array<Headline>) => void): void {
		const filteredCallback = (headlines: Array<Headline>) => callback(headlines
			.filter(headline=> headline.tag.find(tags => tags === tag))
		);

		return this.ReadAll(filteredCallback);
	}
}
