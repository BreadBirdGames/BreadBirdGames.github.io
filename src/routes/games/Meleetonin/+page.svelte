<script>
    import GamePage from "$lib/Pages/game-page.svelte";
    import { base } from "$app/paths";
</script>

<GamePage
    title="Meleetonin"
    description="
        From the Nordic Game Jam 2025! a game where you, as a young boy, attempt
        to sleep by fighting off your nightmares
    "
    gameLink="https://coffandro.itch.io/meleetonin/"
    sourceLink="https://github.com/BreadBirdGames/FiveNightSleep/"
>
    <div class="images">
        <img src="{base}/games/Meleetonin/Screenshot1.png" alt="screenshot1" />
        <img src="{base}/games/Meleetonin/Screenshot2.png" alt="screenshot2" />
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
