<script>
	export let aside = false
</script>

<div class="box {aside ? 'aside' : ''}" on:click {...$$props}>
	<slot/>
</div>

<style global lang="scss">
	.box {
		display: block;
		position: relative;
		padding: 20px;
		margin-bottom: 20px;
		font-size: 1rem;
		border-radius: 5px;
		box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0, rgba(0, 0, 0, 0.8) 0 1px 7px 0 inset;
		background: rgba(0, 0, 0, 0.3);
		z-index: 0;
		//overflow-x: auto;
		overflow: hidden;
	}

	.box:after {
		content: '';
		display: block;
		clear: both;
	}

	.box.aside {
		float: right;
		margin-left: 20px;
	}

	.box h1, .box h2, .box h3 {
		margin: 1em 0 0.7em;
		color: #fff;
		font-weight: normal;
	}

	.box > h1:first-child, .box > h2:first-child, .box > h3:first-child {
		margin-top: 0;
	}

	.box h1 {
		font-size: 1.333em;
		padding-bottom: 0.4em;
		border-bottom: 1px solid #121212;
		box-shadow: 0 1px #2e2e2e;
	}

	.box h2, .box h3 {
		box-sizing: content-box;
		display: inline-block;
		height: 1.7em;
		position: relative;
		left: -22px;
		padding: 0 22px;
		font-size: 0.93em;
		line-height: 1.7em;
		color: #fc0;
		background: linear-gradient(to right, #270002, #610006 20%, #610006 80%, #440004 100%);
		border-top: 1px solid #8a0009;
		border-bottom: 1px solid #180002;
		border-radius: 0 0 0 5px;
		box-shadow: 0 3px 10px -5px #000;
		clip-path: polygon(0 -5%, 100% -5%, 92% 50%, 100% 105%, 0 105%);
	}

	.box h2:before, .box h3:before {
		content: '';
		display: block;
		width: 5px;
		height: 5px;
		position: absolute;
		top: -5px;
		left: 0;
		background: radial-gradient(circle at top right, transparent 4px, #760007 5px, #000 100%);
	}

	.box h2 + ul, .box h3 + ul, .box h2 + div > ul, .box h3 + div > ul {
		margin-top: 0.5em;
	}

	.box p, .box ul {
		font-size: 0.93em;
	}

	.box p {
		line-height: 1.5;
	}

	.box > *:last-child, .box > *:last-child > *:last-child {
		margin-bottom: 0;
	}
</style>