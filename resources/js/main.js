$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  var $scrollDist = 0;
  // console.log($scrollDist);
  // $(window).scroll(function(){
  //
  //   var $scrollPsn = $(this).scrollTop();
  //
  //   if ($scrollPsn > $scrollDist + 50) {
  //     var $navHeight = $('.navbar').css('height');
  //    $('.navbar').animate({top: '-' + $navHeight},150);
  //     $scrollDist = $scrollPsn;
  //   } else if ($scrollDist > $scrollPsn + 50){
  //     $('.navbar').animate({top: 0,150});
  //     $scrollDist = $scrollPsn;
  //   }
  // });

});
