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
	import { getData } from '$lib/api'
	import Land from '$lib/components/Land.svelte'

	export let params

	$: id = params.id

	let lands = $db.lands
	let val = 0
	let max = lands.length
	let start = $db.start
	let end = $db.end
	let data

	afterUpdate(() => {
		getData(lands, start, end)

		$db.selected = id + ''

		let index = 0

		$db.data.map((p, i) => {
			if (p.start === start && p.end === end) {
				index = i
			}
		})

		// noinspection JSUnresolvedVariable
		data = $db?.data[index]?.data[id]?.contribution
	})
</script>

<Land {id} {data} {val} {max} />