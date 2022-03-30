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
	import Land from '$lib/components/Land.svelte'

	export let params

	let id = params.id
	let data

	afterUpdate(() => {
		// noinspection JSUnresolvedVariable
		data = $db?.lands[0]?.data[id]?.contribution
	})
</script>

<Land {id} {data} />