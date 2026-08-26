<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/Logo.png" />
</svelte:head>

<div class="m-0 bg-base-primary p-2 text-text">
	<Navbar />

	{@render children()}

	<Footer />
</div>
