const { act } = require("react");

 function checkDotCollision(){
    const cell = document.getElementById('cell.${pacman.x}-${pacman.y}');

    const dot = cell.querySelector('.dot');
    if(dot){
        dot.remove();
        gameState.score +=10;
        gameState.dots--;
        updateScore();
        
    }
    const powerPellet = cell.querySelector('.power-pellet');
    if(powerPellet){
        powerPellet.remove();
        gameState.score +=50;
        gameState.dots--;
        updateScore();
        activateScareMode();
    }
}  

function checkGhostCollision(){
    for (const ghost of ghosts){
        if(pacman.x === ghost.x && pacman.y === ghost.y){
            resetGhosts(ghost);
            gameState.score +=200;
            updateScore();
        }else{
           loseLife();
        }        
break
    }
}
   function resetGhosts(ghost){
    ghost.x = 15;
    ghost.y = 9;
   }    

   function loseLife(){
    gameState.lives--;
    updateLives();

    if(gameState.lives <=0){
        gameOver();
    }else{
        resetPositions();
    }
   }
   function resetPositions(){
    pacman.x = 15;
    pacman.y = 15;
    pacman.direction = 'right';
    pacman.nextDirection = 'right';

    ghosts[0] = { name: 'Blinky', x: 14, y: 7, direction: 'left', color: 'red' };
    ghosts[1] = { name: 'Pinky', x: 15, y: 9, direction: 'up', color: 'pink' };
    ghosts[2] = { name: 'Inky', x: 16, y: 9, direction: 'down', color: 'cyan' };
    ghosts[3] = { name: 'Clyde', x: 17, y: 9, direction: 'right', color: 'orange' };

    drawpacman();
    drawGhosts();
   }

   function gameOver(){
    gameState.isRunning = false;
    finalScoreElement.textContent = gameState.score;
    gameOverScreen.style.display = 'block';

   }
   function wingame(){
    gameState.isRuning = false;
    winScoreElement.textContent = gameState.score;
    gameWonScreen.style.display = 'block';
   }
    function movePacman(){
        gameState.score = 0;
        gameState.lives = 3;
        gameState.isRuning = false;
        gameState.isScared = false;
       
        if(gameState.scareTimer){
            clearTimeout (gameState.scareTimer);
    }
        updateScore();
        updateLives();
        resetPositions();
        CreateBoard();

        gameOverScreen.style.display = 'none';
        gameWonScreen.style.display = 'none';
}

    function activateScareMode(){
        gameState.isScared = true;
        drawGhosts();
        if(gameState.scareTimer){
            clearTimeout(gameState.scareTimer);
        }
        gameState.scareTimer = setTimeout(() => {
        drawGhosts();
        }, config.scareTime);
    };
     
