<script>
	import { onMount } from 'svelte'

	import LogoAnimated from '$lib/components/LogoAnimated.svelte'

	export let showLoading = false

	onMount(() => {
		setTimeout(() => {
			showLoading = true
		}, 4000)
	})
</script>

<LogoAnimated />