class nodeChild extends node{
    public boolean minMax ; //true = max, false = min

    public nodeChild(boolean minMax, node c1, node c2)
    {
      this.minMax = minMax;
      child1 = c1;
      child2 = c2;
    }
}
