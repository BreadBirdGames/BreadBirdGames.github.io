<script>
    import GamePage from "$lib/Pages/game-page.svelte";
    import { base } from "$app/paths";
</script>

<GamePage
    title="Unanswered Questions with H.N. Andersen"
    description="
        A small visual novelle built for Asia House to provide a brainbreak
        during conferences, it sadly only works physically on premises
    "
    gameLink="https://breadbirdgames.github.io/UQW-HNAndersen/"
    sourceLink="https://github.com/BreadBirdGames/UQW-HNAndersen/"
>
    <div class="images">
        <img src="{base}/games/EAC/Screenshot1.jpg" alt="screenshot1" />
        <img src="{base}/games/EAC/Screenshot2.jpg" alt="screenshot2" />
        <img src="{base}/games/EAC/Screenshot3.jpg" alt="screenshot3" />
    </div>
</GamePage>

<style>
    .images {
        display: flex;
        justify-content: space-evenly;
    }

    .images img {
        width: 25vw;
        border-radius: 10px;
    }
</style>