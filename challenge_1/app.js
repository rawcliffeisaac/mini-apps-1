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
      handlers.handleGameProceeds(boxClickEvent.toElement.id)
    }
  },
  handleGameProceeds: (boxIndex) => {
    if (gameState.nextToMove === 'X') {
      gameState.currentBoard[boxIndex] = 'X'
      gameState.nextToMove = 'O'
    } else {
      gameState.currentBoard[boxIndex] = 'O'
      gameState.nextToMove = 'X'
    }
    console.log(gameState.currentBoard)
  }
}

console.log(document.querySelectorAll('.box'))

document.querySelectorAll('.box')
  .forEach( box =>
    box.addEventListener('click', handlers.handleBoxClick)
  );