const createGrid = (squares_per_side = 16) => {

    const container = document.querySelector('#container');
    for(let i = 0; i < squares_per_side; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        for(let j = 0; j < squares_per_side; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
}

const progressiveDarkening = (e) => {
    if (!e.target.style.opacity) {
        e.target.style.opacity = 0.1;
    } else {
        let currentOpacity = +e.target.style.opacity;
        if (currentOpacity < 1) {
            currentOpacity += 0.1;
            e.target.style.opacity = String(currentOpacity);
        }
    } 
}

const randomRGB = (e) => {
    const red = String(Math.floor(Math.random() * 256));
    const green = String(Math.floor(Math.random() * 256));
    const blue = String(Math.floor(Math.random() * 256));
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

document.querySelector("#container").addEventListener('mouseover', (e) => {
    if (!(e.target.id === 'container')) {
        randomRGB(e);
        progressiveDarkening(e);
    }
});

const removeGrid = () => {
    const container = document.querySelector('#container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

document.querySelector("header div button").addEventListener('click', () => {
    const squares_per_side = +prompt("Enter number of squares per side", "16");
    if (squares_per_side || squares_per_side === 0){
        removeGrid();
        if (squares_per_side < 1 || squares_per_side > 100) {
            alert("Choose a number between 1 to 100");
            createGrid();
        } else {
            createGrid(squares_per_side);
        }
    }
});

createGrid();
