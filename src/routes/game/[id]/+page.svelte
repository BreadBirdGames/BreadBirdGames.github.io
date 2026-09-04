<script lang="ts">
	import ImageCarousel from '$lib/components/image-carousel.svelte';
	import LinkCopyButton from '$lib/components/link-copy-button.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const game = $derived(data?.game ?? data);

	let linkAmount = 0;
	if (game?.game_link) linkAmount++;
	if (game?.source_link) linkAmount++;
</script>

<svelte:head>
	<title>{game?.name ?? 'Loading...'}</title>
</svelte:head>

<div class="mt-4 flex flex-col gap-4">
	{#if game}
		<div class="flex flex-col items-center justify-between gap-2 sm:flex-row">
			<div class="shrink">
				<h1 class="text-4xl font-bold">{game.name ?? 'Untitled'}</h1>

				{#if game.description}
					<p class="text-xl">{game.description}</p>
				{/if}
			</div>

			{#if game.youtube_id}
				<div class="aspect-video w-[95vw] overflow-hidden rounded-xl sm:w-[840px]">
					<iframe
						class="h-full w-full"
						src={`https://www.youtube.com/embed/${game.youtube_id}`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			{/if}
		</div>

		{#if game.images}
			<div class="grid-col-3 grid">
				<ImageCarousel imagePrefix={`/games/${game.id}`} images={game.images} />
			</div>
		{/if}

		<div class="grid grid-cols-{linkAmount} gap-4">
			{#if game.game_link}
				<LinkCopyButton classes="text-center" link={game.game_link} text="Play the game!" />
			{/if}

			{#if game.source_link}
				<LinkCopyButton classes="text-center" link={game.source_link} text="View the source code" />
			{/if}
		</div>
	{:else}
		<h1>Loading...</h1>
	{/if}
</div>
