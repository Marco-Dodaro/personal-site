$(document).ready(function(){

var elm_class = '.scrollToTopBtn'; // Adjust this accordingly.

//Check to see if the window is top if not then display button
$(window).scroll(function(){
if ($(this).scrollTop() > 50) { // 50px from top
  $(elm_class).fadeIn();
} else {
  $(elm_class).fadeOut();
}
});

//Click event to scroll to top
$(elm_class).click(function(){
$('html, body').animate({scrollTop : 0},800);
return false;
});

});
