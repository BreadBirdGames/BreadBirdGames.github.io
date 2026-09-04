<script lang="ts">
	import { onMount } from 'svelte';
	import NavbarDropdown from './navbar-dropdown.svelte';
	import NavbarItem from './navbar-item.svelte';

	import * as games from '$lib/Games.json';
</script>

<div class="flex justify-between rounded-lg border-2 border-text bg-mantle-primary p-0">
	<NavbarItem href="/" classes="mr-4">
		<img class="aspect-square w-24" src="/Logo.png" alt="Logo" />
	</NavbarItem>

	<div class="flex flex-col justify-end">
		<div class="flex justify-between">
			<NavbarDropdown label="Games">
				{#each games?.default as game}
					<NavbarItem classes="p-2" href={`/game/${game.id}`}>{game.name}</NavbarItem>
				{/each}
			</NavbarDropdown>

			<NavbarItem classes="p-2" href="/#about">About us</NavbarItem>
			<NavbarItem classes="p-2" href="/#contact">Get in contact!</NavbarItem>
		</div>
	</div>
</div>
