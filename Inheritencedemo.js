class A
{
    constructor(info)
    {
        this.info =info;
        console.log(this.info);
    }
    disp()
    {
        console.log(this.info);
    }
}
class B extends A
{
    constructor(msg)
    {
        super("A class constructor called") // parent constructor
        this.msg =msg
    }
    disp()
    {
        super.disp(); // parent method
        //console.log(super.msg);
        console.log(this.msg);
    }
}

const obj = new B("B class constructor called");
obj.disp();








// class Animal {
//   run(){
//     console.log("Animal is running");
//   }
//   speak(){
//     console.log("Animal makes a sound");
//   }
// }

// class Dog  extends Animal {

// }

// class Cat  extends Animal {
//    speak(){
//     console.log("Cat meows");
//    }
// }
// const obj = new Dog();

// obj.run();      // Output: Animal is running
// obj.speak();   // Output: Animal makes a sound

// const obj2 = new Cat();
//        // Output: Animal is running
// obj2.speak();   // Output: Cat meows