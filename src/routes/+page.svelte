<script>
    import Navbar from "$lib/Navbar/navbar.svelte";
    import Grid from "$lib/Grid/grid.svelte";
    import GameTile from "$lib/Grid/Items/game-tile.svelte";
    import { base } from "$app/paths";
</script>

<Navbar pageName="BreadBird Games"></Navbar>

<h1>Welcome to Bread Bird Games</h1>

<Grid>
    <GameTile
        link="{base}/games/Unanswered%20Questions%20with%20H.N.%20Andersen"
        thumbnailPath="{base}/gameThumbs/HNAndersen.png"
        name="Unanswered Questions with H.N. Andersen"
        description="A small game in collaboration with Asia House, to provide a brain break and teach the story of H.N. Andersen."
    ></GameTile>
    <GameTile
        link="{base}/games/Fight%20for%20the%20Forest"
        thumbnailPath="{base}/gameThumbs/FightForForest.png"
        name="Fight for the Forest"
        description="A award winning 2 player arcade game where you fight for who will control the forest."
    ></GameTile>
    <GameTile
        link="{base}/games/Switcheroo"
        thumbnailPath="{base}/gameThumbs/Switcheroo.png"
        name="Switcheroo"
        description="A winning game jam submission where play as two characters who have been merged split again."
    ></GameTile>
    <GameTile
        link="{base}/games/Meleetonin"
        thumbnailPath="{base}/gameThumbs/Meleetonin.png"
        name="Meleetonin"
        description="A game jam submission from the Nordic Game jam 2025 where you play as a a young boy who's unable to sleep."
    ></GameTile>
</Grid>
