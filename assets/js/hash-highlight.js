let previousHighlight

const piecesToHighlight = document.getElementsByClassName('highlight-block')
console.log(piecesToHighlight)

for (let i = 0; i < piecesToHighlight.length; ++i) {
	piecesToHighlight[i].addEventListener('click', handleHighlightClick)
}

function hashMayHaveChanged (data) {
	if (previousHighlight) previousHighlight.classList.remove('highlighted')
	previousHighlight = null

	const hash = typeof data === 'string' ? data.replace('#', '') : document.location.hash.replace('#', '')
	if (!hash) return

	const target = document.getElementById(hash)

	if (target) {
		previousHighlight = target
		target.classList.add('highlighted')

		setTimeout(() => {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'nearest'
			})
		}, data ? 0 : 300)
	}
}

function handleHighlightClick (e) {
	e.preventDefault()
	const anchor = event.target.closest('a')
	history.replaceState({}, '', anchor.getAttribute('href'))
	hashMayHaveChanged(anchor.getAttribute('href'))
}

hashMayHaveChanged()
window.onhashchange = hashMayHaveChanged
