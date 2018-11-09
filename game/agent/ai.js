class ai extends player{
  constructor(letter, oppenent)
  {
    super(letter);
    this.op = oppenent
    this.grid = document.getElementsByTagName("td");
  }

  makeMove()
  {
    var state =this.gridAsArray();
    var root = new node(this,true, state, null);
    this.genTree(root);
    this.minMax(root);

    var max = 0;
    for(var i = 0; i < root.children.length;i++)
    {
      if(root.children[i].nodeVal > root.children[max].nodeVal)
      {max = i;}
    }

    this.grid[this.compareStates(root, root.children[max])].click();

  }

  compareStates(current, next)
  {
    for(var i = 0; i < this.grid.length;i++)
    {
      if(current.BoardState[i] != next.BoardState[i])
      {
        return i;
      }
    }
    return null;
  }

  minMax(root)
  {
    if(root.children != null){
      for(var child of root.children)
      {
        if(child.children[0].children != null)
        {this.minMax(child);}
        child.nodeVal = this.findVal(child);
      }
    }
    return;
  }

  findVal(child)
  {
    if(child.children[0] != null)
    {this.minMax(child.children[0]);}
    var valHold = child.children[0].nodeVal;
    for(var i =1; i < child.children.length;i++)
    {
      if(child.children[i] != null)
      {this.minMax(child.children[i]);}
      var valGet = child.children[i].nodeVal;
      if(child.minMax)
      {
        if(valGet > valHold)
        {valHold = valGet;}
      }
      else{
        if(valGet < valHold)
        {valHold = valGet;}
      }

    }
    return valHold;
  }

  genTree(root)
  {
    if(root.children == null){
        root.children = this.generateNodes(this,false, root.BoardState);
        this.genTree(root);
      }
      else{
        for(var child of root.children)
        {
          if(child.nodeVal != null)
          {return root;}
          if(child.minMax)
          {child.children =  this.generateNodes(this,false,child.BoardState);}
          else{child.children =  this.generateNodes(this,true, child.BoardState);}
          this.genTree(child);
        }
      }
  }


  generateNodes(player ,minOrMax, originalState)
  {
    var possibleMoves = [];

    for(var i = 0; i < originalState.length;i++)
    {
      if(originalState[i] == "")
      {
        var copy = originalState.slice();
        copy[i] = player.letter;
        possibleMoves.push(new node(player,minOrMax,copy,null))
      }
    }
    return possibleMoves;
  }



  gridAsArray()
  {
    var g = new Array();
    for(var i = 0; i <grid.length;i++)
    {
      g.push(grid[i].innerHTML);
    }
    return g;
  }

}
