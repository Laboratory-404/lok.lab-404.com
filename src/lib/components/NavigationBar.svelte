<script>
	import { db } from '$lib/stores'

	$: selected = $db.selected
</script>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			{#if selected !== '0'}
				<a href="/land-{selected}" style="font-weight: bold;">Land {selected}</a>
			{/if}
		</li>
	</ul>
</nav>