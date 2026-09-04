<script lang="ts">
	import { onMount } from 'svelte';
	import CarouselButton from './carousel-button.svelte';
	import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

	let { images = [], imagePrefix = '' }: { images?: string[]; imagePrefix?: string } = $props();

	let viewport: HTMLDivElement;
	let canGoPrevious = $state(false);
	let canGoNext = $state(false);
	let hasOverflow = $state(false);

	const edgeTolerance = 2;

	function updateControls() {
		if (!viewport) return;

		const maximumScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);

		hasOverflow = maximumScroll > edgeTolerance;
		canGoPrevious = viewport.scrollLeft > edgeTolerance;
		canGoNext = viewport.scrollLeft < maximumScroll - edgeTolerance;
	}

	function move(direction: -1 | 1) {
		if (!viewport) return;

		const slides = viewport.querySelectorAll<HTMLElement>('[data-carousel-slide]');
		const slideWidth =
			slides.length > 1 ? slides[1].offsetLeft - slides[0].offsetLeft : slides[0]?.offsetWidth;

		if (!slideWidth) return;

		const currentSlide = Math.round(viewport.scrollLeft / slideWidth);
		viewport.scrollTo({ left: (currentSlide + direction) * slideWidth, behavior: 'smooth' });
	}

	onMount(() => {
		const resizeObserver = new ResizeObserver(updateControls);
		resizeObserver.observe(viewport);
		updateControls();

		return () => resizeObserver.disconnect();
	});
</script>

<section
	class="relative w-full rounded-lg"
	aria-label="Game screenshots"
	aria-roledescription="carousel"
>
	<div
		class="snap-x snap-mandatory scrollbar-none overflow-x-auto scroll-smooth rounded-lg motion-reduce:scroll-auto"
		bind:this={viewport}
		onscroll={updateControls}
	>
		<div class="flex gap-2">
			{#each images as image, index}
				<figure
					data-carousel-slide
					class="m-0 flex shrink-0 basis-[calc((100%_-_0.5rem)_/_2)] snap-start overflow-hidden rounded-lg border-2 border-text bg-base-secondary md:basis-[calc((100%_-_1rem)_/_3)]"
				>
					<img
						class="block w-full object-cover"
						src={`${imagePrefix}/${image}`}
						alt={`Game screenshot ${index + 1} of ${images.length}`}
						draggable="false"
					/>
				</figure>
			{/each}
		</div>
	</div>

	{#if hasOverflow}
		<CarouselButton
			{move}
			direction={-1}
			canGo={canGoPrevious}
			classes="left-2"
			icon={faChevronLeft}
		/>
		<CarouselButton
			{move}
			direction={1}
			canGo={canGoNext}
			classes="right-2"
			icon={faChevronRight}
		/>
	{/if}
</section>
