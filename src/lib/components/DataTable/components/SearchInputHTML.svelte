<script>
    export let context
	export let ref = ''
	export let classList = ''

	// noinspection JSUnusedAssignment
	const options = context.getOptions()

	const search = value => {
		context.getPageNumber().set(1)
		context.getGlobalFilter().set(value)
		context.getColumns().redraw()
	}
</script>

<!--suppress XmlInvalidId -->
<input class={classList} class:css={$options.css} type="text" autocomplete="new-password" placeholder={$options.labels.search} on:input={(e) => search(e.target.value)} {ref} value="" />

<style>
	input.css {
		border: 1px solid #e0e0e0;
		border-radius: 4px;
		outline: none;
		padding: 0 8px;
		line-height: 24px;
		height: 24px;
		background: transparent;
		width: 176px;
		transition: all, 0.1s;
		margin: 0 0 0 16px;
	}

	input.css:focus {
		border: 2px solid #e0e0e0;
	}

	input.css::placeholder {
		color: #9e9e9e;
		line-height: 24px;
	}
</style>