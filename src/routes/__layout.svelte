<script>
	import '../main.scss'

	import { onMount } from 'svelte'
	import { dev } from '$app/env'
	import { page } from '$app/stores'

	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import Loading from '$lib/components/Loading.svelte'

	let loading = true

	onMount(async () => {
		setTimeout(() => {
			loading = false

			console.log(dev)
			console.log(page)
		}, 2000)
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