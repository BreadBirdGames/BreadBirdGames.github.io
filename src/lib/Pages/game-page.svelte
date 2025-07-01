<script>
    import Navbar from "$lib/Navbar/navbar.svelte";
    
    export let title = "",
        description = "",
        gameLink = "",
        sourceLink = "";
</script>


<Navbar pageName="Games/{title}"></Navbar>

<div id="content">
    {#if title != ""}
        <h1>{title}</h1>
    {/if}
    {#if description != ""}
        <h4>
            {description}
        </h4>
    {/if}
    <slot/>
    <hr />
    <div class="links">
        {#if gameLink != ""}
            <a href={gameLink}
                >Game
                <i class="icon fa-solid fa-gamepad"></i></a
            >
        {/if}
        {#if sourceLink != ""}
            <a href={sourceLink}
                >Code
                <i class="icon fa-brands fa-github"></i></a
            >
        {/if}
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

    h4 {
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

    #content {
        margin: 15px;
        padding: 0 0 10px 10px;
        background-color: white;
        border-radius: 15px;
    }
</style>
