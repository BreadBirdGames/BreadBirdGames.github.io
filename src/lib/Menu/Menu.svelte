<div>
    <button><slot name="toggle" /></button>
    <menu><slot /></menu>
</div>

<style>
    div {
        transition: all 0.5s ease;
    }

    button {
        font-family: "DynaPuff";
        border: none;
        background-color: inherit;
    }

    menu {
        position: absolute;
        display: none;
        margin-block-start: 0;
        padding: 0;
        background-color: var(--mantle-primary);
        visibility: hidden;
        opacity: 0;
        right: 15px;
        overflow: hidden;
        border-radius: 0 0 10px 10px;
        z-index: 99999;
    }

    div:hover,
    div:focus,
    div:hover > menu,
    div:focus > menu {
        display: block;
        visibility: visible;
        opacity: 1;
    }
</style>
