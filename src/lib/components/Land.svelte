<!--suppress JSUnresolvedVariable, CssUnusedSymbol, ES6RedundantNestingInTemplateLiteral -->
<script>
	import Box from '$lib/components/Box.svelte'
	import { DataTable, SearchInput, PaginationButtons, PaginationRowCount } from '$lib/components/DataTable/index'

	export let id = 0
	export let val = 0
	export let max = 0
	export let data

	let detached_search = false
	let detached_pagination = false

	const settings = {
		pagination: false,
		columnFilter: true,
		blocks: {
			searchInput: !detached_search,
			paginationButtons: !detached_pagination,
			paginationRowCount: !detached_pagination
		}
	}

	let rows
</script>

<svelte:head>
{@html `<${''}style>
	#land-${id} {
		background-color: transparent;
	}

	#land-${id} section.dt-search {
		margin-left: 0;
	}

	#land-${id} section.dt-search input {
		margin-left: 0;
		color: var(--accent-color);
		border: 1px solid rgba(255, 204, 0, 0.65);
	}

	#land-${id} section.dt-search input:focus {
		border: 1px solid var(--accent-color);
		box-shadow: rgb(255, 255, 255) 0 0 0 0, rgba(255, 204, 0, 0.65) 0 0 0 1px, rgba(0, 0, 0, 0) 0 0 0 0;
	}

	#land-${id} section.dt-header thead {
		background-color: var(--bg-color-secondary);
		box-shadow: 0 3px 3px -1px rgba(0, 0, 0, 0.4);
	}

	#land-${id} section.dt-header thead th {
		background: transparent;
		border: none;
	}

	#land-${id} section.dt-header thead th.filter {
		box-shadow: rgba(255, 255, 255, 0.1) 0 1px 0, rgba(0, 0, 0, 0.8) 0 1px 7px 0 inset;
	}

	#land-${id} section.dt-header thead th input {
		background: transparent;
		border: none;
	}

	#land-${id} section.dt-header thead th input:focus {
		border: 1px solid var(--accent-color);
		box-shadow: rgb(255, 255, 255) 0 0 0 0, rgba(255, 204, 0, 0.65) 0 0 0 1px, rgba(0, 0, 0, 0) 0 0 0 0;
	}

	#land-${id} article.dt-table {
		overflow-x: auto;
		border-bottom: none;
		scrollbar-width: thin;
		scrollbar-color: var(--accent-color) var(--bg-color-primary);
	}

	#land-${id} article.dt-table::-webkit-scrollbar {
		width: 4px;
		height: 4px;
	}

	#land-${id} article.dt-table::-webkit-scrollbar-track {
		background: var(--bg-color-primary) none;
		border-radius: 3px;
	}

	#land-${id} article.dt-table::-webkit-scrollbar-thumb {
		background: var(--accent-color);
		border-radius: 3px;
	}

	#land-${id} article.dt-table::-webkit-scrollbar-thumb:horizontal {
		background: var(--accent-color);
		border-radius: 3px;
	}

	#land-${id} article.dt-table::-webkit-scrollbar-thumb:hover {
		background: var(--accent-color);
	}

	#land-${id} article.dt-table::-webkit-scrollbar-track-piece:start {
		top: 40px;
	}

	#land-${id} article.dt-table::-webkit-scrollbar-corner {
		background: var(--bg-color-secondary) none;
	}

	#land-${id} article.dt-table table {
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;
	}

	#land-${id} article.dt-table table td, #land-${id} article.dt-table table th {
		padding: 9px;
		border-top: 1px solid #121212;
		box-shadow: inset 0 1px #2e2e2e;
		font-weight: normal;
	}

	#land-${id} article.dt-table table th {
		text-align: left;
		font-weight: bold;
	}

	#land-${id} article.dt-table table thead th {
		position: sticky;
		top: 0;
		background: var(--bg-color-secondary);
		box-shadow: 0 3px 3px -1px rgba(0, 0, 0, 0.4);
	}

	#land-${id} article.dt-table table tbody tr:nth-child(odd) th, #land-${id} article.dt-table table tbody tr:nth-child(odd) td {
		background: #252525;
	}

	#land-${id} article.dt-table table tbody tr:hover th, #land-${id} article.dt-table table tbody tr:hover td {
		background: var(--accent-color);
		color: var(--bg-color-secondary);
	}
</${''}style>`}
</svelte:head>

<Box style="height: 80vh;">
	{#if settings.detached_search}
		<aside class="search">
			{#if $rows}
				<SearchInput id="land-{id}" />
			{/if}
		</aside>
	{/if}

	{#if data}
		<DataTable id="land-{id}" settings={settings} data={data} bind:dataRows={rows}>
			<thead>
			<th data-key="name" style="width: 100px;">Name</th>
			<th data-key="continent" style="width: 100px;">Continent</th>
			<th data-key="total" style="width: 100px;">Total</th>
			</thead>
			<tbody>
			{#if rows}
				{#each $rows as row}
					<tr>
						<td>{row.name}</td>
						<td>{row.continent}</td>
						<td>{row.total}</td>
					</tr>
				{/each}
			{/if}
			</tbody>
		</DataTable>
	{:else}
		<progress style="width: 100%;" value={val} max={max}></progress>
		<svg style="display: block; position: absolute; top: 50%; left: 50%; margin: auto; transform: translate(-50%, -50%);" width="200px" height="200px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
	{/if}

	{#if settings.detached_pagination}
		<aside>
			{#if $rows}
				<PaginationButtons id="land-{id}" />
				<PaginationRowCount id="land-{id}" />
			{/if}
		</aside>
	{/if}
</Box>

<style global lang="scss">
	.box {
		margin-top: 70px;
	}

	aside {
		display: flex;
		justify-content: space-between;

		b {
			padding-left: 5px;
			padding-right: 5px;
		}

		&.dt-pagination-rowcount {
			color: var(--text-color) !important;
		}

		section {
			&.dt-pagination-buttons {
				button {
					&.text {
						color: var(--text-color) !important;
					}
				}
			}
		}
	}
</style>