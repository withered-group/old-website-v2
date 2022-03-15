window.onscroll = function() {myFunction()};

var header = document.getElementById("asos");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(function(){
  $("#asos").load("/header.html"); 
  $("#footer").load("/footer.html"); 
});