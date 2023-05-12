let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navmenu');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}



const sliderImages = document.querySelector(".slider-images");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");
