$(function(){
  $("nav ul a").on("click", function(){
    var relatedSection = $(this).data("href");
    $("nav ul a").removeClass("active-page");
    $(this).addClass("active-page")
    var sectionOffset = $("."+relatedSection).offset().top;
    $("html, body").animate({ scrollTop: (sectionOffset- 60) }, 600);
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

})
