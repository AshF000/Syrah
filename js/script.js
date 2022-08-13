$(function () {

  //ACTIVE NAVIGATION (MENU)
  $(".nav_menu_opt").click(function () {
    $('.nav_menu_opt').removeClass('active');
    $(this).addClass('active');
  });


  //STICKY NAVIGATION (MENU)
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".navbar").removeClass("sticky");
    } else {
      $(".navbar").addClass("sticky");
    }
  });


  // UPDATE SLIDER
  $('.update_right').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '.update_left_arrow',
    nextArrow: '.update_right_arrow',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });


  //ACTIVE FOOTER MENU
  $(".foot_menu_opt").click(function () {
    $('.foot_menu_opt').removeClass('foot_menu_active');
    $(this).addClass('foot_menu_active');
  });


  // //SCROLL TO TOP BUTTON
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.taptotop').fadeIn(200)
    } else {
      $('.taptotop').fadeOut(200)
    }
  });

  $('.taptotop').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0,
    }, 300);
  });



});