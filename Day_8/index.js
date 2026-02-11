// Function - A resuable set of instructions
// A block ooof code designed to perfoem a specific task



function sayHello(){
    console.log("Bye")
}

sayHello()

function greentUser(x, y){
    console.log(`"Hi", ${x}, ${y}`)
}

greentUser("Piyush", "Vishant")

function addTwo(num1, num2){
    const result = num1 + num2
    console.log(result)
}

addTwo(2,5)


let cartoon = function(){
    console.log('Anime')
}
cartoon()

let isAllowedToVote = (age) =>{
    return age >= 18;
}
console.log(isAllowedToVote(23))


const fruits = ['apple', 'cheeku', true, 1, "aadu", 'santra']
// console.log(fruits);
fruits.push("Kiwi")
// console.log(fruits);
console.log(fruits.length)
console.log(fruits.includes('apple'))

function meraPyaraFunction(udaarKafunction){
    return udaarKafunction() + 40
}
function cartoon2(){
    return 10;
}
console.log(meraPyaraFunction(cartoon2))


fruits.forEach((element) => console.log(`--> ${element}`))

const nums = [1,2,3,4,5,6,]

const result = nums.map((e) => e*2)
console.log(result)