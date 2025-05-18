<script>
    import "$lib/Styles/global.css";
    import Navbar from "$lib/Navbar/navbar.svelte";
</script>

<navbar-component pageName="Games"></navbar-component>

<img id="background" src="/gameThumbs/HNAndersen.png" />

<div id="content">
    <h1>Unanswered Questions with H.N. Andersen</h1>
    <h3>
        A small visual novelle built for Asia House to provide a brainbreak
        during conferences, it sadly only works physically on premises
    </h3>
    <div class="images">
        <img src="/games/EAC/Screenshot1.jpg" alt="screenshot1" />
        <img src="/games/EAC/Screenshot2.jpg" alt="screenshot2" />
        <img src="/games/EAC/Screenshot3.jpg" alt="screenshot3" />
    </div>
    <hr />
    <div class="links">
        <a href="https://breadbirdgames.github.io/EAC-GO/"
            >Game
            <i class="icon fa-solid fa-gamepad"></i></a
        >
        <a href="https://github.com/BreadBirdGames/EAC-GO"
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
