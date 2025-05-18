<script lang="ts">
    import { page } from "$app/state";

    function test(err: App.Error | null) {
        if (err != null) {
            console.log(err.message);
        }
    }
</script>

<h1>{test(page.error)}</h1>
