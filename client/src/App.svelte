<script lang="ts">
	import Nav from './components/Nav.svelte';
</script>

<main class="flex grow h-screen">
	<Nav />
	<div class="w-full bg-bgSecondary p-16">
		<h1 class="text-4xl"> Wearth Tracker App</h1>
	</div>
</main>

<style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
	.navitem {
		@apply flex text-white bg-primary rounded-md border border-black px-4 py-2 cursor-pointer hover:text-lightSecondary
	}
}
</style>