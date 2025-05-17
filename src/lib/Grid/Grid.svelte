<svelte:options customElement="grid-container" />

<script lang="ts">
    export let columns = "3";
    export let rowHeight = "1fr";
    export let gap = "2%";
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
