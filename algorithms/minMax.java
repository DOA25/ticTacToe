import java.lang.*;

class minMax{

  public static void main(String[] args) {
    node player = new nodeChild(true, null, null);
    node [] opl1 = new nodeChild[(int)Math.pow(2,1)];
    int [] finalNum = {3,2,5,7,-14,-4,-19,-17};
    opl1 = initNodes(opl1, false);
    node [] pl2 = new nodeChild[(int)Math.pow(2,2)];
    pl2 = initNodes(pl2, true);
    node [] finalC = new childFinal[(int)Math.pow(2,3)];
    initFinal(finalC, finalNum);
    linkChildren(player,opl1);
    createLinks(opl1,pl2);
    createLinks(pl2,finalC);
    findMinMaxLeft(player.child1);
    findMinMaxRight(player.child2);
    findMinMaxLeft(player.child2);
    findMinMaxRight(player.child1);
    minMax(player.child1);
    minMax(player.child2);
    minMax(player);
    System.out.println(player.value);

  }

  public static void minMax(node p)
  {
    nodeChild c1 = (nodeChild) p.child1;
    nodeChild c2 = (nodeChild) p.child2;
    if(c1.minMax && c2.minMax)
    {
        if(p.child1.value > p.child2.value)
        {
          p.value = c1.value;
        }
        else{p.value = c2.value;}
    }
    else
    {
      if(c1.value < c2.value)
      {
        p.value = c1.value;
      }
      else{p.value = c2.value;}

    }
  }

  public static void findMinMaxRight(node n)
  {
    if(n.child2 instanceof childFinal)
    {
      findValue(n);
    }
    else{findMinMaxRight(n.child2);}
  }

  public static void findValue(node x)
  {
      nodeChild n = (nodeChild) x;
      if(n.minMax && n.child1.value > n.child2.value)
      {
        x.value = n.child1.value;
      }
      else if(n.minMax && n.child1.value < n.child2.value)
      {x.value = n.child2.value;}
      else{
        if(!n.minMax && n.child1.value < n.child2.value)
        {x.value = n.child1.value;}
        else{x.value = n.child2.value;}
  }
}

  public static void findMinMaxLeft(node n)
  {
    if(n.child2 instanceof childFinal)
    {
      findValue(n);
    }
    else{findMinMaxLeft(n.child1);}

  }

  public static void createLinks(node [] father, node [] child)
  {
    int x = 0;
    for(int i = 0; i < father.length; i++)
    {
      node [] c = {child[x], child[x+1]};
      linkChildren(father[i], c);
      x = x+2;
    }
  }

  public static void linkChildren(node child, node [] childern)
  {
      child.child1 = childern[0];
      child.child2 = childern[1];

  }

  public static node [] initFinal(node[] x, int [] y)
  {
    for(int i = 0; i < x.length; i++)
    {
      x[i] = new childFinal(y[i]);
    }
    return x;
  }

  public static node[] initNodes(node[] nodes, boolean minMax)
  {
    for(int i = 0; i < nodes.length;i++)
    {nodes[i] = new nodeChild(minMax,null, null);}
    return nodes;
  }
}
