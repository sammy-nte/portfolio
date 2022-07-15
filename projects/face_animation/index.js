const smiley = document.querySelector(".smily-face");
const sad = document.querySelector(".sad-face");
const suprised = document.querySelector(".suprised-face");
const smileyImage = document.getElementById("smiley-img");
const suprisedImage = document.getElementById("suprised-img");
const sadImage = document.getElementById("sad-img");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const facesContainer = document.getElementById("faces");
const smilyFace = document.getElementById("smily-face");
const suprisedFace = document.getElementById("suprised-face");
const sadFace = document.getElementById("sad-face");
const faceColor1 = document.getElementById("face-color1");
const faceColor2 = document.getElementById("face-color2");
const faceColor3 = document.getElementById("face-color3");
const input1 = document.querySelector('#background-change')
const input2 = document.querySelector('#face-color-change')

function smileShow(){
    smiley.style.display = 'block';
    sad.style.display = 'none';
    suprised.style.display = 'none';
}

function suprisedShow(){
    smiley.style.display = 'none';
    sad.style.display = 'none';
    suprised.style.display = 'block';
}

function sadShow(){
    smiley.style.display = 'none';
    sad.style.display = 'block';
    suprised.style.display = 'none';
}

function colorChange1(){
    facesContainer.style.background = 'red';
}

function colorChange2(){
    facesContainer.style.background = 'rgba(50, 126, 116, 0.829)';
}

function colorChange3(){
    facesContainer.style.background = 'rgb(151, 161, 60)';
}

function faceColorChange1(){
    smilyFace.style.background = 'rgb(206, 31, 69)';
    suprisedFace.style.background = 'rgb(206, 31, 69)';
    sadFace.style.background = 'rgb(206, 31, 69)';
}

function faceColorChange2(){
    smilyFace.style.background = 'rgb(42, 156, 61)';
    suprisedFace.style.background = 'rgb(42, 156, 61)';
    sadFace.style.background = 'rgb(42, 156, 61)';
}

function faceColorChange3(){
    smilyFace.style.background = 'rgb(107, 106, 42)';
    suprisedFace.style.background = 'rgb(107, 106, 42)';
    sadFace.style.background = 'rgb(107, 106, 42)';
}

input1.addEventListener('keyup', e =>{
    const text = e.target.value
    facesContainer.style.background = text;
})

input2.addEventListener('keyup', e =>{
    const text = e.target.value
    smilyFace.style.background = text;
    suprisedFace.style.background = text;
    sadFace.style.background = text;
})

smileyImage.onclick = smileShow;
suprisedImage.onclick = suprisedShow;
sadImage.onclick = sadShow;
color1.onclick = colorChange1;
color2.onclick = colorChange2;
color3.onclick = colorChange3;
faceColor1.onclick = faceColorChange1;
faceColor2.onclick = faceColorChange2;
faceColor3.onclick = faceColorChange3;