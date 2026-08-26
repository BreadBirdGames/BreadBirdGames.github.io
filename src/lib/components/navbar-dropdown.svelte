<script lang="ts">
	import { setContext } from 'svelte';

	let props: { label: string; children: any } = $props();

	let active_list = $state<Record<string, boolean>>({});
	let has_active_child = $derived(Object.values(active_list).some(Boolean));

	setContext('active_list', active_list);
</script>

<div
	class="group pointer relative cursor-pointer rounded-lg p-2 hover:bg-crust-primary {has_active_child
		? 'bg-mantle-secondary'
		: ''}"
>
	<span>{props.label}</span>

	<div
		class="absolute top-10 right-0 z-999 hidden min-w-50 flex-col overflow-hidden rounded-b-lg border-2 border-text border-t-mantle-primary bg-mantle-primary group-hover:flex"
	>
		{@render props?.children()}
	</div>
</div>
