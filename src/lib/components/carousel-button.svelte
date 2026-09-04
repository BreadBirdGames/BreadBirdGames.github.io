<script lang="ts">
	import Fa from 'svelte-fa';

	let props: {
		move: (direction: -1 | 1) => void;
		direction: -1 | 1;
		canGo: boolean;
		classes?: string;
		icon: any;
	} = $props();
</script>

<button
	type="button"
	class="absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-lg border-2 border-text bg-mantle-primary text-text shadow-md transition hover:bg-mantle-secondary focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-base-primary disabled:cursor-not-allowed disabled:bg-base-primary disabled:opacity-50 disabled:shadow-none {props.classes ||
		''}"
	aria-label={props.direction === -1 ? 'Show previous screenshot' : 'Show next screenshot'}
	onclick={() => props.move(props.direction)}
	disabled={!props.canGo}
>
	<Fa icon={props.icon} class="text-xl" />
</button>
