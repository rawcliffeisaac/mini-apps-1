console.log('inside the app!')


let gameState = {
  nextToMove: 'X',
  currentBoard: [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ]
}

let handlers = {
  handleBoxClick: (boxClickEvent) => {
    if (gameState.currentBoard[boxClickEvent.toElement.id] === 0) {
      handlers.updateUserView(boxClickEvent.target);
      handlers.handleGameProceeds(boxClickEvent.toElement.id);
    }
  },
  handleGameProceeds: (boxIndex) => {
    if (gameState.nextToMove === 'X') {
      gameState.currentBoard[boxIndex] = 'X';
      gameState.nextToMove = 'O';
    } else {
      gameState.currentBoard[boxIndex] = 'O';
      gameState.nextToMove = 'X';
    }
    handlers.checkForWinners();
  },
  checkForWinners: () => {
    const winningBoards = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    console.log(gameState.currentBoard)
    let victory = false;
    for (let i = 0; i < 8; i++) {
      const winCondition = winningBoards[i];
      let x = gameState.currentBoard[winCondition[0]];
      let y = gameState.currentBoard[winCondition[1]];
      let z = gameState.currentBoard[winCondition[2]];
      if (x === 0 || y === 0 || z === 0) {
          continue;
      }
      if (x === y && x === z) {
          victory = true;
          break
      }
    }
    if(victory) {
      console.log('a winner')
    }
  },
  updateUserView: (clickedDiv) => {
    clickedDiv.innerHTML = gameState.nextToMove;
  }
}

console.log(document.querySelectorAll('.box'))

document.querySelectorAll('.box')
  .forEach( box =>
    box.addEventListener('click', handlers.handleBoxClick)
  );