'use strict'

// menu-burder
let menuBurger = document.querySelector(".menu-burger");
if(menuBurger) {
	const menuNav = document.querySelector(".menu");
	menuBurger.addEventListener('click', function(event){
		menuBurger.classList.toggle("active");
		menuNav.classList.toggle("active");
	});
	const menuLinks = document.querySelectorAll('.menu__link');
	for (let menuLink of menuLinks) {
		menuLink.addEventListener('click', (event) => {
			menuBurger.classList.remove("active");
			menuNav.classList.remove("active");
		});
	}

}

const links = document.querySelectorAll('a.menu__link');
links.forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		let href;
		if (this.getAttribute('href').startsWith('#')) {
			href = this.getAttribute('href').substring(1);
		} else if (this.getAttribute('href') == 'news.html') {
			setInterval(function(){
				window.location.href = 'news.html';
			}, 200);
		} else if (this.getAttribute('href') == 'blog.html') {
			setInterval(function(){
				window.location.href = 'blog.html';
			}, 200);
		} else {
			window.location.href = 'index.html';
		}
		console.log(href)
		const scrollTarget = document.getElementById(href);
		const topOffset = 130;
		const elementPosition = scrollTarget.getBoundingClientRect().top
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		})
	})
})
// scrollY
document.addEventListener('scroll', function(event){
	let scroll_top = window.scrollY;
	if (scroll_top > 0) {
		$('.navigation').addClass('js--navigation');
	} else {
		$('.navigation').removeClass('js--navigation');
	}
})

$(document).ready(function(){
	$(".reviews__slider").slick({
		dots: true,
		focusOnSelect: true,
		centerMode: true, //режим чтобы поставить блоки по центру
		infinite: true, //бесконечная прокрутка
		prevArrow: false, //убрал стрелки
		nextArrow: false, //убрал стрелки
		slidesToScroll: 1,
		slidesToShow: 3, // показать 1 элемент
		variableWidth: true,
		responsive: [ 
			{
				breakpoint: 700,
				settings: {
					slidesToScroll: 1,
					slidesToShow: 1,
					variableWidth: false
				}

			}
		]
	})

	let servicesCard = {
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 2000,
		autoplay: true,
		infinite: true,
		dots: true,
		arrows: false
		
	};
	if ($(document).width() <= 468) {
		$('.services__card').slick(servicesCard)
	}

	$(window).resize(function (){
		if($(document).width() <= 468) {
			if(!$(".services__card").hasClass("slick-initialized")) $('.services__card').slick(servicesCard);
		} else {
			if ($(".services__card").hasClass("slick-initialized")) $(".services__card").slick("unslick");
		}
	});

	// click po menu__link
	$('.menu__link').on('click', function () {
		$(this).siblings().removeClass('menu__link--active')
		$(this).addClass('menu__link--active')
	});
	
	// scroll pri menu__link and close menu-burger
	$('.menu-burger').on('click',function() {
		$('body').toggleClass('fixed');
		$('.menu__link').click(function() {
			$('.menu-burger').removeClass('.active')
			$('body').removeClass('fixed')
		})
	});
})


// пульсирующая кнопка

// const buttons = document.getElementsByClassName('btn'),
// 	  forEach = Array.prototype.forEach;

// forEach.call(buttons, function(b) {
// 	b.addEventListener('click', addElement);
// });

// function addElement(e) {
// 	let addDiv = document.createElement('div');
// 		mValue = Math.max(this.clientWidth, this.clientHeight),
// 		rect   = this.getBoundingClientRect();
// 		sDiv   = addDiv.style,
// 		px     = 'px';
	
// 		sDiv.width = sDiv.heigth = mValue + px;
// 		left = e.clientX - rect.left - (mValue / 2) + px;
// 		left = e.clientY - rect.top - (mValue / 2) + px;


// 	addDiv.classList.add('pulse');
// 	this.appendChild(addDiv)
// }


const modal = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.btn');
const buttonModalClose = document.querySelector('.modal__close-button');

for (let button of buttonModals) {
	button.addEventListener('click', () => modal.classList.add('modal--active'))
};
buttonModalClose.addEventListener('click', () => modal.classList.remove('modal--active'));