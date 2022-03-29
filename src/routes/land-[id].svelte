<!--suppress JSUnusedAssignment -->

<script context="module">
	export const load = async ({ routeId, url, params }) => {
		return {
			props: { routeId, url, params }
		}
	}
</script>

<script>
	import Land from '$lib/components/Land.svelte'

	export let routeId
	export let params
	export let url

	console.log(routeId)
	console.log(url)
	console.log(params)

	let id =  params.id
</script>


<Land {id} />