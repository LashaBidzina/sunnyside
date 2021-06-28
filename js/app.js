const burger = document.querySelector('.menu');
const header = document.querySelector('header');


burger.addEventListener('click', function(){
    header.classList.toggle('open');
})