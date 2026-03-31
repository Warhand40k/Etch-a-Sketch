const createGrids = (squares_per_side = 16) => {

    function randomRGB() {
        const red = String(Math.floor(Math.random() * 256));
        const green = String(Math.floor(Math.random() * 256));
        const blue = String(Math.floor(Math.random() * 256));
        return `rgb(${red}, ${green}, ${blue})`;
    }

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

    container.addEventListener('mouseover', (e) => {
        if (!(e.target.id === 'container')) {
            // e.target.style.backgroundColor = randomRGB();
            if (!e.target.style.opacity) {
                e.target.style.opacity = 0.1;
            } else {
                let currentOpacity = +e.target.style.opacity;
                if (currentOpacity <= 1) {
                    currentOpacity += 0.1;
                    e.target.style.opacity = String(currentOpacity);
                }
            }
        }
    });

    // document.querySelector('#toggle-drawing-mode').addEventListener((e) => {
    //     if (e.target.textContent === 'Randomize Colors') {

    //     }
    // });
}

document.querySelector("#new-grid-btn").addEventListener('click', () => {
    const squares_per_side = +prompt("Enter number of squares per side", "16");
    if (squares_per_side <= 100){
        const container = document.querySelector('#container');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createGrids(squares_per_side);
    } else {
        alert("Too much squares!");
    }
})

createGrids();
