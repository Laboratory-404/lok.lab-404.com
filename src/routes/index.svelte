<!--suppress JSUnresolvedVariable -->

<script>
	import Saos from 'saos'
	import { goto } from '$app/navigation'
	import { db } from '$lib/stores'
	import { getContributions } from '$lib/api'
	import Box from '$lib/components/Box.svelte'

	// noinspection JSUnusedGlobalSymbols
	let owner = '0xB00Fc62B8B22243779A35effb8B98f18193daa09'
	// noinspection JSUnusedLocalSymbols
	let lands = [134223, 134224, 134225, 133969, 133968, 133967, 133711, 133712, 133713, 133455, 133456, 133457]
	let start = '2022-03-21'
	let end = '2022-03-27'

	let id = 0
	let val = 0
	let max = lands.length
	let data
	let rows

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

	$db.selected = 133455 + ''

	goto(`/land-${$db.selected}`, { replaceState: true })
</script>

<Box style="height: 80vh;">
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
</Box>