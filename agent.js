class agent extends player{
  constructor(letter)
  {
    super(letter);
    this.grid = document.getElementsByTagName("td");
  }

  updateBoard()
  {this.grid = document.getElementsByTagName("td");}

  makeMove()
  {
        this.updateBoard;
        var r;
        while(true){
          var random = agent.randomInteger(0,8);
          if(this.grid[random].innerText == "")
          {r = random;break;}
        }
        console.log(r);
        this.grid[r].click();
  }

  static randomInteger(min, max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
