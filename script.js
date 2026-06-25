const canvas = document.querySelector('.canvas');

for (let i = 0; i < 16 * 16; i ++){
    const square = document.createElement('div');
    square.classList.add('grid-square');
    canvas.appendChild(square);
}