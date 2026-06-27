const canvas = document.querySelector('.canvas');
let isDrawing = false;
let isBrush = false;
let isEraser = false;
let color = 'black'

let canvasSize = 16;
// in number of squares per row
// length of grid box, in pixels

const canvasLength = 550;
canvas.style.height = String(canvasLength) + 'px';
canvas.style.width = String(canvasLength) + 'px';

// canvasLength in px = canvasSize * gridSize

function renderGrid(canvasSize){
    canvas.innerHTML= '';
    const gridSize = canvasLength / canvasSize;
for (let i = 0; i < canvasSize * canvasSize; i ++){
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.height = String(gridSize) + 'px';
    square.style.width = String(gridSize) + 'px';
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
}}

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

renderGrid(canvasSize)

const sizeButton = document.querySelector('.size')
sizeButton.addEventListener('click', () => {
    let input = prompt('Enter canvas size (in units) between 1-100: ');
    if(Number.isInteger(Number(input)) && Number(input) >= 1 && Number(input) <= 100){
        canvasSize = Number(input);
        renderGrid(canvasSize);
    }
    else{
        alert('Please enter a valid number!');
    }
})