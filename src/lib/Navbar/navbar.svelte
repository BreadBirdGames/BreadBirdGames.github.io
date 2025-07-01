<script lang="ts">
    import Menu from "$lib/Menu/Menu.svelte";
    import MenuItem from "$lib/Menu/MenuItem.svelte";
    import { isActive } from "$lib";

    let { pageName = "" } = $props();

    const modules = import.meta.glob<Object>(
        "../../routes/games/*/+page.svelte",
        {
            eager: true,
        },
    );

    console.log(pageName);
    
    let pageNames = pageName.split("/");
</script>

<svelte:head>
    <title>{pageNames[pageNames.length - 1]}</title>
</svelte:head>

<ul id="navbar">
    <li class="navbar-item {isActive('BreadBird Games', pageNames)}" id="logo">
        <a href="/"><img src="/Logo.png" alt="home" /></a>
    </li>
    <!-- margin left auto to move to the right, also moves all children after to the right -->
    <li style="margin-left: auto;">
        <Menu>
            <a class={isActive("Games", pageNames)} id="games" slot="toggle">Games</a>
                         
            {#each Object.entries(modules) as [_path, module]}
                <MenuItem
                    class={isActive(
                        _path
                            .replace("../../routes/games/", "")
                            .replace("/+page.svelte", ""),
                        pageNames
                    )}
                    path="/games/{_path
                        .replace('../../routes/games/', '')
                        .replace('/+page.svelte', '')}"
                    title={
                        _path
                        .replace("../../routes/games/", "")
                        .replace("/+page.svelte", "")
                    }
                    pageNames={pageNames}
                >
                </MenuItem>
            {/each}
        </Menu>
    </li>
    <li class="navbar-item {isActive('About', pageNames)}">
        <a href="/about"><span id="about">About Us!</span></a>
    </li>
</ul>

<slot />

<style>
    #navbar {
        list-style-type: none;
        margin: 5px;
        padding: 0;
        overflow: hidden;
        background-color: var(--mantle-primary);
        border: 2px solid var(--outline);
        display: flex;
        align-items: end;
        border-radius: 10px;
    }

    .navbar-item {
        float: left;
    }

    .navbar-item a,
    #games {
        display: block;
        color: var(--text);
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        border-radius: 10px 10px 0 0;
    }

    .navbar-item a:hover:not(.active),
    #games:hover:not(.active) {
        background-color: var(--crust-primary);
    }

    #games {
        font-size: 16px;
    }

    #logo {
        padding: 0;
    }

    #logo a {
        padding: 5px;
        margin: 0;
    }

    #logo img {
        padding: 0;
        margin-bottom: -3px;
        height: 100px;
        border-radius: 10px;
    }

    a {
        color: var(--text);
        text-decoration: none;
    }

    .active {
        background-color: var(--mantle-secondary);
        border-radius: 10px 10px 0 0;
    }
</style>
