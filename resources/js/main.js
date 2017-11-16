$(document).ready(function(){
  // Jumbotron background and text scroll every 4s with Slick plug-in
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

// Navigation header disappears as user scrolls down by 50px, and reappears as she scrolls up by 50px.

  var $scrollDist = 0; //Initial position of scrollbar top.

  $(window).scroll(function(){  //When user begins scrolling:

    var $scrollPsn = $(this).scrollTop(); //Current scrollbar position.

    if ($scrollPsn > $scrollDist + 50) { //If the current position exceeds the initial position by 50px, then...
      var $navHeight = $('.navbar').css('height'); //Get the current height of the navbar.
     $('.navbar').animate({top: '-' + $navHeight},150); //Change the position of top of the navbar to the negative of the navbar height over 150 ms, thus hiding it.
      $scrollDist = $scrollPsn; //Update the initial position of the scrollbar height to the current position.
    } else if ($scrollDist > $scrollPsn + 50){ //If the initial position of the scrollbar is greater than the current position by 50px, then the user is scrolling up so...
      $('.navbar').animate({top: 0},150); //Replace the top of the navbar to 0 over 150ms, thus making it reappear.
      $scrollDist = $scrollPsn; //Update the initial position of the scrollbar to the current position.
    }
  });
});
