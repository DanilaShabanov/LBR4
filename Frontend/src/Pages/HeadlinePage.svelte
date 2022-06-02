<script lang="ts">
	import type { Headline } from '../Models/headline.model';

	export let headline: Headline;

	//export let toTag: (tag: string) =>void;
</script>

<svelte:head>
	<title>{headline.title}</title>
</svelte:head>





<!-- <div class="wr">
	<section class="grid">
		<article class="grid-item"> -->
		<div style="margin: 20px; text-align:center">
			<div class="image">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="assets/novosti.jpg" width="400" height="200">
			</div>
			<div class="info">
				<h2>{headline.title}</h2>
				<div class="info-text">
					<p>{headline.text}</p>
					<p>Посыл: <a href=" ">

						{#if headline.tag}
							{#each headline.tag as tag}
								<a href=" #">{tag}<p></p></a>
							{/each}
						{/if}

					</p>
				</div>
			</div>
		</div>
		<!-- </article>
	</section>
</div> -->
