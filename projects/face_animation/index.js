smiley = document.querySelector(".smily-face");
sad = document.querySelector(".sad-face");
suprised = document.querySelector(".suprised-face");
smileyImage = document.getElementById("smiley-img");
suprisedImage = document.getElementById("suprised-img");
sadImage = document.getElementById("sad-img");
color1 = document.getElementById("color1");
color2 = document.getElementById("color2");
color3 = document.getElementById("color3");
facesContainer = document.getElementById("faces");
smilyFace = document.getElementById("smily-face");
suprisedFace = document.getElementById("suprised-face");
sadFace = document.getElementById("sad-face");
faceColor1 = document.getElementById("face-color1");
faceColor2 = document.getElementById("face-color2");
faceColor3 = document.getElementById("face-color3");

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

smileyImage.onclick = smileShow;
suprisedImage.onclick = suprisedShow;
sadImage.onclick = sadShow;
color1.onclick = colorChange1;
color2.onclick = colorChange2;
color3.onclick = colorChange3;
faceColor1.onclick = faceColorChange1;
faceColor2.onclick = faceColorChange2;
faceColor3.onclick = faceColorChange3;