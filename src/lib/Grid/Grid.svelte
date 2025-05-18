<svelte:options customElement="grid-container" />

<div class="grid-container">
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
