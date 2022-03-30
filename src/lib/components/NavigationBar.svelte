<script>
	import { afterUpdate } from 'svelte'
	import { goto } from '$app/navigation'
	import { db } from '$lib/stores'

	$: lands = Object.keys($db?.lands[0]?.data || {})

	let selected = $db.selected + ''

	const onChange = () => {
		$db.selected = selected + ''

		goto(`/land-${$db.selected}`, { replaceState: true })
	}

	afterUpdate(() => {
		setTimeout(() => {
			selected = $db.selected + ''
		})
	})
</script>

<nav>
	<ul>
		<li>
			<select bind:value={selected} on:change={onChange}>
				<option selected disabled value="0">Select Land</option>
				{#each lands as land}
					<option value={land}>Land {land}</option>
				{/each}
			</select>
		</li>
	</ul>
</nav>