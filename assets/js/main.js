const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {

  navMenu.classList.add('show--menu');

});

navClose.addEventListener('click', () => {

  navMenu.classList.remove('show--menu');

});

document.addEventListener('mousemove', moveEffect);

function moveEffect(e) {
  this.querySelectorAll('.move').forEach(element => {
    const speed = element.getAttribute('data-speed');

    console.log(element)

    const x = (window.innerWidth - e.pageX * speed) / 120
    const y = (window.innerHeight - e.pageY * speed) / 120

    element.style.transform = `translateX(${x}px) translateY(${y}px)`
  });
}
