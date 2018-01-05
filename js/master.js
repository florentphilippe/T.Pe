//Master js file

$(document).ready(function(){

  //FadeIn effect on tiles in logbook section

  $(".scroll-first-row, .scroll-second-row").css("opacity", 0);

  //Effect is triggered when viewport comes to its half
  $(".scroll-first-row").waypoint(function(){
    $(".scroll-first-row").addClass("animated fadeInUp");
  }, {offset: "50%"});

  $(".scroll-second-row").waypoint(function(){
    $(".scroll-second-row").addClass("animated fadeInUp");
  }, {offset: "50%"});




});
