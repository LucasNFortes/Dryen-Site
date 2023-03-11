document.getElementById("year").innerHTML = new Date().getFullYear();

const navigation =
  document.querySelector(".primary-navigation");
  
const navigationHeight =
  navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);




/*----------------------------------corrigir--------------------------------------*/
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 10) {
    header.style.backgroundColor = '#007f78ff';
  } else {
    header.style.backgroundColor = '';
  }
});