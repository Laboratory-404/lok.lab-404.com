<script>
	import '../main.scss'

	import { onMount } from 'svelte'
	import { dev } from '$app/env'
	import { page } from '$app/stores'

	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import Loading from '$lib/components/Loading.svelte'

	let isHomepage
	let loading = true

	// noinspection JSCheckFunctionSignatures
	const params = new Proxy($page.url.searchParams, {
		get: (searchParams, prop) => searchParams.get(prop)
	})

	// noinspection JSUnresolvedVariable
	let isDev = params.debug === 'true' || params.debug === '1' || params.dev === 'true' || params.dev === '1' || dev

	// noinspection JSUnresolvedVariable
	if (params.debug === 'false' || params.debug === '0' || params.dev === 'false' || params.dev === '0') {
		isDev = false
	}

	$: isHomepage = $page.url.pathname === '/'

	onMount(async () => {
		setTimeout(() => {
			loading = false
		}, 2000)
	})
</script>

{#if loading}
	<Loading />
{:else}
	<div class="app">
		<Header {isDev} {isHomepage} />

		<main class:homepage={isHomepage}>
			<slot />
		</main>

		<Footer {isDev} {isHomepage} />
	</div>
{/if}