const header = document.querySelector('header');

window.addEventListener('load', function() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 10) {
        header.style.backgroundColor = '#007f78ff';
      } else {
        header.style.backgroundColor = '';
      }
    });
  });



function smoothScroll(target, duration, padding = '0px') {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.offsetTop + parseInt(padding);
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
  

const menu1 = document.querySelector('.menu1').addEventListener('click', function() {
  smoothScroll('#home', 1000, '-200px)');
});
const menu2 = document.querySelector('.menu2').addEventListener('click', function() {
  smoothScroll('#education', 1000, '-100px)');
});
const menu3 = document.querySelector('.menu3').addEventListener('click', function() {
  smoothScroll('#professional-skills', 1000, '-50px)');
});
const menu4 = document.querySelector('.menu4').addEventListener('click', function() {
  smoothScroll('#references', 1000, '-50px)');
});
const menu5 = document.querySelector('.menu5').addEventListener('click', function() {
  smoothScroll('#additional', 1000, '0px)');
});
const menu6 = document.querySelector('.menu6').addEventListener('click', function() {
  smoothScroll('#contact', 1000, '0px)');
});