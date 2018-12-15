$("#cta-portfolio").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#portfolio").offset().top
  }, 400);
});

$("#scroll-top").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#page-top").offset().top
  }, 700);
});

window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
       // document.getElementById("scroll-top").style.display = "block";
    } else {
       // document.getElementById("scroll-top").style.display = "none";
    }
}


