<script lang="ts">
    export let thumbnailPath = "",
        name = "",
        description = "",
        link = "";
</script>

<a href={link} class="grid-item">
    <div class="content-container">
        <img class="thumbnail" src={thumbnailPath} alt={thumbnailPath} />
        <div class="text-container">
            <span class="name">{name}</span>
            <span class="description">{description}</span>
        </div>
    </div>
</a>

<slot />

<style>
    .thumbnail {
        height: 200px;
        width: 350px;
        position: absolute;
        top: 0;
        left: 0;
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
        text-align: center;
        text-wrap: wrap;
        transition: height 0.5s;
    }

    .name {
        font-size: 24px;
        transition: transform 0.5s;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300px;
        transform: translate(-50%, -50%);
        color: white;
    }

    .description {
        transition: opacity transform 0.25s;
        opacity: 0;
        color: white;
        position: absolute;
        width: 300px;
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, 125%);
    }

    .grid-item:hover .description,
    .grid-item:active .description {
        opacity: 1;
    }

    .grid-item:hover .text-container,
    .grid-item:active .text-container {
        height: 200px;
    }

    .grid-item:hover .name,
    .grid-item:active .name {
        transform: translate(-50%, -95%);
    }

    .grid-item {
        text-decoration: none;
        background-color: lightblue;
        color: var(--text);
        flex: 1;
        width: 350px;
        height: 200px;
        max-width: 350px;
        max-height: 200px;
        border-radius: 15px;
        overflow: hidden;
        display: block;
        margin-bottom: 25px;
    }
</style>
