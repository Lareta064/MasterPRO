 $(document).ready(function() {
 	

	$(window).resize(function(){
		    var w = $(window).width();
		    var topnav = $("#topnav");
		    if(w > 800) { //не забудь поменять условие на правильное
		    	//меняем значение аттрибута class элемента topnav
		        topnav.attr("class","header__menu"); 
		    }
		});
  //плавная прокрутка
    $("a,nav a,a[href='#'],a[rel='m_PageScroll2id'],a.PageScroll2id, a.mouse_scroll").mPageScroll2id({
      highlightSelector:"nav a"
    });

	//иконка бургер
	(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".cmn-toggle-switch");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }
 
})();
// конец иконка

	$("#navigation__button").click(myFunction); 

	function myFunction() {
		var x = document.getElementById("topnav");
		;
		if(x.className === "header__menu") {
			x.className += " responsive";
		}  else{
				x.className = "header__menu";

		}
	}

  var navLinks = $(".header__nav a");
  var navToggleButton = $("#navigation__button");
  var navBlock = $('.header__menu');
  var navBlockOpen = 'responsive';

  navLinks.on('click', function(){
    if ( navBlock.hasClass(navBlockOpen) ) {
      navButtonToggle();
    }
    navBlock.removeClass(navBlockOpen);
  });

  function navButtonToggle(){
    if ( navToggleButton.hasClass("active")) {
      navToggleButton.removeClass("active");
    } else {
      navToggleButton.addClass("active");
    }
  }

	//открываем поп 
$('.show_popup').click(function() { // Вызываем функцию по нажатию на кнопку 
    var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id 
    $(popup_id).show(); // Открываем окно
    $('.overlay_popup').show(); // Открываем блок заднего фона
}) 
$('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
    $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
});
//открываем поп 

//animated
 wow = new WOW( {
     boxClass:     'wow',      // default
    animateClass: 'animated', // default
    mobile:       false,       // default
    offset:       100,          // через сколько пикселей сработает
    live:         true        // для мобильных оставить или убрать анимацию
    }
  )
  wow.init();
   new WOW().init();


	

});

 $(document).ready(function(){
  // появление/затухание кнопки #back-top
  $(function (){
    // прячем кнопку #back-top
    $("#back-top").hide();
  
    $(window).scroll(function (){
      if ($(this).scrollTop() > 100){
        $("#back-top").fadeIn();
      } else{
        $("#back-top").fadeOut();
      }
    });

    // при клике на ссылку плавно поднимаемся вверх
    $("#back-top a").click(function (){
      $("body,html").animate({
        scrollTop:0
      }, 800);
      return false;
    });
  });
});