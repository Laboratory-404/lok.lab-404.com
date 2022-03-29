<script>
	import '../main.scss'
	import { onMount } from 'svelte'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import Loading from '$lib/components/Loading.svelte'

	let loading = true

	onMount(async () => {
		loading = false
	})
</script>

{#if loading}
	<Loading />
{:else}
	<div class="app">
		<Header />

		<main>
			<slot />
		</main>

		<Footer />
	</div>
{/if}