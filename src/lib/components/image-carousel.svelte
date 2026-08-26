<script lang="ts">
	let { images = [], imagePrefix = '' }: { images?: string[]; imagePrefix?: string } = $props();

	let currentIndex = $state(0);
	let imageSubtractor = 3;

	if (images.length < 3) {
		imageSubtractor = 2;
	}

	function previous() {
		currentIndex = Math.max(0, currentIndex - 1);
	}

	function next() {
		currentIndex = Math.min(images.length - imageSubtractor, currentIndex + 1);
	}
</script>

<div class="relative w-full">
	<!-- Left arrow -->
	<button
		type="button"
		aria-label="Previous images"
		onclick={previous}
		disabled={currentIndex === 0}
		class="absolute top-1/2 left-2 z-10 -translate-y-1/2
           rounded-full bg-white/90 p-2 shadow-md
           transition hover:bg-white
           disabled:cursor-not-allowed disabled:opacity-30"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			class="h-5 w-5"
		>
			<path d="m15 18-6-6 6-6" />
		</svg>
	</button>

	<!-- Viewport -->
	<div class="overflow-hidden">
		<div
			class="flex gap-4 transition-transform duration-300 ease-in-out"
			style={`transform: translateX(calc(-${currentIndex} * (50% + 0.5rem)));`}
		>
			{#each images as image}
				<div
					class="w-[calc(50%-0.5rem)] shrink-0
                 {images.length > 2 ? 'md:w-[calc(33.333%-0.667rem)]' : ''}"
				>
					<img src={`${imagePrefix}/${image}`} alt="" class="h-full rounded-lg" />
				</div>
			{/each}
		</div>
	</div>

	<!-- Right arrow -->
	<button
		type="button"
		aria-label="Next images"
		onclick={next}
		disabled={currentIndex >= images.length - imageSubtractor}
		class="absolute top-1/2 right-2 z-10 -translate-y-1/2
           rounded-full bg-white/90 p-2 shadow-md
           transition hover:bg-white
           disabled:cursor-not-allowed disabled:opacity-30"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			class="h-5 w-5"
		>
			<path d="m9 18 6-6-6-6" />
		</svg>
	</button>
</div>
