let person={
    name:'sini',
    age:50
}
let b=Object.create(person)
console.log(Object.getPrototypeOf(b))