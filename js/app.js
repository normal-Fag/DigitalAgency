const burger_button = document.querySelector('.header__burger');

burger_button.addEventListener('click', () => {

	let menu_bar = document.querySelector('.menu');
	let main = document.querySelector('.main');
	let body = document.querySelector('body');

	body.classList.toggle('lock');
	main.classList.toggle('active');
	menu_bar.classList.toggle('active');
	burger_button.classList.toggle('active');

})