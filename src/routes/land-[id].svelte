<!--suppress JSUnusedAssignment -->

<script context="module">
	export const load = async ({ params }) => {
		return {
			props: { params }
		}
	}
</script>

<script>
	import { afterUpdate } from 'svelte'
	import { db } from '$lib/stores'
	import { getContributions } from '$lib/api'
	import Land from '$lib/components/Land.svelte'

	export let params

	$: id = params.id

	let lands = [134223, 134224, 134225, 133969, 133968, 133967, 133711, 133712, 133713, 133455, 133456, 133457, 150949]
	let val = 0
	let max = lands.length
	let start = '2022-03-21'
	let end = '2022-03-27'
	let data

	afterUpdate(() => {
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

					val = max
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

					val = max

					console.log('Loaded from server')
				}
			}
		}

		$db.selected = id + ''

		// noinspection JSUnresolvedVariable
		data = $db?.lands[0]?.data[id]?.contribution
	})
</script>

<Land {id} {data} {val} {max} />