// =========GLOBALS=========
// init game as player 1's turn
let whosTurn = 1;
// Make an array for both players, and push each new square 
// onto the appropirate array
let player1Squares = [];
let player2Squares = [];

// console.log(this); // window

// console.log("Sanity Check");

// 1. Set up Board --- CHECK!
// 2. User should be able to click on a button -- CHECK
// When the click happens, the square should have 
// that players mark (X or O)
// 3. If it's X's turn put an X in, otherwise, put an O in - CHECK
// 4. In order to accomplish 3, we need to keep track of who's turn it is
// After X goes, it becomes O's turn, and vice versa - CHECK
// 5. Keep other player from taking a square - CHECK
// 6. See if someone won! If so, congrautlate them
// 7. Stop the game if someone won, otherwise let it keep going

// squares is an array with 9 objects in it
// Each element is an HTML button element 
const squares = document.getElementsByClassName('square');
// const squares = document.getElementsByTagName('button');
// console.log(squares)

for(let i = 0; i < squares.length; i++){
    // console.log(squares[i]);
    // now that we have all the squares individually (squares[i]),
    // we can add an event listener to each one
    // to add eventlistener:
    // 1. What to listen to
    // 2. add the method (addEventListener)
    // 3. first arg: what event to listen for
    // 4. second arg: function to run if that even happens
    squares[i].addEventListener('click',function(event){
        // EVERY JS event, will give you the event object
        // console.log(event)
        console.dir(this);
        // Check to see if the square is taken...
        if(this.innerHTML === "-"){
            // it's not taken, so see whos turn it is
            if(whosTurn === 1){
                // its player 1, put an X, and give 
                // control to O
                this.innerHTML = "X"; // Update the DOM
                whosTurn = 2; // Update JS
                // Update the DOM
                document.getElementById('message').innerHTML = "It's O's turn"
                player1Squares.push(this.id)
            }else{
                this.innerHTML = "O";
                whosTurn = 1;
                document.getElementById('message').innerHTML = "It's X's turn"
                player2Squares.push(this.id)
            }
        }else{
            document.getElementById('message').innerHTML = "Sorry, that square is taken"
        }
        console.log(player1Squares)
        console.log(player2Squares)
    })
}
