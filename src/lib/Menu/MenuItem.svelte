<script>
    import { isActive } from "$lib";

    export let path = "",
        title = "",
        pageNames;
</script>

<li>
    <a class={isActive(title, pageNames)} href={path}>{title}</a>
</li>

<style>
    a {
        position: relative;
        display: block;
        padding: 1rem;
        inline-size: 100%;
        text-decoration: none;
        color: var(--text);
    }

    a:hover,
    a:focus {
        background-color: var(--crust-primary);
        color: var(--text);
        cursor: pointer;
    }
   
    .active {
        background-color: var(--mantle-secondary);
    }
</style>
