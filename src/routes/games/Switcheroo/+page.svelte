<script>
    import "$lib/Styles/global.css";
    import Navbar from "$lib/Navbar/navbar.svelte";
    import { base } from "$app/paths";
</script>

<navbar-component pageName="Games"></navbar-component>

<img id="background" src="{base}/gameThumbs/Switcheroo.png" />

<div id="content">
    <h1>Switcheroo</h1>
    <h3>
        A winning game jam submission where you play as two characters trying to
        seperate themselves from eachother after an accident makes them one.
    </h3>
    <div class="images">
        <img src="{base}/games/Switcheroo/Screenshot1.png" alt="screenshot1" />
        <img src="{base}/games/Switcheroo/Screenshot2.png" alt="screenshot2" />
        <img src="{base}/games/Switcheroo/Screenshot3.png" alt="screenshot3" />
    </div>
    <hr />
    <div class="links">
        <a href="https://coffandro.itch.io/switcheroo/"
            >Game
            <i class="icon fa-solid fa-gamepad"></i></a
        >
        <a href="https://github.com/BreadBirdGames/Switcheroo"
            >Code
            <i class="icon fa-brands fa-github"></i></a
        >
    </div>
</div>

<style>
    :global(body) {
        background-color: transparent;
    }

    #background {
        position: fixed;
        top: 0;
        left: 0;
        padding: 0;
        margin: 0;
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        z-index: -1;
    }

    h1 {
        text-align: center;
    }

    .icon {
        font-size: 128px;
        color: var(--text);
    }

    .links {
        display: flex;
        justify-content: space-around;
    }

    .links a {
        text-decoration: none;
        border-radius: 35px;
        border: 3px solid var(--text);
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: var(--text);
        padding: 0 10px 0 10px;
    }

    .images {
        display: flex;
        justify-content: space-evenly;
    }

    .images img {
        width: 25vw;
        border-radius: 10px;
    }

    #content {
        margin: 15px;
        padding: 0 0 10px 10px;
        background-color: white;
        border-radius: 15px;
    }
</style>
