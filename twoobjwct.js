//Use Object.is(obj1,obj2)to check if two objects are same

let employee={
    name:'suresh',
    age:87
}
let employee1={
    place:'pala',
    phone:"42389759"
  
}
if(Object.is(employee,employee1))
    console.log("Two objects are equal")
else
    console.log("Two objects are not equal")

