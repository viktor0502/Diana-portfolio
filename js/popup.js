const btnOpen = document.querySelectorAll(`.swiper-slide`),
  popup = document.querySelectorAll(`.popup`),
  btnClose = document.querySelectorAll(`.popup__close`);
btnOpen.forEach(btn => {
  btn.addEventListener(`click`, () => {
    console.log(`click`)
    popup.forEach(p => {
      if (btn.dataset.btnPopup == p.dataset.popup) {
        p.classList.add(`open`);
        document.body.classList.add(`stop-scroll`);
      }
    });
  });
});
function closePopup() {
  for (let p of popup) {
    p.classList.remove(`open`);
    document.body.classList.remove(`stop-scroll`);
  }
}
popup.forEach((p) => {
  p.addEventListener(`click`, (e) => {
    if (e.target === p) {
      closePopup();
    }
  });
});
document.addEventListener(`keydown`, (e) => {
  if (e.code == `Escape`) {
    closePopup();
  }
});
btnClose.forEach((btn) => {
  btn.addEventListener(`click`, closePopup);
});
