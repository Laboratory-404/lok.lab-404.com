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
		color-scheme: dark;

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

	[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select {
		background-color: transparent;
		border: 1px solid rgba(255, 204, 0, 0.65);
		color: var(--accent-color);
		transition: all, 0.1s;
		outline: none;
		border-radius: 3px;
	}

	[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
		border: 1px solid var(--accent-color);
		box-shadow: rgb(255, 255, 255) 0 0 0 0, rgba(255, 204, 0, 0.65) 0 0 0 1px, rgba(0, 0, 0, 0) 0 0 0 0;
	}

	button, input, optgroup, select, textarea {
		background-color: transparent;
		border: 1px solid rgba(255, 204, 0, 0.65);
		color: var(--accent-color);
		transition: all, 0.1s;
		outline: none;
		border-radius: 3px;
		/*padding: 0 8px;
		line-height: 24px;
		margin: 0;
		width: 176px;
		height: 24px;*/
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

	select {
		width: 170px;
		border: 2px solid var(--accent-color);
		border-radius: 20px;
		padding: 10px;
		background-color: transparent;
		appearance: none;
		outline: none;
		color: var(--text-color);

		&:focus, &:focus-within, &:focus-visible {
			outline: none;
			border-color: var(--accent-color);
			box-shadow: rgb(255, 255, 255) 0 0 0 0, rgba(255, 204, 0, 0.65) 0 0 0 1px, rgba(0, 0, 0, 0) 0 0 0 0;
		}

		option {
			outline: none !important;
			border: 2px solid var(--accent-color) !important;
			background-color: var(--bg-color-secondary);
			color: var(--text-color);
			text-align: center;
		}
	}

	progress[value] {
		appearance: none;
		border: none;
		width: 100%;
		height: 20px;
		background-color: whiteSmoke;
		border-radius: 3px;
		box-shadow: 0 2px 3px rgba(0, 0, 0, .5) inset;
		color: var(--accent-color);
		position: relative;
		margin: 0 0 1.5em;
	}

	progress[value]::-webkit-progress-bar {
		background-color: whiteSmoke;
		border-radius: 3px;
		box-shadow: 0 2px 3px rgba(0, 0, 0, .5) inset;
	}

	progress[value]::-webkit-progress-value {
		position: relative;
		background-size: 35px 20px, 100% 100%, 100% 100%;
		border-radius: 3px;
		transition: width 0.3s ease-in-out;
		-webkit-animation: animate-stripes 5s linear infinite;
		animation: animate-stripes 5s linear infinite;
	}

	progress[value]::-webkit-progress-value:after {
		content: '';
		position: absolute;
		width: 5px;
		height: 5px;
		top: 7px;
		right: 7px;
		background-color: white;
		border-radius: 100%;
	}

	progress[value]::-moz-progress-bar {
		background-image: -moz-linear-gradient(135deg, transparent, transparent 33%, rgba(0, 0, 0, .1) 33%, rgba(0, 0, 0, .1) 66%, transparent 66%), -moz-linear-gradient(top, rgba(255, 255, 255, .25), rgba(0, 0, 0, .2)), -moz-linear-gradient(left, #f44, #09c);
		background-size: 35px 20px, 100% 100%, 100% 100%;
		border-radius: 3px;

	}

	progress[value]::-webkit-progress-value {
		background-image: -webkit-linear-gradient(135deg, transparent, transparent 33%, rgba(0,0,0,.1) 33%, rgba(0,0,0,.1) 66%, transparent 66%), -webkit-linear-gradient(top, rgba(255, 255, 255, .25), rgba(0,0,0,.2)), -webkit-linear-gradient( left, #f44, #09c);
	}

	.box {
		height: 80vh;
		margin-top: 70px;
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