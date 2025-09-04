$( function() {
    $( "#inputcheck-in" ).datepicker();
    $( "#inputcheck-out" ).datepicker();

    $('.level-slider').slick({
      dots: true,
      /*fade: true,*///make animate
      /*arrows: true,*/
      slidesToShow: 2,
      slidesToScroll: 1,
    });

    function videoToggle(){
      video= $(".level-video").get(0)

      if(video.paused){
        video.play();
        $('#on').hide();
        $('#off').show();
      }
      else{
        video.pause();
        $('#on').show();
        $('#off').hide();
      }
    }

    $('#on').click(function(){
      videoToggle();
    });

    $('#off').click(function(){
      videoToggle();
    });
});