<script>
	import '../app.css';
	let { children } = $props();
	import BlobCursor from "../components/BlobCursor.svelte";
</script>
<BlobCursor />

{@render children()}
