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

	$: id = params.id

	let data

	afterUpdate(() => {
		data = $db?.lands[0]['data'][id]['contribution']
	})
</script>

<Land {id} {data} />