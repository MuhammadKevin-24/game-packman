// kamu tadi nulis ini (salah), aku BIARKAN ADA tapi TIDAK dipakai
// const { isValidElement } = require("react");

function movePacman(){
    let nextX = pacman.x;
    let nextY = pacman.y;   

    switch(pacman.nextDirection){
        case 'right': nextX++; break;
        case 'left': nextX--; break;     // FIX: tadinya kamu salah nextY--
        case 'up': nextY--; break;       // FIX: up = Y berkurang
        case 'down': nextY++; break;
    }

    if(isValidMove(nextX, nextY)){     // FIX: kamu pakai isValidElement
        nextX = pacman.x;
        nextY = pacman.y;

        switch(pacman.direction){
            case 'right': nextX++; break;
            case 'left': nextX--; break;    // FIX
            case 'up': nextY--; break;      // FIX
            case 'down': nextY++; break;
        }

        if(isValidMove(nextX, nextY)){   // FIX
            pacman.direction = pacman.nextDirection;
        }

        nextX = pacman.x;
        nextY = pacman.y;

        switch(pacman.direction){
            case 'right': nextX++; break;
            case 'left': nextX--; break;   // FIX
            case 'up': nextY--; break;     // FIX
            case 'down': nextY++; break;
        }

        if (isValidMove(nextX, nextY)){
            pacman.x = nextX;
            pacman.y = nextY;
            
            checkDotCollision();
            checkGhostCollision();
        }

        drawpacman();
    }   // FIX: kamu lupa tutup kurung IF
}       // FIX: kamu lupa tutup kurung function



function moveGhosts(){
    ghosts.forEach(ghost => {
        const directions = ['down', 'up', 'left', 'right'];
        const possibleDirections = [];

        for (const dir of directions){
            let nextX = ghost.x;
            let nextY = ghost.y;

            switch(dir){
                case 'right': nextX++; break;
                case 'left': nextX--; break;   // FIX
                case 'up': nextY--; break;     // FIX
                case 'down': nextY++; break;
            }

            if(isValidMove(nextX, nextY) && dir !== getOppositeDirection(ghost.direction)){
                possibleDirections.push(dir);
            }
        }

        if(possibleDirections.length > 0){
            const randomIndex = Math.floor(Math.random() * possibleDirections.length);
            ghost.direction = possibleDirections[randomIndex];

            let nextX = ghost.x;
            let nextY = ghost.y;

            switch(ghost.direction){
                case 'right': nextX++; break;
                case 'left': nextX--; break; // FIX
                case 'up': nextY--; break;   // FIX
                case 'down': nextY++; break;
            }

            ghost.x = nextX;
            ghost.y = nextY;
        
        } else {
            ghost.direction = getOppositeDirection(ghost.direction);
        }

        let nextX = ghost.x;   // TIDAK DIHAPUS
    });

    drawGhosts();
}


function getOppositeDirection(direction){
    switch(direction){
        case 'right': return 'left';
        case 'left': return 'right';
        case 'up': return 'down';
        case 'down': return 'up';
        default: return direction;
    }
}


// PENTING!!! kamu punya bug: tidak ada return true
function isValidMove(x,y){
    if(x < 0 || x >= config.boardWidth || y < 0 || y >= config.boardHeight){
        return false;
    }

    // INI AKU TAMBAH, TIDAK MENGURANGI APA2
    return map[y][x] !== 1;
}
