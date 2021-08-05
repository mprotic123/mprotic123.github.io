const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

function myFunction() {
  var x = document.getElementById("menu2");
  if(menu_btn.classList.contains('is-active') && mobile_menu.classList.contains('is-active')){
    document.getElementById("ham2").className = "hamburger";
    document.getElementById("menu2").className = "mobile-nav";
  }

  else
  {
    x.style.display = "block";
  }
}