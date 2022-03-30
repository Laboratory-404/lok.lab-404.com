<!--suppress JSUnresolvedVariable -->

<script>
	import { afterUpdate } from 'svelte'
	import { db } from '$lib/stores'
	import { getContributions } from '$lib/api'
	import Land from '$lib/components/Land.svelte'

	// noinspection JSUnusedGlobalSymbols
	let owner = '0xB00Fc62B8B22243779A35effb8B98f18193daa09'
	// noinspection JSUnusedLocalSymbols
	let lands = [134223, 134224, 134225, 133969, 133968, 133967, 133711, 133712, 133713, 133455, 133456, 133457, 150949]
	let start = '2022-03-22'
	let end = '2022-03-28'
	let land = 134223

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

						val++

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

								val++

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

	let id = 0
	let val = 0
	let max = lands.length
	let data
	let rows

	afterUpdate(() => {
		data = $db?.lands[0]?.data[land]?.contribution
	})
</script>

<Land {id} {data} {val} {max} />