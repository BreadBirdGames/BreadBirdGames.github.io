<script>
  import Navbar from "$lib/Navbar/navbar.svelte";
  import Grid from "$lib/Grid/grid.svelte";
  import Developer from "$lib/Grid/Items/developer-tile.svelte";

  import { base } from "$app/paths";
</script>

<Navbar pageName="About"></Navbar>

<h1 id="title">The people behind the games:</h1>

<Grid>
  <Developer
    thumbnailPath="{base}/devThumbs/Devin.png"
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
  </Developer>
  <Developer
    thumbnailPath="{base}/devThumbs/Isabella.png"
    name="Isabella"
    pronouns="She/Her"
    description="Artist"
  >
    <a href="https://www.instagram.com/gaw_drawzz//">
      <i class="link fa-brands fa-instagram"></i>
    </a>
  </Developer>
  <Developer
    thumbnailPath="{base}/devThumbs/Frida.png"
    name="Frida"
    pronouns="She/Her"
    description="Programmer"
  >
    <a href="https://coffandro.github.io">
      <i class="link fa-solid fa-globe"></i>
    </a>
    <a href="https://github.com/coffandro">
      <i class="link fa-brands fa-github"></i>
    </a>
  </Developer>
  <Developer
    thumbnailPath="{base}/devThumbs/Daniel.png"
    name="Daniel"
    pronouns="He/Him"
    description="Game designer"
  ></Developer>
  <Developer
    thumbnailPath="{base}/devThumbs/Ida.png"
    name="Ida"
    pronouns="She/Her"
    description="Composer"
  ></Developer>
  <Developer
    thumbnailPath="{base}/devThumbs/Valdemar.png"
    name="Valdemar"
    pronouns="He/Him"
    description="Writer"
  ></Developer>
</Grid>

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
