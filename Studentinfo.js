class Student
{
    //Attributes
    constructor(rollno,name,email)
    {
        this.rollno = rollno;
        this.name = name;
        this.email = email;
    }
    //method
    getDetails()
    {
      console.log("RollNo:  "+this.rollno);
      console.log("Name:  "+this.name);
      console.log("Email:  "+this.email);
    }
}

const john = [new Student(1,"John","john@gmail.com"),new Student(2,"bob","bob@gmail.com"),new Student(1,"Jimmy","jimmy@gmail.com")];
//console.log(typeof(john));
//console.log(john);
john.map((item)=>{
    item.getDetails();
})