<svelte:options customElement="developer-tile" />

<script lang="ts">
    let {
        thumbnailPath = "",
        name = "",
        pronouns = "",
        description = "",
    } = $props();
</script>

<div class="grid-item">
    <div class="image-container">
        <img class="thumbnail" src={thumbnailPath} alt={thumbnailPath} />
    </div>
    <div class="name-container">
        <span class="name">{name}</span>
        <span class="pronouns">{pronouns}</span>
    </div>
    <div class="desc-container">
        <span class="description">{description}</span>
    </div>
    <div class="link-container"><slot /></div>
</div>

<style>
    .image-container {
        grid-row: span 3 / span 3;
        height: 200px;
        width: 125px;
        padding-right: 8px;
        border-radius: 15px 100px 100px 15px;
        border: 0 double transparent;
        border-right-width: 2px;

        background-image:
            linear-gradient(lightblue, lightblue),
            radial-gradient(at right, var(--text) 0%, lightblue 75%);
        background-origin: border-box;
        background-clip: padding-box, border-box;
    }

    .thumbnail {
        height: 125px;
        width: 125px;
        clip-path: circle();
        margin-top: 37.5px;
    }

    .name-container {
        width: 210px;
        height: 65px;
        display: flex;
        align-items: flex-end;
        margin-left: -10px;
    }

    .name {
        font-size: 30px;
        margin-right: 5px;
    }

    .pronouns {
        font-size: 16px;
        text-wrap: nowrap;
    }

    .desc-container {
        grid-column-start: 2;
        width: 210px;
        height: 65px;
        display: flex;
        align-items: center;
    }

    .description {
        font-size: 28px;
    }

    .link-container {
        margin-left: -10px;
        grid-column-start: 2;
        grid-row-start: 3;
        width: 210px;
        height: 65px;
        overflow: hidden;
        display: flex;
    }

    .grid-item {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 0px;
        background-color: lightblue;
        color: var(--text);
        flex: 1;
        margin-bottom: 10px;
        width: 350px;
        height: 200px;
        border-radius: 15px;
    }
</style>
