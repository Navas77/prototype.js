const person = {
    firstname:"maxwell",//property:value
    lastName:"luiz",
    age:50,
    eyecolor:"blue"
};
//dot notation
console.log(person.firstname);

//Bracket notation
console.log(person["firstname"]);

//expression
const a ="firstname";
console.log(person[a]);

console.log("the last name is" + person["lastName"]);
console.log(`${person.firstname}  is ${person.age} years old `);


delete person.age
console.log(person.firstname + "is" + person.age + "yearsold.");

person.nationality = "UK"
console.log(person.firstname + "from" + person.nationality +".");

///nested object
const object = {
    name:"john",
    age:30,
    mycars:{
        car1:"ford",
        car2:"bmw",
        car3:"audi"
    }

    }

    console.log(object["mycars"]["car1"]);
    console.log(object.mycars.car1)


    let a1 = "mycars"
    let a2 = "car2"
    console.log(object[a1][a2]);


    ///methods
    const person2 ={
        firstname:"john",
        lastname:"doe",
        id:5566,
        fullname: function(){
            return (this.firstname + " "+ this.lastname)  //.toupperscase
        }
        };
        console.log(person2.fullname());
        console.log(person2.fullname);//return thr function definition

        ///JSON.stringfy()
        const person3 = {
            name:"john",
            age:30,
            city:"new york"
        };
        console.log(person3);

        let mystring = JSON.stringify(person3);
        console.log(mystring);

        //constructors
        function person4(first,last,age,eye){
            this.firstname = first;
            this.lastname = last;
            this.age = age;
            this.eyecolor = eye;

        }
    const myfriend = new person4("john","doe",25,"blue");
    console.log(myfriend);

    //values()
    //create an object
    const person5 ={
        name : "john",
        age : 30,
        city : "new york"
    };

    //create an array
    const myArray = Object. values(person5);
    console.log(myArray);

    //entries()
    //define an object
    const person = {
        name : "alice",
        age:25,
        city:"newyork"
    };

    //convert the object to an array of keyvalue pairs
    const entries = Object.entries(person);
    console.log(entries);;
    
    //create an object
    const person = {
        name : "john",
        age : 30
    };

    ///freeze the object
    Object.freeze(person);

    //attempt to change a peoperty (this won't work)

    person.age = 31;

    //attempt to add a new value (this wont work)
    person.gender = "male";

    //attempt to delete a property (this wont work)
    delete person.name;

    //the object remains unchanged
    console.log(person);
    
        

   ///
   let person = {
    firstName: 'John',
    lastName: 'Doe'
};

person.greet = function () {
    console.log('Hello!');
}

person.greet(); 
    


///
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

function greet() {
    console.log('Hello, World!');
}

person.greet = greet;

person.greet();

