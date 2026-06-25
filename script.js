const canvas = document.querySelector('.canvas');
let isDrawing = false;
let isBrush = false;
let isEraser = false;

for (let i = 0; i < 16 * 16; i ++){
    const square = document.createElement('div');
    square.classList.add('grid-square');
    canvas.appendChild(square);
    square.addEventListener('mouseenter', ()=> {
        if (isDrawing && isBrush) {
            square.style.backgroundColor = 'black';
        }
    })
    if (isBrush){
    square.addEventListener('mousedown', () => {
        square.style.backgroundColor = 'black';
    })}
}

canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);

const brush = document.querySelector('.brush');
brush.addEventListener('click', toggleBrush
)

function toggleBrush(){
    isBrush = !isBrush;
    if (isBrush){
    brush.style.backgroundColor = 'green';}
    else{
        brush.style.backgroundColor = '#9023dc';
    }
    if (isEraser){
        toggleEraser();
    }
    }

function toggleEraser(){
    isEraser = !isEraser;
    if (isEraser){
    eraser.style.backgroundColor = 'green';}
    else{
        eraser.style.backgroundColor = '#9023dc';
    }
}

const eraser = document.querySelector('.eraser')
eraser.addEventListener('click', toggleEraser)