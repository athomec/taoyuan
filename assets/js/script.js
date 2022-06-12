$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//---------------------登入頁設定----------------------
	$(".js-toggle-menu").find("input").click(function () {
		$(this).parents(".js-toggle-menu").find(".form-check").removeClass('active');
		$(this).parent(".form-check").addClass("active");
	})

	//---------------------側邊選單設定------------------------
	$(".js-info-opener").click(function () {
		$(".js-side-info").removeClass('open');
		let content = $(this).attr("data-target");
		$(".js-handler").addClass('open');
		$(".js-map-content").addClass('open');
		$(content).addClass('open');
	})
	$(".js-info-closer").click(function () {
		$(".js-handler").removeClass('open');
		$(".js-map-content").removeClass('open');
		$(".js-side-info").removeClass('open');
	})
	$(".js-side-menu-toggler").click(function () {
		$('.js-side-menu').toggleClass("close");
		$(".js-side-content").toggleClass("close");
	})
	//---------------------視窗拖曳設定------------------------
	var handler = document.querySelector('.js-handler');
	var wrapper = handler.closest('.js-side-content');
	var boxA = wrapper.querySelector('.js-map-content');
	var boxB = wrapper.querySelector('.js-side-info');
	var isHandlerDragging = false;
	var isHandlertoching = false;

	document.addEventListener('mousedown', function (e) {
		// If mousedown event is fired from .handler, toggle flag to true
		if (e.target === handler) {
			isHandlerDragging = true;
		}
	});

	document.addEventListener('mousemove', function (e) {
		// Don't do anything if dragging flag is false
		if (!isHandlerDragging) {
			return false;
		}
		// Get offset
		var containerOffsetTop = wrapper.offsetTop;
		var containerOffsetBottom = wrapper.offsetBottom;
		// Get x-coordinate of pointer relative to container
		var pointerRelativeXpos = e.clientY - containerOffsetTop;
		var pointerRelativeXpos2 = e.clientY - e.offsetTop + e.offsetHeight;
		var boxAminWidth = 30;
		boxA.style.height = (Math.max(boxAminWidth, pointerRelativeXpos - 2)) + 'px';
		//boxA.style.flexGrow = 0;
		boxB.style.height = (Math.max(boxAminWidth, pointerRelativeXpos2 - 8)) + 'px';
		//boxB.style.flexGrow = 0;
	});
	document.addEventListener('mouseup', function (e) {
		// Turn off dragging flag when user mouse is up
		isHandlerDragging = false;
	});

	//---------------------頁籤設定------------------------
	$('.js-toggle-menu').find(".js-toggle-button").click(function () {
		$(this).toggleClass("active");
		$(this).siblings('.js-toggle-button').removeClass('active');

	});

	//手風琴按鈕切換設定
	$(".js-accordion-menu").find('button').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
		} else {
			$(this).parents(".js-accordion-menu").find('button').removeClass('active');
			$(this).parents(".js-accordion-menu").find('button').find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
			$(this).addClass("active");
			$(this).find('span').removeClass('ti-angle-down').addClass('ti-angle-up');
		}

	});

	//----------------gotop功能-----------------
	$(".gotop").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 300);
		return false;
	})
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) { //若目前的位置距離網頁頂端>100px
			$(".gotop").fadeIn("fast");
			$("header").addClass("godown");
		} else {
			$(".gotop").stop().fadeOut("fast");
			$("header").removeClass("godown");
		}

		var index = 0;//各單元區塊順序
		var st = $(window).scrollTop();//現在捲軸位置
		var wh = $(window).height();//視窗高度
	});

	//主選單設定
	$(".navbar-nav").find('a').click(function () {
		var section = $(this).attr("href");
		$("html,body").animate({ scrollTop: $(section).offset().top - 66 }, 300);
		$(".navbar-collapse").removeClass("show");
		return false;
	});


	RESIZE();

	/*$(window).resize(function () {
		RESIZE();
	});*/

	function RESIZE() {
		WINDOWH = $(window).height();
		WINDOW = $(window).width();

		if (WINDOW < 768) {
			$('.js-side-menu').addClass("close");
			$(".js-side-content").addClass("close");
		}
	}


})//JS尾端	