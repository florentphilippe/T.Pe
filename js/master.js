//Master js file

document.addEventListener("DOMContentLoaded", function(){

  //Effect on tile section => scrollreveal.js
  window.sr = ScrollReveal({ reset: true, viewFactor: 0.6});
  sr.reveal(".scroll");

  var toTop = $("#iss-section").offset().top + $("#cover").offset().top;

  $(window).scroll(function(e) {
    // Get scroll position
    var distanceScrolled = $(window).scrollTop() - toTop - 700;

    console.log(distanceScrolled);
    
    $('#iss-section').css('filter', 'blur('+distanceScrolled/100+'px)');
});

  

});
