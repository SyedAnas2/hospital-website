let menu = document.querySelector('#menu-btn');
let navebar = document.querySelector('.navebar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navebar.classList.toggle('active');
}
window.onScroll = () =>{
    menu.classList.remove('fa-times');
    navebar.classList.remove('active');
}