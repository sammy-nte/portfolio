let uiSection =  document.getElementById('ui-feed');
let uxSection =  document.getElementById('ux-feed');
let developmentSection =  document.getElementById('development-feed');
let webSection =  document.getElementById('web-feed');
let uiToggle = document.getElementById('ui-toggle');
let uxToggle = document.getElementById('ux-toggle');
let developmentToggle = document.getElementById('development-toggle');
let webToggle =document.getElementById('web-toggle');
let nightModeBtn = document.getElementById('night-mode-toggle');
let day = document.getElementById('normal');
let feed = document.querySelector('.feed')
let color = document.querySelector('.colorTest')

// document.getElementById('figma-container').onmouseover = function (){
//     document.querySelector('.feed').style.backgroundImage = "url('./images/figma.png')"
//     document.querySelector('.banner').style.transition = 'all 3s ease'
// }

// document.getElementById('figma-container').onmouseout = function (){
//     document.querySelector('.banner').style.backgroundImage = "none "
// }

let container = document.querySelectorAll('.post-container')


function ui(){
    uxSection.style.display = 'none';
    developmentSection.style.display = 'none';
    webSection.style.display = 'none';
    uiSection.style.display = 'block';
    uiToggle.style.borderBottom = '2px solid orange';
    // uiToggle.style.transition = 'border 750ms linear';
    webToggle.style.borderBottom = 'none';
    developmentToggle.style.borderBottom = 'none';
    uxToggle.style.borderBottom = 'none';
};

function ux(){
    uiSection.style.display = 'none';
    developmentSection.style.display = 'none';
    webSection.style.display = 'none';
    uxSection.style.display = 'block';
    uxToggle.style.borderBottom = '2px solid orange';
    webToggle.style.borderBottom = 'none';
    uiToggle.style.borderBottom = 'none';
    developmentToggle.style.borderBottom = 'none';
};

function development(){
    uxSection.style.display = 'none';
    uiSection.style.display = 'none';
    webSection.style.display = 'none';
    developmentSection.style.display = 'block';
    developmentToggle.style.borderBottom = '2px solid orange';
    webToggle.style.borderBottom = 'none';
    uiToggle.style.borderBottom = 'none';
    uxToggle.style.borderBottom = 'none';
};

function web(){
    uxSection.style.display = 'none';
    developmentSection.style.display = 'none';
    uiSection.style.display = 'none';
    webSection.style.display = 'block';
    webToggle.style.borderBottom = '2px solid orange';
    uiToggle.style.borderBottom = 'none';
    developmentToggle.style.borderBottom = 'none';
    uxToggle.style.borderBottom = 'none';
};

uiToggle.onclick = ui;
uxToggle.onclick = ux;
developmentToggle.onclick = development;
webToggle.onclick = web;


function nightMode(){
    document.body.style.backgroundColor = 'rgba(3, 3, 3, 0.719)';
    document.body.style.color = 'white';
}

function normal(){
    document.body.style.backgroundColor = ''
}

nightModeBtn.onclick = nightMode;
day.onclick = normal

function colorValue(){
    return Math.floor(Math.random() *256 )
}


// function colorChange(){
//     let randomColor = `rgb( ${colorValue()}, ${colorValue()}, ${colorValue()})`
//     color.style.backgroundColor = randomColor;
// }

// day.onclick = colorChange

