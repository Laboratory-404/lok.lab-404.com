<!--suppress JSUnresolvedVariable -->
<script>
	import { db } from '$lib/stores'
	import { getContributions } from '$lib/api'
	import Box from '$lib/components/Box.svelte'
	import { Datatable, SearchInput, PaginationButtons, PaginationRowCount } from 'svelte-simple-datatables'

	// noinspection JSUnusedLocalSymbols
	let owner = '0xB00Fc62B8B22243779A35effb8B98f18193daa09'
	// noinspection JSUnusedLocalSymbols
	let lands = [134223, 134224, 134225, 133969, 133968, 133967, 133711, 133712, 133713, 133455, 133456, 133457, 150949]
	let start = '2022-03-22'
	let end = '2022-03-28'
	let land = 133455

	if (Array.isArray($db.lands))  {
		if ($db.lands.length === 0) {
			$db.lands = [{
				start,
				end,
				data: {}
			}]

			$db.lands.map((p, i) => {
				if (p.start === start && p.end === end) {
					lands.map(async land => {
						let contributions_api = await getContributions(land, start, end).catch(error => console.error(error))
						// noinspection UnnecessaryLocalVariableJS
						let contributions_data = await contributions_api?.json().catch(error => console.error(error))

						if (typeof p.data === 'undefined') {
							$db.lands[i].data = {}
						}

						$db.lands[i].data[land] = contributions_data
					})
				}
			})

			console.log('Loaded from server')
		} else {
			let found = false

			$db.lands.map(p => {
				if (p.start === start && p.end === end) {
					found = true
				}
			})

			if (found) {
				$db.lands.map((p, i) => {
					if (p.start === start && p.end === end) {
						if (p.data && Object.keys(p.data).length === 0) {
							lands.map(async land => {
								let contributions_api = await getContributions(land, start, end).catch(error => console.error(error))
								// noinspection UnnecessaryLocalVariableJS
								let contributions_data = await contributions_api?.json().catch(error => console.error(error))

								if (typeof p.data === 'undefined') {
									$db.lands[i].data = {}
								}

								$db.lands[i].data[land] = contributions_data
							})

							console.log('Loaded from server')
						} else {
							console.log('Loaded from cache')
						}
					}
				})
			} else {
				$db.lands.push({
					start,
					end,
					data: {}
				})

				$db.lands.map((p, i) => {
					if (p.start === start && p.end === end) {
						lands.map(async land => {
							let contributions_api = await getContributions(land, start, end).catch(error => console.error(error))
							// noinspection UnnecessaryLocalVariableJS
							let contributions_data = await contributions_api?.json().catch(error => console.error(error))

							if (typeof p.data === 'undefined') {
								$db.lands[i].data = {}
							}

							$db.lands[i].data[land] = contributions_data
						})
					}
				})

				console.log('Loaded from server')
			}
		}
	}

	const settings = {
		sortable: true,
		pagination: false,
		scrollY: true,
		// rowsPerPage: 200,
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
			searchInput: false,
			paginationButtons: false,
			paginationRowCount: false
		}
	}

	let data = $db?.lands[0]['data'][land]['contribution']
	let rows
</script>

<Box style="height: 80vh; padding: 10px;">
	<aside class="search">
		{#if $rows}
			<SearchInput id={'my-table'}/>
		{/if}
	</aside>

	<Datatable settings={settings} data={data} bind:dataRows={rows} id={'my-table'}>
		<thead>
			<th data-key="name" style="width: 25%;">Name</th>
			<th data-key="continent" style="width: 25%;">Continent</th>
			<th data-key="kingdomId" style="width: 25%;">Kingdom</th>
			<th data-key="total" style="width: 25%;">Total</th>
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

	{#if settings.pagination}
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

		&.search {
			input {
				margin-left: 0 !important;
				color: var(--accent-color);
				border: 1px solid rgba(255, 204, 0, 0.65) !important;

				&:focus {
					border: 1px solid var(--accent-color) !important;
				}
			}
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

	section {
		&#my-table {
			//height: calc(100% - 58px);
			height: calc(100% - 26px);
			background-color: transparent;
			overflow: hidden;

			article {
				&.dt-table {
					table {
						//width: 100%;

						thead {
							//width: 100%;
						}
					}
				}
			}

			section {
				&.dt-header {
					thead {
						background-color: var(--bg-color-secondary);

						th {
							background-color: transparent;
						}
					}
				}
			}
		}
	}
</style>