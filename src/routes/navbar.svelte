<svelte:options customElement="navbar-component" />

<script>
	let { name = 'world' } = $props();
</script>

<div id="navbar"></div>

<style>
    #navbar {
        /* position: absolute; */
        /* top: 0; */
        /* left: 0; */
        margin: 0;
        width: 100vw;
        height: 100px;
        background-color: blue;
    }
</style>
<slot />