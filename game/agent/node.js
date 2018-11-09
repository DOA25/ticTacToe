class node{

  constructor(player, minMax, BoardState, children)
  {
    this.BoardState = BoardState;
    this.player = player;
    this.nodeVal = this.genState();
    this.minMax = minMax;
    this.children = children

  }

  genState(op)
  {
    var winning =[
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,4,8],
        [2,4,6],

        [0,3,6],
        [1,4,7],
        [2,5,8]
      ];
      if(this.isWinner(winning, true))
      {return -1;}
      if(this.isDraw())
      {return 0;}
        if(this.isWinner(winning,false))
        {return 1;}

      return null;
  }

  isDraw()
  {
    for(var i = 0; i < grid.length; i++)
    {if(this.BoardState[i] == ""){return false;}}
    return true;
  }


  isWinner(winning, whatPlayer)
  {
      if(whatPlayer)
      {var letter = this.player.letter}
      else{if(this.player.letter == "X"){letter = "0";}else{letter = "X"}}

      for(var x = 0; x < winning.length; x++)
      {
        isWinner = true;
        for(var y = 0; y < winning[x].length; y++)
        {
            if(this.BoardState[winning[x][y]] != letter)
            {
              isWinner = false;
              break;
            }

        }
        if(isWinner)
        {return isWinner;}
      }
  }

}
