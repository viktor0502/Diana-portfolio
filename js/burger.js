const burger = document.querySelector(`.burger-btn`),
  navMenu = document.querySelector(`.navbar-menu-wrapper`),
  link = document.querySelectorAll(`.nav-link`);


const scrollLock = () => {
    document.body.classList.add(`stop-scroll`);
  },
  scrollUnclock = () => {
    document.body.classList.remove(`stop-scroll`);
  },
  menuOpen = () => {
    navMenu.classList.add(`active`);
    scrollLock();
  },
  menuClose = () => {
    navMenu.classList.remove(`active`);
    scrollUnclock()
  };

burger.addEventListener(`click`, () => {
  burger.classList.toggle(`active`);
  if (burger.classList.contains(`active`)) {
    menuOpen();
  } else {
    menuClose();
  }
});
link.forEach(i =>{
  i.addEventListener(`click`, ()=>{
    burger.classList.remove(`active`);
    menuClose()
  })
})