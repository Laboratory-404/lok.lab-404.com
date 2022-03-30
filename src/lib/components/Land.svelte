<!--suppress JSUnresolvedVariable, CssUnusedSymbol, ES6RedundantNestingInTemplateLiteral -->
<script>
	import Saos from 'saos'
	import Box from '$lib/components/Box.svelte'
	import { Datatable, SearchInput, PaginationButtons, PaginationRowCount } from 'svelte-simple-datatables'

	export let id
	export let data

	const settings = {
		detached_search: false,
		detached_pagination: false,
		sortable: true,
		pagination: true,
		scrollY: true,
		rowsPerPage: 50,
		columnFilter: false,
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
	}

	#land-${id} section.dt-header thead {
		background-color: var(--bg-color-secondary);
	}

	#land-${id} section.dt-header thead th {
		background-color: transparent;
	}

	#land-${id} section.dt-table {
		overflow-x: auto;
	}
</${''}style>`}
</svelte:head>

<Saos animation={"fade-in 0.3s"} once>
	<Box style="height: 80vh;">
		{#if settings.detached_search}
			<aside class="search">
				{#if $rows}
					<SearchInput id="land-{id}" />
				{/if}
			</aside>
		{/if}

		{#if data}
			<Datatable id="land-{id}" settings={settings} data={data} bind:dataRows={rows}>
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
					<PaginationButtons id="land-{id}" />
					<PaginationRowCount id="land-{id}" />
				{/if}
			</aside>
		{/if}
	</Box>
</Saos>

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