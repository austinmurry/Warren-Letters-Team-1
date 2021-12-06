window.addEventListener('DOMContentLoaded',pageLoadUp,false);

function pageLoadUp(){
   var button = document.getElementById("scrollToTop")
   button.addEventListener('click', scrollToTop, false)
   var inputs = document.getElementsByTagName('input')
   for (var i = 0, length = inputs.length; i < length; i++)
   {
   inputs[i].addEventListener('input', onInput);  
   }
}
function scrollToTop(){
    var scroll = window.scrollTo(0,0);
    window.scrollTo(0,0);
}
