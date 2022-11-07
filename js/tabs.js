// const currTab = document.querySelector(`.currtab`),
//   tabBtns = document.querySelector(`.tabs-wrapper`),
//   tabItems = document.querySelectorAll(`.tab-btn`),
//   contents = document.querySelectorAll(`.swiper`);

//   function hideContent () {
//       contents.forEach(item =>{
//           item.classList.remove(`active`)
//       })
//       tabItems.forEach(item =>{
//           item.classList.remove(`active`)
//       })
  
//   }
//   function showContent(i = 0){
//       contents[i].classList.add(`active`)
//       tabItems[i].classList.add(`active`)
  
//   }
//   hideContent()
//   showContent()
//   tabBtns.addEventListener(`click`, (e)=>{
//       const target = e.target;
//       if(target && target.classList.contains(`tab-btn`)){
//           tabItems.forEach((item, i)=>{
//               if(target == item){
//                   hideContent();
//                   showContent(i)
//               }
//           })
//       }
//   })
//   currTab.addEventListener(`click`, ()=>{
//       tabBtns.classList.toggle(`active`)
//       tabBtns.addEventListener(`click`, (e)=>{
//           const target = e.target;
//           if(target && target.classList.contains(`tab-btn`)){
//               tabItems.forEach((item, i)=>{
//                   if(target == item){
//                       hideContent();
//                       showContent(i)
//                   }
//               })
//               currTab.textContent = target.textContent
//               tabBtns.classList.remove(`active`)
//           }
//       })
//   })
