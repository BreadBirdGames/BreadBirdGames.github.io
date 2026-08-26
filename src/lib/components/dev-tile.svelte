<script lang="ts">
	let props: {
		dev: { name: string; title: string; description: string; pronouns: string; image: string };
	} = $props();
</script>

<div
	class="flex items-center overflow-hidden rounded-lg border-2 border-text bg-mantle-primary p-2"
>
	<img src={`/devs/${props.dev.image}`} alt={props.dev.name} class="mr-4 h-50 w-50 rounded-lg" />
	<div class="flex flex-col">
		<div class="flex">
			<p class="text-2xl font-bold">{props.dev.name}</p>
			<p class="text-md">({props.dev.pronouns})</p>
		</div>
		<p class="mb-4 text-lg font-bold">{props.dev.title}</p>
		<p class="text-lg">{props.dev.description}</p>
	</div>
</div>
