export const navScrollListener = ({ bannerHeight = 72 }) => {
	let navbar = document.querySelector('nav')
	let element = document.scrollingElement || document.documentElement
	let scroll = element.scrollTop

	if (scroll >= bannerHeight) {
		navbar && navbar.classList.add('fixed')
	} else {
		navbar && navbar.classList.remove('fixed')
	}
}
