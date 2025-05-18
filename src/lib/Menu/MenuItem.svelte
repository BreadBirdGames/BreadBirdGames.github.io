<script>
    let { path } = $props();
</script>

<li>
    <a href={path}><slot /></a>
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
</style>
