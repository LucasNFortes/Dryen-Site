const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 10) {
    header.style.backgroundColor = '#007f78ff';
  } else {
    header.style.backgroundColor = '';
  }
});

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