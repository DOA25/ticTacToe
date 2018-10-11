class player{
  constructor(letter)
  {
    this.letter = letter;
    this.winner = false;
  }
}


var winningRows =[
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,4,8],
  [2,4,6],

  [0,3,6],
  [1,4,7],
  [2,5,8]
];


var grid = document.getElementsByTagName("td");
var player1 = new player("X");
var player2 = new player("O");
var turn = player1;
setup();


function Winner(player)
{
  if(player == player1)
  {
    console.log("Player 1 is the winner");
  }
  else{console.log("Player 2 is winner");}

  for(var i = 0; i < grid.length; i++)
  {
    grid[i].removeEventListener("click", makeMove);
  }
}

function isPlayerWinner(player)
{
  var isWinner = false;
  for(var x = 0; x < winningRows.length; x++)
  {
    isWinner = true;
    for(var y = 0; y < winningRows[x].length; y++)
    {
      if(grid[winningRows[x][y]].innerText != player.letter)
      {
        isWinner = false;
        break;
      }
    }
    if(isWinner)
    {Winner(player);}
  }
}


function setup()
{
    for(var i = 0; i < grid.length; i++)
    {
      grid[i].addEventListener("click", makeMove);
    }
}

function makeMove()
{
  if(this.innerText == "")
  {
    this.innerHTML = turn.letter;
    this.removeEventListener("click", makeMove)
    isPlayerWinner(turn);
    if(turn == player1)
    {
      turn = player2;
    }
    else{turn = player1;}
  }
}
