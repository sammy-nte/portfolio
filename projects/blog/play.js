let toggle = document.getElementById('btn')
let box = document.getElementById('box')

function colorValue(){
    return Math.floor(Math.random() * 256)
}

function colorChange(){
    let randomColor = `rgb(${colorValue()}, ${colorValue()}, ${colorValue()}`
    box.style.backgroundColor = randomColor
    document.body.style.backgroundColor  = randomColor
}

toggle.onwheel = colorChange