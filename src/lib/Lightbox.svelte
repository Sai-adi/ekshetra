<!-- src/lib/Lightbox.svelte -->
<script>
    export let src;      // The source of the image to display
    export let onClose;  // Function to call when closing the lightbox

    function handleClose() {
        onClose(); // Call the onClose function passed from the parent component
    }
</script>

<style>
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000; /* Ensure it appears above other content */
    }
    img {
        max-width: 90%; /* Limit image size */
        max-height: 90%; /* Limit image height */
    }
</style>

<div class="lightbox" on:click={handleClose}>
    <img src={src} alt="Lightbox Image" />
</div>
