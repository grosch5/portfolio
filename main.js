const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    nav.classList.add('shrink');
  } else {
    nav.classList.remove('shrink');
  }
});
