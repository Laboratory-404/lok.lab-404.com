<script>
	export let context

	export let ref = ''
	export let classList = ''

	// noinspection JSUnusedAssignment
	const rowsCount = context.getRowsCount()
	// noinspection JSUnusedAssignment
	const options = context.getOptions()
	// noinspection JSUnusedAssignment
	const pageNumber = context.getPageNumber()
	// noinspection JSUnusedAssignment
	const datatableWidth = context.getDatatableWidth()

	$: start = $pageNumber * $options.rowsPerPage - $options.rowsPerPage + 1
	$: end = Math.min($pageNumber * $options.rowsPerPage, $rowsCount)
	$: rows = $rowsCount
	$: info = $options.labels.info.replace('{start}', `<b>${start}</b>`).replace('{end}', `<b>${end}</b>`).replace('{rows}', `<b>${rows}</b>`)
</script>

<aside class="dt-pagination-rowcount {classList}" class:css={$options.css} {ref}>
	{#if $datatableWidth > 600}
		{#if rows > 0}
			{@html info}
		{:else}
			{@html $options.labels.noRows}
		{/if}
	{:else}
		{@html `<b>${start}</b>-<b>${end}</b>/<b>${rows}</b>`}
	{/if}
</aside>

<style>
	.css {
		color: #616161;
		line-height: 32px;
		margin-left: 16px;
		font-size: 14px;
	}
</style>