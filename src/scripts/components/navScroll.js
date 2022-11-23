window.onscroll = function changeClass(){
  let navbar = document.getElementById('navbar');
  let scrollPos = window.pageYOffset | document.body.scrollTop;
  
  if(scrollPos > 50) {
          navbar.classList.add('navbar--scrolled');
     } else if(scrollPos <= 100) {
          navbar.classList.remove('navbar--scrolled');
     }
  
 }