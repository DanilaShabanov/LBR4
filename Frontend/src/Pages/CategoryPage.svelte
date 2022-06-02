<script lang="ts">
	import type { Category } from '../Models/category.model';
	import type { Headline } from '../Models/headline.model';

	export let category: Category;

	export let headlines: Array<Headline>;

	export let selectHeadline: (id: number) => void;
	//export let toTag: (tag: string) =>void;
</script>

<svelte:head>
	<title>{category.name}</title>
</svelte:head>





<div class="wr">
	<section class="grid">
{#each headlines as headline}

		<article class="grid-item" id="headline-0" on:click={() => selectHeadline(headline.id)}>
			<div class="image">
				<img src="{headline.imageURL}" alt="Новость" width="100%">
			</div>
			<div class="info">
				<p>{headline.title}</p>
				<div class="info-text">
					<p>{headline.text}</p>
					<p>Посыл:

						{#if headline.tag}
			{#each headline.tag as tag}
				<a href=" #">{tag}<p></p></a>
			{/each}
		{/if}

					</p>
				</div>
			</div>
		</article>


{/each}
</section>
</div>



