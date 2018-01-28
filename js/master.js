//Master js file

document.addEventListener("DOMContentLoaded", function(){

  //Effect on tile section => scrollreveal.js
  window.sr = ScrollReveal({ reset: true, viewFactor: 0.6});
  sr.reveal(".scroll");

  /*Blur effect
  window.scroll(function() {
    var blur = window.scrollTop();
    var opacity = (blur / 150.0);
    document.getElementById("#iss-section").classList("opacity", opacity);
  }); */

  var toTop = $("#iss-section").offset().top + $("#cover").offset().top;

  $(window).scroll(function(e) {
    // スクロールの位置取得 
    // Get scroll position
    var distanceScrolled = $(window).scrollTop() - toTop;

    console.log(distanceScrolled);
    
    // スクロールの値と透明度
    // scroll value and opacity
    //opacityVal = (s / 150.0);
    // blurの画像の透明度を0%から100％
    // opacity value 0% to 100%
    $('#iss-section').css('filter', 'blur('+distanceScrolled/150+'px)');
});

  

});
