const tabs = document.getElementById('tabs');



const changeClass = el =>{
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active')
}
tabs.addEventListener('click', e =>{
    const currTab = e.target.dataset.btn
    changeClass(e.target)
    for (let o = 0; o < content.length; o++) {
        content[o].classList.remove('active');
        if(content[o].dataset.content === currTab){
            content[o].classList.add('active')
        }
    }
})