<script>
    import "$lib/Styles/global.css";
    import Navbar from "$lib/Navbar/navbar.svelte";
    import Grid from "$lib/Grid/Grid.svelte";
    import Developer from "$lib/Grid/Items/Developer.svelte";
</script>

<navbar-component pageName="About"></navbar-component>

<h1 id="title">The people behind the games:</h1>

<grid-container>
    <developer-tile
        thumbnailPath="/devThumbs/Devin.png"
        name="Devin"
        pronouns="He/Him"
        description="Artist"
    >
        <a href="https://www.instagram.com/devstar.art/">
            <i class="link fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@devstar.art/">
            <i class="link fa-brands fa-tiktok"></i>
        </a>
    </developer-tile>
    <developer-tile
        thumbnailPath="/devThumbs/Isabella.png"
        name="Isabella"
        pronouns="She/Her"
        description="Artist"
    >
        <a href="https://www.instagram.com/gaw_drawzz//">
            <i class="link fa-brands fa-instagram"></i>
        </a>
    </developer-tile>
    <developer-tile
        thumbnailPath="/devThumbs/Cornelius.png"
        name="Cornelius"
        pronouns="He/Him"
        description="Programmer"
    >
        <a href="https://coffandro.github.io">
            <i class="link fa-solid fa-globe"></i>
        </a>
        <a href="https://github.com/coffandro">
            <i class="link fa-brands fa-github"></i>
        </a>
    </developer-tile>
    <developer-tile
        thumbnailPath="/devThumbs/Daniel.png"
        name="Daniel"
        pronouns="He/Him"
        description="Game designer"
    ></developer-tile>
    <developer-tile
        thumbnailPath="/devThumbs/Ida.png"
        name="Ida"
        pronouns="She/Her"
        description="Composer"
    ></developer-tile>
    <developer-tile
        thumbnailPath="/devThumbs/Valdemar.png"
        name="Valdemar"
        pronouns="He/Him"
        description="Game designer"
    ></developer-tile>
</grid-container>

<style>
    #title {
        margin-left: 10px;
    }

    .link {
        font-size: 32px;
        color: var(--text);
        margin-right: 5px;
    }
</style>
