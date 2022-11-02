const btnClose = document.querySelectorAll(`.close-icon`);
const portfolioItem = document.querySelectorAll(`.portfolio-item`);
const popups = document.querySelectorAll(`.popup`);
const body = document.getElementsByTagName(`body`);
// popups.forEach((p) => {
// portfolioItem.forEach((e) => {
//   e.addEventListener(`click`, () => {
//       if (e.dataset.btn == p.dataset.popup) {
//         p.classList.add(`open`);
//         console.log(p)
//       }
//     });
//   });
// });
// body.classList.add(`stop-scroll`)

portfolioItem.forEach((i) => {
  popups.forEach((p) => {
    i.addEventListener(`click`, () => {
      if (i.dataset.btn === p.dataset.popup) {
        p.classList.add(`open`);
        body[0].classList.add(`stop-scroll`);
      }
    });
  });
});

popups.forEach((p) => {
  p.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`popup__body`)) {
      closePopup();
    }
  });
});

const closePopup = () => {
  popups.forEach((p) => {
    body[0].classList.remove(`stop-scroll`);
    p.classList.remove(`open`);
  });
};

btnClose.forEach((btn) => {
  btn.addEventListener(`click`, closePopup);
});
