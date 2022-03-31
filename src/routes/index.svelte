<!--suppress JSUnresolvedVariable -->

<script>
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'
	import { db } from '$lib/stores'
	import { getData, getLands } from '$lib/api'
	import Box from '$lib/components/Box.svelte'

	let loading = false
	let wallet = $db.wallet
	let clear = $db.clear
	let week = $db.week
	let start = $db.start
	let end = $db.end
	let lands = $db.lands

	if (lands && $db?.blacklisted && Array.isArray(lands) && Array.isArray($db?.blacklisted)) {
		lands = lands.filter(l => !$db.blacklisted.includes(l))
	}

	$db.selected = '0'

	onMount(async () => {
		if (!clear) {
			window.localStorage.removeItem('db')
			// noinspection JSUndeclaredVariable
			$db = {
				clear: true,
				wallet: '0xB00Fc62B8B22243779A35effb8B98f18193daa09',
				contract: '0x6CC462bc49ceCFE943Bc4F477b23b92906e6074F',
				lands: ['134223', '134224', '134225', '133969', '133968', '133967', '133711', '133712', '133713', '133455', '133456', '133457'],
				blacklisted: ['150949'],
				start: '2022-03-21',
				end: '2022-03-27',
				data: [],
				selected: '0'
			}
		}

		await reload()
	})

	const parseDates = range => {
		let year = parseInt(range.slice(0, 4), 10)
		let week = parseInt(range.slice(6), 10)

		let day = (1 + (week - 1) * 7)

		let dayOffset = new Date(year, 0, 1).getDay()

		dayOffset--
		dayOffset--

		let days = []

		for (let i = 0; i < 7; i++) {
			days.push(new Date(year, 0, day - dayOffset + i).toISOString().split('T')[0])
		}

		return days
	}

	const reload = async () => {
		loading = true
		lands = await getLands()
		loading = false

		lands = lands.filter(l => !$db.blacklisted.includes(l))

		getData(lands, start, end)
	}

	const onChange = async () => {
		let dates = parseDates(week)

		$db.wallet = wallet
		$db.week = week
		$db.start = dates[0]
		$db.end = dates[dates.length - 1]
		start = $db.start
		end = $db.end
		$db.data = []
		$db.lands = []

		await reload()
	}
</script>

<Box style="height: 80vh;">
	<div>
		<label>Wallet Address <input class="wallet" bind:value={wallet} on:change={onChange} /></label><br /><br />
		<label>Week <input type="week" bind:value={week} on:change={onChange} /></label><br /><br />
		Start Date {start}<br />End Date {end}
	</div>

	<div class="lands">
		{#if loading}
			<svg class="center" width="200px" height="200px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<g transform="translate(50 50)">
					<g transform="translate(-19 -19) scale(0.6)">
						<g>
							<animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.2s" begin="0s" repeatCount="indefinite"></animateTransform>
							<path d="M31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 L37.3496987939662 -6.999999999999995 L47.3496987939662 -6.999999999999997 L47.349698793966205 6.999999999999973 L37.349698793966205 6.999999999999976 A38 38 0 0 1 31.359972760794346 21.460477824182686 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="#cca300"></path>
						</g>
					</g>

					<g transform="translate(19 19) scale(0.6)">
						<g>
							<animateTransform attributeName="transform" type="rotate" values="45;0" keyTimes="0;1" dur="0.2s" begin="-0.1s" repeatCount="indefinite"></animateTransform>
							<path d="M-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 L37.3496987939662 -6.999999999999995 L47.3496987939662 -6.999999999999997 L47.349698793966205 6.999999999999973 L37.349698793966205 6.999999999999976 A38 38 0 0 1 31.359972760794346 21.460477824182686 L31.359972760794346 21.460477824182686 L38.431040572659825 28.531545636048158 L28.53154563604818 38.4310405726598 L21.460477824182703 31.35997276079433 A38 38 0 0 1 6.9999999999999964 37.3496987939662 L6.9999999999999964 37.3496987939662 L6.999999999999995 47.3496987939662 L-7.000000000000009 47.3496987939662 L-7.000000000000007 37.3496987939662 A38 38 0 0 1 -21.46047782418263 31.359972760794385 L-21.46047782418263 31.359972760794385 L-28.531545636048097 38.43104057265987 L-38.431040572659796 28.531545636048186 L-31.35997276079433 21.460477824182703 A38 38 0 0 1 -37.34969879396619 7.000000000000032 L-37.34969879396619 7.000000000000032 L-47.34969879396619 7.0000000000000355 L-47.3496987939662 -7.000000000000002 L-37.3496987939662 -7.000000000000005 A38 38 0 0 1 -31.359972760794346 -21.46047782418268 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="#cca300"></path>
						</g>
					</g>
				</g>
			</svg>
		{:else}
			{#if Array.isArray(lands) && lands.length > 0}
				{#each lands as land}
					<button class="land" on:click={goto(`/land-${land}`, { replaceState: true })}>Land {land}</button>
				{/each}
			{:else}
				<div class="center">No lands found</div>
			{/if}
		{/if}
	</div>
</Box>

<style global lang="scss">
	.box {
		.progress {
			width: 100%;
		}

		.center {
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			margin: auto;
			transform: translate(-50%, -50%);
		}

		.lands {
			position: absolute;
			bottom: 20px;
			width: calc(100% - 40px);
			height: calc(100% - 240px);
			overflow-y: auto;

			.land {
				border: 2px solid var(--accent-color);
				border-radius: 10px;
				padding: 10px;
				margin-right: 5px;
				margin-top: 5px;
			}
		}

		.wallet {
			width: 430px;
			height: 42px;
			padding: 10px;
		}
	}
</style>