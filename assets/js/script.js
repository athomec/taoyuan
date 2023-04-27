$(function () {//JS開頭eaize

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//---------------------登入頁設定----------------------
	$(".js-toggle-menu").find("input").click(function () {
		$(this).parents(".js-toggle-menu").find(".form-check").removeClass('active');
		$(this).parent(".form-check").addClass("active");
	})

	//---------------------側邊選單設定------------------------
	$(".js-info-opener").click(function () {
		let content = $(this).attr("data-target");
		$(".js-side-info").removeClass('open');
		$(".js-map-content-wrapper").css('height', ' calc(100vh - 314px)');
		$(content).addClass('open');
	})
	$(".js-inside-info-opener").click(function () {
		let content = $(this).attr("data-target");
		window.parent.$(".js-side-info").removeClass('open');
		window.parent.$(".js-map-content-wrapper").css('height', ' calc(100vh - 314px)');
		window.parent.$(content).addClass('open');
	})
	$(".js-info-closer").click(function () {
		$(".js-map-content-wrapper").removeClass('open');
		$(".js-map-content-wrapper").css('height', ' calc(100vh - 46px)');
		$(".js-side-info").removeClass('open');
	})
	$(".js-side-menu-toggler").click(function () {
		$('.js-side-menu').toggleClass("close");
		$(".js-side-content").toggleClass("close");
	})
	//地圖比對
	$(".js-map-comparison").click(function () {
		$(".js-map-content").toggleClass("compare");
		$(".js-map-content-compare").toggleClass("compare");
		if ($(".js-map-content-compare").hasClass("compare")) {
			return false;
		} else {
			$(".js-map-content-compare").css("width", "");
		}
	});


	//---------------------視窗拖曳設定------------------------
	$('.js-map-content-wrapper').resizable({
		handles: 's'
	});
	const resizeObserver = new ResizeObserver(onResize);
	resizeObserver.observe(document.querySelector('.js-map-content-wrapper'));

	function onResize(e) {
		$(".js-side-info").addClass("hide");
		document.addEventListener('mouseup', function (e) {
			$(".js-side-info").removeClass("hide");
		});
	}

	$('.js-map-content-compare').resizable({//地圖比對
		handles: 'w'
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


	/*匯出視窗-未輸入條件示意*/
	$("#info-export-default").modal("show");
	/*匯出視窗-查無資料示意*/
	$('#info-export-noinfo').modal("show");
	/*個人資料視窗-編輯示意*/
	$('#info-personal-edit').modal("show");


	$(window).resize(function () {
		RESIZE();
	});
	

	function RESIZE() {
		WINDOWH = $(window).height();
		WINDOW = $(window).width();
		if (WINDOW < 768) {
			$(".js-side-menu").addClass("close");
			$(".js-side-content").addClass("close");
		}
	}
	RESIZE();


})//JS尾端	