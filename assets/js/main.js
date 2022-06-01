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

gsap.from('.nav__logo', {opacity: 0, duration:1, delay:1, y:10})
gsap.from('.nav__item', {opacity: 0, duration:1, delay:1.4, y:30, stagger: .2})

gsap.from('.home__title', {opacity: 0, duration:1, delay:1, x:'-100vw' })
gsap.from('.home__description', {opacity: 0, duration:1, delay:1.3, y:30})
gsap.from('.home__button', {opacity: 0, duration:1, delay:1.6, y:30})
gsap.from('.home__img', {opacity: 0, duration:1, delay:1.3, y:30})

