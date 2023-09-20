let fields = document.querySelectorAll('.game__field');
let scoreElements = document.querySelectorAll('.game__score span');
let game = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]
let currentPlayer = 'cross';

function clearFields(fields) {
    for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        field.classList.remove('cross', 'zero');
        let row = Math.floor(i / 3);
        let column = i % 3;
        game[row][column]='';
    }

}

for (let i = 0; i < fields.length; i++) {

    let field = fields[i];

    field.addEventListener('click', function () {
        if (field.classList.contains('cross') || field.classList.contains('zero')) {
            return;
        }

        let row = Math.floor(i / 3);
        let column = i % 3;
        game[row][column] = 'X';
        field.classList.add(currentPlayer);
        for (let j = 0; j < game.length; j++) {
            let currentRow = game[j]
            let isEmpty = currentRow[0] === '' || currentRow[1] === '' || currentRow[2] === '';
            let isEqual = currentRow[0] === currentRow[1] && currentRow[1] === currentRow[2];

            if (!isEmpty && isEqual) {
                let playerIndex = currentPlayer === 'cross' ? 0 : 1;
                let playerScore = parseInt(scoreElements[playerIndex].innerText);
                scoreElements[playerIndex].innerText = playerScore + 1;
                clearFields(fields);

            }
        }

        for (let j = 0; j < game.length; j++) {
            let isEmpty = game[0][j] === '' || game[1][j] === '' || game [2][j] === '';
            let isEqual = game[0][j] === game[1][j] && game[1][j] === game[2][j];
            if (!isEmpty && isEqual) {
                let playerIndex = currentPlayer === 'cross' ? 0 : 1;
                let playerScore = parseInt(scoreElements[playerIndex].innerText);
                scoreElements[playerIndex].innerText = playerScore + 1;
                clearFields(fields);

            }
        }

        let isFirstDiagonalEmpty = game[0][j] === '' || game[1][j] === '' || game [2][j] === '';
        let isFirstDiagonalEqual = game[0][j] === game[1][j] && game[1][j] === game[2][j];

        if (!isFirstDiagonalEmpty && isFirstDiagonalEqual) {
            let playerIndex = currentPlayer === 'cross' ? 0 : 1;
            let playerScore = parseInt(scoreElements[playerIndex].innerText);
            scoreElements[playerIndex].innerText = playerScore + 1;
            clearFields(fields);

        }

        if (currentPlayer === 'cross') {
            currentPlayer = 'zero';

        } else {
            currentPlayer = 'cross'


        }
        console.log(game);

    });
}