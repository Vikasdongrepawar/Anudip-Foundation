class A
{
    parentInfo()
    {
        console.log("ParentInfo called");
    }
}
class B extends A
{
   childInfo()
   {
    console.log("ChildInfo called");
   }
}
class C extends A
{
    childInfo1()
    {
        console.log("ChildInfo1 called");
    }
}
class D extends B
{
   grandChild()
   {
    console.log("Grand Child called");
   }
}
class E extends C
{
  grandChild1()
  {
    console.log("Grand Child1 called");
  }
}

const obj = new D();
obj.grandChild();
obj.childInfo();
obj.parentInfo();

const obj1 = new E();
obj1.grandChild1();
obj1.childInfo1();
obj1.parentInfo();