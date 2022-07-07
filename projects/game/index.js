let button = document.querySelector('.hello');
let grass = document.querySelector('.grass');
let car = document.querySelector('.white-car');

function bgChange(){
    grass.style.backgroundColor = 'orange';
    car.style.margin = "0 0 30px 0";
};

button.onclick = bgChange;
