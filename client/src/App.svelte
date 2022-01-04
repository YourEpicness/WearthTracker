<script lang="ts">
	import Nav from './components/Nav.svelte';
	import Dashboard from './components/Dashboard.svelte';
</script>

<main class="flex grow h-screen">
	<Nav />
	<Dashboard />
</main>

<style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>