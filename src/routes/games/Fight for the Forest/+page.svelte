<script>
    import "$lib/Styles/global.css";
    import Navbar from "$lib/Navbar/navbar.svelte";
</script>

<navbar-component pageName="Games"></navbar-component>

<img id="background" src="/gameThumbs/FightForForest.png" />

<div id="content">
    <h1>Fight for the Forest</h1>
    <h3>
        A award winning 1v1 arcade platformer where you fight against your
        friend to see who will win control of the forest
    </h3>
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

    .images iframe {
        border-radius: 10px;
    }

    #content {
        margin: 15px;
        padding: 0 0 10px 10px;
        background-color: white;
        border-radius: 15px;
    }
</style>
