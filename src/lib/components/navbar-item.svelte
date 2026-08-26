<script lang="ts">
	import { page } from '$app/state';
	import { getContext } from 'svelte';

	let active_list = getContext<Record<string, boolean>>('active_list');

	let props: { href: string; children: any } = $props();

	let active = $derived(page.url.pathname === props.href);

	$effect(() => {
		if (active_list) {
			active_list[props.href] = active;
		}
	});
</script>

<a
	{...props}
	class="cursor-pointer rounded-lg p-1 hover:bg-crust-primary {props?.classes || ''} {active
		? 'bg-mantle-secondary'
		: ''}"
>
	{@render props.children()}
</a>
