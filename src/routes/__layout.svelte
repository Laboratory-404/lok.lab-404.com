<script>
	import '../main.scss'
	import { onMount } from 'svelte'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import Loading from '$lib/components/Loading.svelte'

	let loading = true

	onMount(() => {
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

<!--suppress CssInvalidPseudoSelector -->
<style global lang="scss">
	:root {
		--space-xxs: 0.25rem;
		--space-xs: 0.5rem;
		--space-sm: 1rem;
		--space-md: 1.5rem;
		--space-lg: 2rem;
		--space-xl: 3rem;
		--space-xxl: 6rem;

		--bg-color-primary: #2f2f2f;
		--bg-color-secondary: #212121;

		--text-color: #c6c6c6;
		--accent-color: #cca300;
	}

	*::-webkit-scrollbar {
		width: 4px;
		height: 4px;
	}

	*::-webkit-scrollbar-corner {
		background: var(--bg-color-secondary) none;
	}

	*::-webkit-scrollbar-track {
		background: var(--bg-color-secondary) none;
	}

	//noinspection CssInvalidFunction
	*::-webkit-scrollbar-thumb {
		background: var(--accent-color);
		border-radius: 3px;
	}

	//noinspection CssInvalidFunction
	*::-webkit-scrollbar-thumb:horizontal {
		background: var(--accent-color);
		border-radius: 3px;
	}

	*::selection {
		color: var(--bg-color-secondary);
		background: var(--accent-color);
	}

	* {
		scrollbar-width: thin;
		scrollbar-color: var(--accent-color) var(--bg-color-secondary);
	}

	main {
		max-width: 80%;
		margin: 0 auto;
	}

	footer {
		margin: 20px 10px;
		font-size: 0.9rem;
		color: #666;
		text-align: center;
	}

	nav {
		position: fixed;
		display: flex;
		flex-direction: row;
		align-items: center;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		height: 50px;
		background:var(--bg-color-secondary);
		border-bottom: 1px solid #000;
	}

	nav ul {
		display: flex;
		height: 100%;
		flex-direction: row;
		flex-grow: 1;
		align-items: center;
		justify-content: center;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	nav ul li {
		display: block;
	}

	nav ul li a {
		display: block;
		height: 100%;
		padding: 16px 6px;
	}

	a {
		color:  #cca300;
		text-decoration: none;
		cursor: pointer;
	}

	a:hover, a:focus, a:active {
		text-decoration: underline;
		color: #fc0;
	}

	/*noinspection CssUnusedSymbol*/
	.app {
		height: 100%;
	}

	p {
		margin: 0;
	}

	hr {
		height: 3px;
		margin: 0;
		opacity: 1;
	}

	b, strong {
		font-weight: 600;
	}

	/*noinspection CssUnusedSymbol*/
	.fade-in {
		animation: fade-in 0.8s;
	}

	input {
		border: 1px solid rgba(255, 204, 0, 0.65);
		border-radius: 3px;
		outline: none;
		padding: 0 8px;
		line-height: 24px;
		margin: 0;
		height: 24px;
		background: transparent;
		width: 176px;
		transition: all, 0.1s;
		color: var(--accent-color);
	}

	input:focus {
		border-color: var(--accent-color);
	}

	input::placeholder {
		font-style: italic;
		color: rgba(255, 255, 255, 0.3);
		line-height: 24px;
	}

	input:autofill,
	input:-moz-autofill,
	input:-moz-autofill-preview,
	input::-moz-text-control-preview {
		filter: none;
		background-color: transparent !important;
		color: var(--text-color);
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		transition: all 5000s ease-in-out 0s;
		transition-property: background-color, color;
	}

	.fade-in {
		animation: fade-in 0.8s;
	}

	@keyframes -global-fade-in {
		from {
			opacity: 0;
			transform: scale(.8, .8)
		}

		to {
			opacity: 1;
		}
	}
</style>