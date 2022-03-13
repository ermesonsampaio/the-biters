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

