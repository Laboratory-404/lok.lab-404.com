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

		--primary-color: #A705C3;
		--secondary-color: #AD2686;
		--tertiary-color: #BC0274;
		--quaternary-color: #5B4FFF;
		--selected-color: #FF38F6;
		--glow-color: #A705C3;
		--header-color: #E122AA;
		--burger-color: #A705C3;
		--gradient-text-color: #A705C3 0%, #BC0274 100%;
		--strong-color: #A705C3;
		--border-color: #AD2686 0%, #A705C3 33.33%, #BC0274 66.66%, #A705C3 100%;
		--avatar-border-color: #FF38BB 0%, #5B4FFF 33.33%, #FF38F6 66.66%, #5B4FFF 100%;
		--scrollbar-vertical-color: #5B4FFF 0%, #FF38F6 50%, #5B4FFF 100%;
		--scrollbar-horizontal-color: #FF38F6 0%, #5B4FFF 50%, #FF38F6 100%;
		--radius-small: 15px;
		--radius-normal: 20px;
		--radius-big: 25px;
		--border-radius-small: var(--radius-small) 0;
		--border-radius-small-reverse: 0 var(--radius-small);
		--border-radius: var(--radius-normal) 0;
		--border-radius-reverse: 0 var(--radius-normal);
		--border-radius-big: var(--radius-big) 0;
		--border-radius-big-reverse: 0 var(--radius-big);
	}

	*::-webkit-scrollbar {
		width: 4px;
		height: 4px;
	}

	*::-webkit-scrollbar-corner {
		background: var(--bg-color-primary) none;
	}

	*::-webkit-scrollbar-track {
		background: var(--bg-color-primary) none;
	}

	//noinspection CssInvalidFunction
	*::-webkit-scrollbar-thumb {
		background: var(--primary-color);
		background: transparent linear-gradient(0deg, var(--scrollbar-vertical-color));
		border-radius: 3px;
	}

	//noinspection CssInvalidFunction
	*::-webkit-scrollbar-thumb:horizontal {
		background: var(--primary-color);
		background: transparent linear-gradient(90deg, var(--scrollbar-horizontal-color));
		border-radius: 3px;
	}

	*::selection {
		color: var(--text-color);
		background: var(--selected-color);
	}

	* {
		scrollbar-width: thin;
		scrollbar-color: var(--primary-color) var(--bg-color-primary);
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
		background: #202020;
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
	img.glow {
		filter: drop-shadow(0 0 30px var(--glow-color));
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