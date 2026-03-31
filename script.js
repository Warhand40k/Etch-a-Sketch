const createGrids = () => {
    const container = document.querySelector('div');
    for(let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        for(let j = 0; j < 16; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
    container.addEventListener('mouseover', (e) => {
        if (!(e.target.id === 'container')) {
            e.target.classList.add('hover-effect');
        }
    });
    container.addEventListener('mouseout', (e) => {
        if (!(e.target.id === 'container')) {
            e.target.classList.remove('hover-effect');
        }
    });
}

createGrids();
