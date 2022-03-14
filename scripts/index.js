const menuItems = document.querySelectorAll('a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    
    const id = event.target.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
      top: to - 50,
      behavior: 'smooth',
    });
  });
});

const toTopButton = document.querySelector('.scroll-to-top');
const title = document.querySelector('#services-title'); 

document.addEventListener('scroll', () => {
  if (title.getBoundingClientRect().top < window.innerHeight) {
    toTopButton.removeAttribute('hide');
    toTopButton.setAttribute('show', 'true');
  } else {
    toTopButton.removeAttribute('show');
    toTopButton.setAttribute('hide', 'true');
  }
});

toTopButton.addEventListener('click', scrollTo);

const splide = new Splide('.splide', {
  type: 'loop',
  width: '80%',
  padding: '10rem',
  arrows: false,
});

splide.mount();
