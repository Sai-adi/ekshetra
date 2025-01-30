<!-- src/routes/+page.svelte -->
<script>
    import Gallery from '$lib/Gallery.svelte'; // Adjust path if necessary
    import Nav from '../nav/+page.svelte';   
</script>
<Nav />
<main>
    <Gallery />
</main>

<style>
    main {
        padding-top: 100px; /* Space for heading */
        text-align: center;
        background-color: black;
    }
</style>
