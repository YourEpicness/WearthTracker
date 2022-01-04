<script lang="ts">
	import Nav from './components/Nav.svelte';
	import Dashboard from './components/Dashboard.svelte';
	import Accounts from './components/Accounts.svelte';
	import Reports from './components/Reports.svelte';
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