function CreateBoard() {
    gameBoard.innerHTML = '';
    gameState.dots = 0;

    for(let y = 0;y <config.boardHeight;y++) {
        for(let x = 0;x <config.boardWidth;x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = `cell-${x}-${y}`;
            if(map[y][x] === 1) {
                cell.classList.add('wall');
            } else if (map [y][x] === 0) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                cell.appendChild(dot);
                gameState.dots++;
            }else if (map[y][x] === 2) {
                const powerPellet = document.createElement('div');
                powerPellet.className = 'power-pellet';
                cell.appendChild(powerPellet);
                gameState.dots++;
            }
            gameBoard.appendChild(cell);
        }
    }
}
           function drawpacman() {
            document.querySelectorAll('.pacman').forEach(el => el.remove());
            const pacmanCell = document.getElementById(`cell-${pacman.x}-${pacman.y}`);
            pacmanElement.className = `pacman ${pacman.direction}`;
            pacmanCell.appendChild(pacmanElement);
           }    

           function drawGhosts() {
            document.querySelectorAll('.ghost').forEach(el => el.remove());
            ghosts.forEach(ghost => {
                const ghostCell = document.getElementById(`cell-${ghost.x}-${ghost.y}`);
                ghostElement.className = `ghost ${ghost.color} ${gameState.isScared ? 'scared' : ''}`;
                ghostCell.appendChild(ghostElement);
            });
           }

           function updateScore() {
            scoreElement.textContent = gameState.score;
              }
              function updateLives() {
                livesElement.textContent = gameState.lives;
                }
