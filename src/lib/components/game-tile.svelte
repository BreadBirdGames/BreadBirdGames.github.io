<script lang="ts">
	let props: { game: { name: string; description: string; image: string; url: string } } = $props();
</script>

<a
	href={`/game/${props.game.id}`}
	class="hover_tile flex flex-col rounded-lg border-2 border-text bg-mantle-primary p-2"
>
	<img src={`/games/${props.game.id}/Thumb.png`} class="aspect-video w-full rounded-lg" />
	<div class="flex grow items-center justify-start">
		<p class="font-jack text-lg">{props.game.name}</p>
	</div>
</a>
