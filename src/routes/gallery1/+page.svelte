<!-- src/routes/+page.svelte -->
<script>
    import Gallery3 from '$lib/Gallery3.svelte'; // Adjust path if necessary
    import Nav from '../nav/+page.svelte';
</script>
<Nav />
<main>
    <Gallery3 />
</main>

<style>
    main {
        padding-top: 110px; /* Space for heading */
        text-align: center;
        background-color: black; /* Ensure main also has a black background */
        color: white; /* Optional: Set text color to white for contrast */
    }
</style>
