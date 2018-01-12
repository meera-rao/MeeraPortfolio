
(function($){
  $(function(){

    $('.sidenav').sidenav({
      edge: 'right',
      inDuration: 350,
      outDuration: 300
    });

    $('.scrollspy').scrollSpy({
      scrollOffset: 60
    });

    $('#navigation').pushpin({
      top: $('#navigation').offset().top 
    });

    $("#intro-banner nav ul a").on("click", function(){
      var relatedSection = $(this).data("href");
      $("nav ul a").removeClass("active-page", "active");
      $(this).addClass("active-page")
    });

    $(window).on("scroll", function(){
      var windowHeight = $(window).height();
      var topScroll = $(window).scrollTop()- windowHeight;
      if(topScroll >= 0){
        console.log("addingWhite")
        $(".nav-wrapper").addClass("white");
      } else if( topScroll < 0){
        $(".nav-wrapper").removeClass("white");
      }
    })


  }); // end of document ready
})(jQuery); // end of jQuery name space
