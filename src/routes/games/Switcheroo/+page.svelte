<script>
    import GamePage from "$lib/Pages/game-page.svelte";
    import { base } from "$app/paths";
</script>

<GamePage
    title="Switcheroo"
    description="
        A winning game jam submission where you play as two characters trying to
        seperate themselves from eachother after an accident makes them one.
    "
    gameLink="https://coffandro.itch.io/switcheroo/"
    sourceLink="https://github.com/BreadBirdGames/Switcheroo/"
>
    <div class="images">
        <img src="{base}/games/Switcheroo/Screenshot1.png" alt="screenshot1" />
        <img src="{base}/games/Switcheroo/Screenshot2.png" alt="screenshot2" />
        <img src="{base}/games/Switcheroo/Screenshot3.png" alt="screenshot3" />
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
