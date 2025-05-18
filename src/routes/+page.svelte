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
        thumbnailPath="gameThumbs/HNAndersenBanner.png"
        name="Unanswered Questions with H.N. Andersen"
    ></game-tile>
</grid-container>
