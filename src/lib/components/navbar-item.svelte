<script lang="ts">
	import { page } from '$app/state';
	import { getContext } from 'svelte';

	let active_list = getContext<Record<string, boolean>>('active_list');

	let props: { href: string; children: any; classes?: string } = $props();

	let active = $derived(page.url.pathname === props.href);

	$effect(() => {
		if (active_list) {
			active_list[props.href] = active;
		}
	});
</script>

<a
	{...props}
	class="h-min cursor-pointer rounded-lg p-1 text-center hover:bg-crust-primary sm:text-left {props?.classes ||
		''} {active ? 'bg-mantle-secondary' : ''}"
>
	{@render props.children()}
</a>
