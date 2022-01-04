<script lang="ts">
	import Nav from './components/Nav.svelte';
	import Dashboard from './components/Dashboard.svelte';
	import Accounts from './components/Accounts.svelte';
	import Reports from './components/Reports.svelte';

	let pages = ["Dashboard", "Accounts", "Reports"]

	let pageComponent = null;
	let currentPage = 'Dashboard';
	function changePage() {
		currentPage = currentPage == 'Dashboard' ? 'Accounts' : 'Dashboard';
	}
	function updatePageComponent() {
		pageComponent = pages[currentPage]
	}
	updatePageComponent()
</script>

<main class="flex grow h-screen">
	<Nav />
	<Dashboard />
	<button on:click={changePage}>Change Page</button>
	{#if pageComponent == pages[currentPage]}
		<div class="">
			<svelte:component this={pageComponent}></svelte:component>
		</div>
	{/if}
</main>

<style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>