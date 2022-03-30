<script>
	import { db } from '$lib/stores'
	import { afterUpdate } from 'svelte'

	let lands = Object.keys($db?.lands[0]?.data || {})

	afterUpdate(() => {
		lands = Object.keys($db?.lands[0]?.data || {})
	})
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		{#each lands as land}
			<li><a href="/land-{land}">{land}</a></li>
		{/each}
	</ul>
</nav>