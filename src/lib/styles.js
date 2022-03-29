// noinspection JSUnusedGlobalSymbols

/*
	<script>
		import styles from './styles.js'
		let css = 'h1 { background: blue; color: white }'
	</script>

	<h1 use:styles={css}>TEST</h1>
 */

export default function(node, styles) {
	const head = document.head || document.getElementsByTagName('head')[0]
	const style = document.createElement('style')
	head.appendChild(style)
	// noinspection JSDeprecatedSymbols
	style.type = 'text/css'
	let el = document.createTextNode(styles)
	style.appendChild(el)

	return {
		update(val) {
			const newEl = document.createTextNode(val)
			style.replaceChild(newEl, el)
			el = newEl
		},
		destroy() {
			head.removeElement(style)
		}
	}
}