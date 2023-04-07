$(function(){

	 $('.banner-section__slider').slick({
	 	dots: true,
	 	prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
	 	nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
		responsive: [
			{
			  breakpoint: 969,
			  settings: {
				 arrows: false
			  }
			}
		 ]
	});


	

	$('.product-item__favorite').on('click', function() {
		$(this).toggleClass('product-item__favorite--active')
	});

	$('.product-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
		nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 1301,
				settings: {
					arrows: false,
					dots: true
			  }
			},
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 870,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 590,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true
				}
			}
		 ]
	});

	$('.filter-style').styler();

	$('.catalog__filter-btngrid').on('click', function(){
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
		$('.product-item__wrapper').removeClass('product-item__wrapper--list');
	});
	$('.catalog__filter-btnline').on('click', function(){
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
		$('.product-item__wrapper').addClass('product-item__wrapper--list');
	});

	$('.tab').on('click', function(e) {
		e.preventDefault();

		$($(this).siblings()).removeClass('tab--active');
		$($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

	 	$(this).addClass('tab--active');
	 	$($(this).attr('href')).addClass('tabs-content--active');
	});

	$('.filter__item-drop').on('click', function(){
		$(this).toggleClass('filter__item-drop--active');
		$(this).next().slideToggle('200');
	});

	$('.js-range-slider').ionRangeSlider({
		type: 'double',
		min: 100,
		max: 500,
	});

	$('.product-card__icon-favorite').on('click', function() {
		$(this).toggleClass('product-card__icon-favorite--active')
	});

	$('.rate-yo').rateYo({
		ratedFill: '#1C62CD',
		spacing: '7px',
		normalFill: '#C4C4C4',
		starWidth: '23px',
		readOnly: true
	});

	$('.rate').on('click', function() {
		$($(this).attr('href')).siblings().removeClass('tabs-content--active');
		$($(this).attr('href')).addClass('tabs-content--active');
		$($('.tab').siblings()).removeClass('tab--active');
		$('.tab[href="#product-card__tabs-3"]').addClass('tab--active');
	});

	$('.card-tab-review__rate-yo').rateYo({
		ratedFill: '#1C62CD',
		spacing: '5px',
		normalFill: '#C4C4C4',
		starWidth: '18px',
		readOnly: true
	});
	

	$('.menu__btn').on('click', function(){
		$('.menu-mobile__list').toggleClass('menu-mobile__list--active')
	});

	$('.footer__topdrop').on('click', function(){
		$(this).next().slideToggle();
		$(this).toggleClass('footer__topdrop--active');
	});

	$('.aside__btn').on('click', function(){
		$(this).next().slideToggle();
		$(this).toggleClass('aside__btn--active');
	});




});