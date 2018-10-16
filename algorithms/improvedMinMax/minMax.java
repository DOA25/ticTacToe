import java.util.ArrayList;


class minMax{
  public static void main(String[] args) {
    node startPlayer = returnStart();
    int [] finalValue = {5,8,3,-2,8,-5,3,-7};

    ArrayList<node> l1 = createChildren(2, false);
    ArrayList<node> l2 = createChildren(4, true);
    ArrayList<node> finalChildren = createFinalChild(finalValue);
    
    detLinks(startPlayer, l1);
    detLinks(l1,l2,2);
    detLinks(l2, finalChildren, 2);
    
    
   minMax(startPlayer);
   System.out.println(startPlayer.value);

  }

  public static void minMax(node startPlayer)
  {    
         for(node child : startPlayer.children)
         {     
            if(!child.children.get(0).children.isEmpty())
             { minMax(child);}
              child.value = findValue(child);
              
         }
         startPlayer.value = findValue(startPlayer); 
	  
  }
  
  public static int findValue(node child)
  {
    int valHold = child.children.get(0).value;
    for(int i = 1; i < child.children.size(); i++)
    {
    	int getVal = child.children.get(i).value;
        if(child.minOrMax)
        {
            if(getVal > valHold)
            {valHold = getVal;}
        }
        else{
            if(getVal < valHold)
            {valHold = getVal;}
        }
    }
    return valHold;
   }

 public static void detLinks(node parent, ArrayList<node> children)
  {
    for(int i = 0; i < children.size();i++)
    {
        linkChildren(parent, children.get(i));
    }
  }
  
  public static void detLinks(ArrayList<node> parents, ArrayList<node> children, int nOfLinksForParent)
  {
    int n = 0;
    for(int i = 0; i < parents.size();i++)
    {
        for(int x = n; x < n+ nOfLinksForParent; x++)
        {
          linkChildren(parents.get(i), children.get(x));
        }
        n =n+nOfLinksForParent;
    }
}



  public static void linkChildren(node parent, node children)
  {
    parent.children.add(children);
  }

  public static ArrayList<node> createFinalChild(int [] list)
  {
    ArrayList <node> fc = new ArrayList<>();
    for(int i = 0; i < list.length; i++ )
    {
      node child = new node();
      child.value = list[i];
      fc.add(child);
    }
    return fc;
  }

  public static ArrayList<node> createChildren(int n, boolean maxOrMin)
  {
    ArrayList<node> children = new ArrayList<>();
    for(int i = 0; i < n; i++)
    {
      node c = new node();
      c.minOrMax = maxOrMin;
      children.add(c);
    }
    return children;
  }

  public static node returnStart()
  {
    node n = new node();
    n.minOrMax = true;
    return n;
  }
}
