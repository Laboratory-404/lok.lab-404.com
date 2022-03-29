<!--suppress JSUnresolvedVariable, CssUnusedSymbol, ES6RedundantNestingInTemplateLiteral -->
<script>
	import { db } from '$lib/stores'
	import { getContributions } from '$lib/api'
	import Box from '$lib/components/Box.svelte'
	import { Datatable, SearchInput, PaginationButtons, PaginationRowCount } from 'svelte-simple-datatables'

	export let id = 0

	const settings = {
		detached_search: false,
		detached_pagination: true,
		sortable: true,
		pagination: true,
		scrollY: true,
		rowsPerPage: 50,
		columnFilter: true,
		css: true,
		labels: {
			search: 'Search...',
			filter: 'Filter',
			noRows: 'No entries to found',
			info: 'Showing {start} to {end} of {rows} entries',
			previous: 'Previous',
			next: 'Next'
		},
		blocks: {
			searchInput: true,
			paginationButtons: false,
			paginationRowCount: false
		}
	}

	let data = $db?.lands[0]['data'][id]['contribution']

	let rows
</script>

<svelte:head>
	{@html `<${''}style>
	#land-${id} {
		background-color: transparent;
	}

	#land-${id} section {
		margin-left: 0;
	}

	#land-${id} section.dt-search input {
		margin-left: 0;
		color: var(--accent-color);
		border: 1px solid rgba(255, 204, 0, 0.65);
	}

	#land-${id} section.dt-search input:focus {
		border: 1px solid var(--accent-color);
	}

	#land-${id} section.dt-header thead {
		background-color: var(--bg-color-secondary);
	}

	#land-${id} section.dt-header thead th {
		background-color: transparent;
	}
</${''}style>`}
</svelte:head>

<Box style="height: 80vh;">
	{#if settings.detached_search}
		<aside class="search">
			{#if $rows}
				<SearchInput id={'my-table'}/>
			{/if}
		</aside>
	{/if}

	{#if data}
		<Datatable settings={settings} data={data} bind:dataRows={rows} id="land-{id}" style="--id: {id};">
			<thead>
				<th data-key="name" style="width: 100px;">Name</th>
				<th data-key="continent" style="width: 100px;">Continent</th>
				<th data-key="kingdomId" style="width: 100px;">Kingdom</th>
				<th data-key="total" style="width: 100px;">Total</th>
			</thead>
			<tbody>
			{#if rows}
				{#each $rows as row}
					<tr>
						<td>{row.name}</td>
						<td>{row.continent}</td>
						<td>{row.kingdomId}</td>
						<td>{row.total}</td>
					</tr>
				{/each}
			{/if}
			</tbody>
		</Datatable>
	{:else}
		No data
	{/if}

	{#if settings.detached_pagination}
		<aside>
			{#if $rows}
				<PaginationButtons id={'my-table'}/>
				<PaginationRowCount id={'my-table'}/>
			{/if}
		</aside>
	{/if}
</Box>


<style global lang="scss">
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