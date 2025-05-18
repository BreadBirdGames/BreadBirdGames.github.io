<script>
    import "$lib/Styles/global.css";
    import Navbar from "$lib/Navbar/navbar.svelte";
    import Grid from "$lib/Grid/Grid.svelte";
    import gameTile from "$lib/Grid/Items/Game.svelte";
</script>

<navbar-component pageName="Index"></navbar-component>

<h1>Welcome to Bread Bird Games</h1>
<grid-container>
    <game-tile
        link="/games/Unanswered%20Questions%20with%20H.N.%20Andersen"
        thumbnailPath="/gameThumbs/HNAndersen.png"
        name="Unanswered Questions with H.N. Andersen"
        description="A small game in collaboration with Asia House, to provide a brain break and teach the story of H.N. Andersen."
    ></game-tile>
    <game-tile
        link="/games/Fight%20for%20the%20Forest"
        thumbnailPath="/gameThumbs/FightForForest.png"
        name="Fight for the Forest"
        description="A award winning 2 player arcade game where you fight for who will control the forest."
    ></game-tile>
    <game-tile
        link="/games/Switcheroo"
        thumbnailPath="/gameThumbs/Switcheroo.png"
        name="Switcheroo"
        description="A winning game jam submission where play as two characters who have been merged split again."
    ></game-tile>
    <game-tile
        link="/games/Meleetonin"
        thumbnailPath="/gameThumbs/Meleetonin.png"
        name="Meleetonin"
        description="A game jam submission from the Nordic Game jam 2025 where you play as a a young boy who's unable to sleep."
    ></game-tile>
</grid-container>
