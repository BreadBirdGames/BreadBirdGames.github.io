<svelte:options customElement="grid-container" />

<script lang="ts">
    let { columns = "3", rowHeight = "1fr", gap = "2%" } = $props();
</script>

<div
    class="grid-container"
    style="--columns:{columns};--gap:{gap};--rowHeight:{rowHeight};"
>
    <slot />
</div>

<style>
    .grid-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-content: space-evenly;
    }
</style>
