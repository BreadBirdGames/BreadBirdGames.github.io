<script lang="ts">
	import Fa from 'svelte-fa';

	let props: { fa_icon?: any; classes?: string; link?: string; copyString?: string; text: string } =
		$props();

	function copyToClipboard() {
		if (!props.copyString) {
			alert('No string to copy!');
			return;
		}

		navigator.clipboard.writeText(props.copyString);
		alert('Copied to clipboard: ' + props.copyString);
	}
</script>

{#if props.link}
	<a
		class={`hover_tile flex flex-col rounded-lg border-2 border-text bg-mantle-primary p-2 text-center ${props.classes || ''}`}
		href={props.link}
	>
		{#if props.fa_icon}
			<Fa icon={props.fa_icon} class="mb-2 text-8xl" />
		{/if}
		<p class="text-lg">{props.text}</p>
	</a>
{:else}
	<button
		class={`hover_tile flex cursor-pointer flex-col rounded-lg border-2 border-text bg-mantle-primary p-2 ${props.classes || ''}`}
		onclick={copyToClipboard}
	>
		{#if props.fa_icon}
			<Fa icon={props.fa_icon} class="mb-2 text-8xl" />
		{/if}
		<p class="text-lg">{props.text}</p>
	</button>
{/if}
