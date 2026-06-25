const canvas = document.querySelector('.canvas');
let isDrawing = false;
let isBrush = false;
let isEraser = false;
let color = 'black'

for (let i = 0; i < 16 * 16; i ++){
    const square = document.createElement('div');
    square.classList.add('grid-square');
    canvas.appendChild(square);
    square.addEventListener('mouseenter', ()=> {
        if (isDrawing && isBrush) {
            square.style.backgroundColor = color;
            square.style.border = 'none';
        }
    })
    square.addEventListener('mousedown', () => {
        if (isBrush){
        square.style.backgroundColor = color;
        square.style.border = 'none';}
    })
    square.addEventListener('mouseenter', ()=> {
        if (isDrawing && isEraser) {
            square.style.backgroundColor = 'white';
            square.style.border = '2px solid gray';
        }
    })
    square.addEventListener('mousedown', () => {
        if (isEraser){
        square.style.backgroundColor = 'white';
        square.style.border = '2px solid gray';}
    })
}

canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);

const brush = document.querySelector('.brush');
brush.addEventListener('click', toggleBrush)

function toggleBrush(){
    if (isEraser){
        isEraser  = !isEraser
        eraser.style.backgroundColor = '#9023dc'
    }
    isBrush = !isBrush;
    if (isBrush){
    brush.style.backgroundColor = 'green';}
    else{
        brush.style.backgroundColor = '#9023dc';
    }
    }

function toggleEraser(){
    if (isBrush){
        isBrush = !isBrush;
        brush.style.backgroundColor = '#9023dc';
    }
    isEraser = !isEraser;
    if (isEraser){
    eraser.style.backgroundColor = 'green';}
    else{
        eraser.style.backgroundColor = '#9023dc';
    }
}

const eraser = document.querySelector('.eraser')
eraser.addEventListener('click', toggleEraser)

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    squares = document.querySelectorAll('.grid-square');
    for (const square of squares){
        square.style.backgroundColor = 'white';
        square.style.border = '2px solid gray';
    }
})

const color_button = document.querySelector('.color-button');
const color_picker = document.querySelector('.color-picker');

color_button.addEventListener('click', () => {
    color_picker.click()
    if (!isBrush){
        toggleBrush();
    };
})
color_picker.addEventListener('input', () => {
    color = color_picker.value;
    color_button.style.backgroundColor = color;
})