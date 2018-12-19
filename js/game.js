let player = 1;
let moveCount = 0;

const boardMsg = function(X) {
    return $("#board").text(X);
}
$('.square').on('click', function(event) {
    let squareSelected = $(this);
    if (squareSelected.hasClass('X') || squareSelected.hasClass('Y')) {
        boardMsg("Please select another box.");
    } else {
        if (player === 1) {
            squareSelected.addClass('X');
            squareSelected.text('X');
            if (winnerCheck('X')) {
                boardMsg("Congrats! Player " + player + " has won.");
            }
            player = 2;
        } else {
            squareSelected.addClass('Y');
            squareSelected.text('Y');
            if (winnerCheck('Y')) {
                boardMsg("Congrats! Player " + player + " has won.");
            }
            player = 1;
        }
    }
});
const winnerCheck = function(symbol) {
    moveCount++;
    if ($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
        return true;
    } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
        return true;
    } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
        return true;
    } else if ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
        return true;
    } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
        return true;
    } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
        return true;
    } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
        return true;
    } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
        return true;
    } else if (moveCount >= 9) {
        boardMsg("Match Drawn");
        return false;
    } else {
        return false;
    }

};