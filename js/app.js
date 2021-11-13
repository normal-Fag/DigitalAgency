window.addEventListener('load', init);

let advertising_items

function init() {
	// Обработка advertising__item
	advertising_items = document.querySelectorAll('.advertising__item');
	setHeights();
	wireUpTriggers();
	window.addEventListener("resize", setHeights);

	// Обработка "бургера" 
	const burger_button = document.querySelector('.header__burger');
	const menu_bar = document.querySelector('.menu');
	const main = document.querySelector('.main');
	const body = document.querySelector('body');

	burger_button.addEventListener('click', () => {

		body.classList.toggle('lock');
		main.classList.toggle('active');
		menu_bar.classList.toggle('active');
		burger_button.classList.toggle('active');

	})
}

function setHeights() {
	advertising_items.forEach(advertising_item => {
		// Get content
		let content = advertising_item.querySelector(".advertising__text-hide");
		// Needed if this is being fired after a resize
		content.removeAttribute("aria-hidden");
		// Height of content to show/hide
		let heightOfContent = content.getBoundingClientRect().height;
		// Set a CSS custom property with the height of content
		advertising_item.style.setProperty("--containerHeight", `${heightOfContent}px`);
		// Once height is read and set
		setTimeout(e => {
			content.setAttribute("aria-hidden", "true");
		}, 0);
	});
}

function wireUpTriggers() {
	advertising_items.forEach(advertising_item => {
		// Get each trigger element
		let btn = advertising_item.querySelector(".advertising__hide-show-btn");
		// Get content
		let content = advertising_item.querySelector(".advertising__text-hide");
		btn.addEventListener("click", () => {
			content.setAttribute(
				"aria-hidden",
				content.getAttribute("aria-hidden") === "true" ? "false" : "true"
			);
		});
	});
}