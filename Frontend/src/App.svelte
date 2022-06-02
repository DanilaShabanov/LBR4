<script lang="ts">
	import { CategoriesService } from './Services/category.service';
	import { HeadlinesService } from './Services/headline.service';
	import HomePage from './Pages/HomePage.svelte';
	import CategoryPage from './Pages/CategoryPage.svelte';
	import HeadlinePage from './Pages/HeadlinePage.svelte';
	import type { Category } from './Models/category.model';
	import type { Headline } from './Models/headline.model';

	//import "./../public/style.css";
	import "./../public/style.css";
	import "./../public/icon_styles.css";

	const categoriesService = new CategoriesService('http://localhost:3000');
	const headlinesService = new HeadlinesService('http://localhost:3000');

	let page: 'home' | 'category' | 'headline' | 'tag' | null = null;

	let categoriesList: Array<Category> | null = null;

	let pageContent: {
		category: Category | null;
		headlinesList?: Array<Headline>;
		headline?: Headline;
	} | null = null;

	let pageContentTag: {
		tagStr: string;
		tag?: Array<string>;
		headlinesList?: Array<Headline>;
	} | null = null;

	function clearPage(): void {
		page = null;
		pageContent = null;
	}

	function toHome(): void
	{
		clearPage();

		const onLoad = () => {
			page = 'home';
			pageContent = null;
		};

		return onLoad();
	}

	function toCategory(id: number): void {
		clearPage();

		const onLoad = (headlines: Array<Headline>) => {
			page = 'category';
			pageContent = {
				category: categoriesList.find(category => category.id === id),
				headlinesList: headlines
			};
		};

		return headlinesService.ReadByCategory(id, onLoad);
	}

	function toTag(tag: string): void {
		clearPage();

		const onLoad = (headlines: Array<Headline>) => {
			page = 'tag';
			pageContentTag = {
				tagStr: tag,
				tag: [tag],
				headlinesList: headlines.filter(headline=> headline.tag.find(tags => tags === tag))
				// tagStr: tag,
				// tag: headlines.find(headline => headline.tag.filter(tags => tags === tag)).tag,
				// headlinesList: headlines
			};
		};

		return headlinesService.ReadByTag(tag, onLoad);
	}

	function toHeadline(id: number): void {
		clearPage();

		const onLoad = (headline: Headline) => {
			page = 'headline';
			pageContent = {
				category: categoriesList.find(category => category.id === headline.categoryId),
				headline
			};
		};

		return headlinesService.Read(id, onLoad);
	}

	categoriesService.ReadAll(categories => {
		categoriesList = categories;
		toHome();
	});
</script>

<!-- <header>
	<div class="title" on:click={toHome}><h1>Я люблю этот мир</h1></div>
	<nav class="header_menu">
		<ul>
			{#if categoriesList}
				{#each categoriesList as category}
				<li on:click={() => toCategory(category.id)}>{category.name}</li>
				{/each}
			{/if}
		</ul>
	</nav>
</header> -->



<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

<header>
	<div class="header_section">
		<div class="social" style="display:flex;">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="assets/RussiaToday.jpg" width="1100" height="100" style="margin-left: -20px;">
			<div class="wrapper">
				<ul>
					<li><a href="index.html" on:click={toHome} style="font-size: large; color: white; font-size: 25px;">&#8962</a></li>
					<li class="vk"><i class="fa fa-vk fa-2x" aria-hidden="true"></i></li>
					<li class="facebook"><i class="fa fa-facebook " aria-hidden="true"></i></li>
					<li class="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></li>
					<li class="instagram"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
					<li class="google"><i class="fa fa-google fa-2x" aria-hidden="true"></i></li>
				</ul>
			</div>
		</div>
		<ul class="names_section">
			<nav>

				{#if categoriesList}
				{#each categoriesList as category}
				<li class="header_names">
				<a href=" #" on:click={() => toCategory(category.id)} class="category">{category.name}</a>
				</li>
				{/each}
				{/if}
			</nav>
		</ul>
	</div>
</header>












<main class="main">
	{#if page === 'home'}
	<HomePage></HomePage>
	{:else if page === 'category'}
	<CategoryPage
		category={pageContent.category}
		headlines={pageContent.headlinesList}
		selectHeadline={toHeadline}
		>
	</CategoryPage>
	{:else if page === 'headline'}
	<HeadlinePage
		headline={pageContent.headline}
		>
	</HeadlinePage>
	{:else}
	Загрузка...
	{/if}
</main>

<footer>
	<div class="footer">
		<div class="copyright">
			<p>© 2022 News | All Rights Reserved</p>
		</div>
	</div>
</footer>
