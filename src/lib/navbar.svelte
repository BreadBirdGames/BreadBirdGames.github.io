<svelte:options customElement="navbar-component" />

<script lang="ts">
    import Menu from "$lib/Menu.svelte";
    import MenuItem from "$lib/MenuItem.svelte";

    let { pageName = "" } = $props();

    const isActive = (tabName: string) => {
        return tabName === pageName ? "active" : "";
    };

    const modules = import.meta.glob<Object>("../routes/games/*/+page.svelte", {
        eager: true,
    });
</script>

<ul id="navbar">
    <li class="navbar-item {isActive('Index')}" id="logo">
        <a href="/"><img src="/Logo.png" alt="home" /></a>
    </li>
    <!-- margin left auto to move to the right, also moves all children after to the right -->
    <li style="margin-left: auto;">
        <Menu>
            <a class={isActive("Games")} href="/games" id="games" slot="toggle"
                >Games</a
            >

            {#each Object.entries(modules) as [_path, module]}
                <MenuItem class="menu-item">
                    <a
                        href="/games/{_path
                            .replace('../routes/games/', '')
                            .replace('/+page.svelte', '')}"
                        >{_path
                            .replace("../routes/games/", "")
                            .replace("/+page.svelte", "")}</a
                    >
                </MenuItem>;
            {/each}
        </Menu>
    </li>
    <li class="navbar-item {isActive('About')}">
        <a href="/about"><span id="about">About</span></a>
    </li>
</ul>

<slot />

<style>
    #navbar {
        list-style-type: none;
        margin: 5px;
        padding: 0;
        overflow: hidden;
        background-color: #333;
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
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        border-radius: 10px 10px 0 0;
    }

    .navbar-item a:hover:not(.active),
    #games:hover:not(.active) {
        background-color: #111;
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
        color: white;
        text-decoration: none;
    }

    .active {
        background-color: #222;
        border-radius: 10px 10px 0 0;
    }
</style>
