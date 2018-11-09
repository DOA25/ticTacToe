 winningRows =[
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,4,8],
  [2,4,6],

  [0,3,6],
  [1,4,7],
  [2,5,8]
];

var isWinner = false;
var grid = document.getElementsByTagName("td");
var player1 = new player("X");
var player2 = new ai("O", player1);
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

function isPlayerWinner()
{
  for(var x = 0; x < winningRows.length; x++)
  {
    isWinner = true;
    for(var y = 0; y < winningRows[x].length; y++)
    {
      if(grid[winningRows[x][y]].innerHTML != turn.letter)
      {
        isWinner = false;
        break;
      }
    }
    if(isWinner)
    {return isWinner;}
  }
}

function isDraw()
{
  for(var i = 0; i < grid.length; i++)
  {if(grid[i].innerHTML == ""){return false;}}
  return true;
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
  if(this.innerHTML == "")
  {
    this.innerHTML = turn.letter;
    if(isPlayerWinner())
    {Winner(turn);return;}
    this.removeEventListener("click", makeMove)
    if(isDraw())
    {console.log("Game Draw"); return;}
    if(turn == player1)
    {
      turn = player2;
      turn.makeMove();
    }
    else{turn = player1;}
  }
}
