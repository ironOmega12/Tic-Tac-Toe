let cells = document.querySelectorAll('.cell');
const maxMoves = 9;
let currentPlayer = 'X';
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent.trim()) {
            playerSelection(cell);
            checkWinner();
        }
    });
});

function playerSelection(cell) {
    if (!cell.textContent.trim()) {
        // if (currentPlayer === 'X') {
        //     cell.classList.add('xturn');
        // } else {
        //     cell.classList.add('oturn');
        // }
        // if (currentPlayer === 'X') {
        //     currentPlayer = 'O';
        // } else {
        //     currentPlayer = 'X';
        // }            
        cell.classList.add(currentPlayer === 'X' ? 'xturn' : 'oturn');
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const firstRowCells = Array.from(cells).slice(0, 3);
    if (firstRowCells.every(cell => cell.classList.contains('xturn'))) {
      alert('Player X wins!');
    }
  }
  