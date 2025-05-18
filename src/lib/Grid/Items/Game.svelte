<svelte:options customElement="game-tile" />

<script lang="ts">
    let { thumbnailPath = "", name = "", description = "" } = $props();
</script>

<div class="grid-item">
    <div class="content-container">
        <img class="thumbnail" src={thumbnailPath} alt={thumbnailPath} />
        <div class="text-container">
            <span class="name">{name}</span>
            <!-- <span class="name">{name}</span>
            <span class="description">{description}</span> -->
        </div>
    </div>
</div>

<slot />

<style>
    .thumbnail {
        height: 200px;
        width: 350px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 15px;
    }

    .content-container {
        position: relative;
        height: 200px;
        width: 350px;
    }

    .text-container {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: 350px;
        height: 65px;

        background-image:
            linear-gradient(transparent 0%, var(--crust-secondary) 100%),
            radial-gradient(
                at bottom,
                var(--crust-secondary) 0%,
                transparent 70%
            );

        background-origin: border-box;
        background-clip: padding-box, border-box;
        border-radius: 0 0 15px 15px;
        text-align: center;
        text-wrap: wrap;
    }

    .name {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300px;
        transform: translate(-50%, -50%);
        color: white;
    }

    .grid-item {
        background-color: lightblue;
        color: var(--text);
        flex: 1;
        width: 350px;
        height: 200px;
        border-radius: 15px;
    }
</style>
