<script>
    import GamePage from "$lib/Pages/game-page.svelte";
</script>

<GamePage
    title="Fight for the Forest"
    description="
        A award winning 1v1 arcade platformer where you fight against your
        friend to see who will win control of the forest
    "
    gameLink="https://coffandro.itch.io/fightforforest/"
    sourceLink="https://github.com/coffandro/ArcadeGame/"
>
    <div class="images">
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vzFcYm8tkD4?si=c9ECvWflG6J4a3o5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    </div>
</GamePage>

<style>
    .images {
        display: flex;
        justify-content: space-evenly;
    }

    .images iframe {
        border-radius: 10px;
    }
</style>
