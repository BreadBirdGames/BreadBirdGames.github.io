<script lang="ts">
	import LinkCopyButton from '$lib/components/link-copy-button.svelte';
	import GameTile from '$lib/components/game-tile.svelte';
	import * as games from '$lib/Games.json';
	import * as devs from '$lib/Devs.json';

	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
	import DevTile from '$lib/components/dev-tile.svelte';
</script>

<svelte:head>
	<title>BreadBird Games</title>
</svelte:head>

<h1 class="mt-4 text-4xl font-bold">BreadBird Games</h1>
<p class="text-lg">
	We're a small Danish game development cooperative studio founded in 2024. We make games we would
	want to play and try to have fun doing it.
</p>

<h1 id="games" class="mt-4 text-2xl font-bold">Our Games</h1>
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:h-[70dvh] md:grid-cols-3">
	{#each Object.entries(games?.default) as [key, game]}
		<GameTile {game} />
	{/each}
</div>

<h1 id="about" class="mt-4 text-2xl font-bold">About us!</h1>
<p class="text-lg">
	As mentioned above we're a small but passionate team founded in 2024 by a programmer and an artist
	who wanted to make games about dragons. That project died but we still wanted to make games so we
	got a group together to make games.
</p>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
	{#each Object.entries(devs?.default) as [key, dev]}
		<DevTile {dev} />
	{/each}
</div>

<h1 id="contact" class="mt-4 text-2xl font-bold">Get in contact!</h1>
<p class="text-lg">
	Got questions? wanna work with us? need help? Or just like bread and birds?! Get in contact!
</p>

<div class="grid grid-cols-3 gap-4">
	<LinkCopyButton fa_icon={faEnvelope} link="mailto:breadbirdgames@gmail.com" text="Over Email!" />
	<LinkCopyButton
		fa_icon={faDiscord}
		link="https://discordapp.com/users/528613707559993355"
		text="Discord!"
	/>
	<LinkCopyButton
		fa_icon={faInstagram}
		link="https://www.instagram.com/breadbirdgames/"
		text="Or Instagram!"
	/>
</div>
