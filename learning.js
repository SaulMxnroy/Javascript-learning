/*ARRAYS;

const friends = ["Sam", "Pete", "Michael", "Steven"];
const google = "Google, Facebook, Twitter";
const years = new Array(1992, 2020, 2012, 1470);
//verify if var is an array
if (Array.isArray(google)) {
  console.log("Yeah, this is an array");
} else {
  console.log("It is not an array");
}

const numbers = [10, 20, 30, 40, 50, 60];
console.log(numbers);
const reversedNumbers = [];
let index = 0;

for (let i = numbers.length - 1; i >= 0; i--) {
  reversedNumbers[index] = numbers[i];
  index++;
}

console.log("Usando Reverse for loop:  \n", reversedNumbers);
console.log("Usando Reverse method:  \n", numbers.reverse());

 

const myFriends = ["Melissa", "Miguel", "Anibal"]
const myPets = ["Paquito", "Dylan"]
let firstName = "Saul", lastName = "Monroy García", age = 2022 - 2000, gender = "M"
const myInfo = [firstName, lastName, age, gender, myFriends, myPets]

console.log(myInfo)


//array methods PUSH add at the end
const myFriends = ["Melissa", "Miguel", "Anibal"] 
newLenght = myFriends.push("Dylan")
console.log( newLenght)
console.log(myFriends)
// array methods POP remove last
const popped = myFriends.pop()
console.log(myFriends, "removed: ", popped)
// array methods UNSHIFT -> add as first
myFriends.unshift("Paquito")
console.log(myFriends)
// array methods SHIFT -> remove first
myFriends.shift()
console.log(myFriends)
// array methods indexOF
console.log(myFriends.indexOf("Melissa"))
// array methoids INCLUDES -> returns true or false if found === equality in array
console.log(myFriends.includes("Dylan"))

if (myFriends.includes("Kito")) {
    console.log("Hello there!")
} else {
    console.log("Who are you talking to?")
}




function calcTip(value) {
    let tipRes = 0
    if (value >= 50 && value <= 300) {
        tipRes = 0.15 * value
    } else {
        tipRes = 0.2 * value
    }
    return tipRes
}

console.log(calcTip(0))

const bills = [155, 555, 44]
const tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ]

console.log(bills)
console.log(tips)
console.log(total)



// OBJECTS

const saul = {
    firstName: "Saul",
    lastName: "Monroy",
    age: 21,
    gender: "M",
    likes: "ramen",
    friends: ["Melissa", "Miguel", "Anibal"]
}

console.log(saul)
console.log(saul.firstName, saul.lastName)
console.log(saul["lastName"])

const nameKey = "Name"
console.log(saul["first" + nameKey], saul["last" + nameKey])

const interestedIn = prompt("What do you want to know about Saul? Choose between FirstName, LastName, Age, Gender, likes, friends")
if (saul[interestedIn]) { 
console.log(saul[interestedIn])
} else {
    console.log("Propperty not known")
}

saul.location = "Aguascalientes"
saul["pet"] = "Dylan"

console.log(saul)


const this = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    friends: ["Michael", "Peter", "Steven"],
    job: "teacher",
    location: "Portugal",
    twitter: "@jonasschmedtman"
}

console.log(this.firstName, "has", this.friends.length, "friends, and his best friend is called", this.friends[0])




const saul = {
    nombre: "saul",
    escuela: "UPA",
    fechaNacimiento: 2000,
    calcAge: function () {
        this.edad = 2022 - this.fechaNacimiento
        return this.edad
    }
    //calcAge: function () {
      //  return 2022 - this.birthYear
    //}
    
}

saul.calcAge()
console.log(saul.edad)

const jonas = {
    name: "Jonas",
    birthYear: 1991,
    DriversLicense: false,
    job: "teacher",
    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age
    },
    hasDriversLicense: function () {
        let response = ""
        if (this.DriversLicense) {
            response = "a"
        } else {
            response = "no"
        }
        return response
    },
    getSummary: function () {
        this.calcAge()
        console.log(this.name, "is a",this.age,"-year old",this.job,", and he has", this.hasDriversLicense(),"drivers license")
    }
}

jonas.getSummary()


const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}


if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.firstName, john.lastName, "'s BMI (",john.bmi,") is higher than", mark.firstName, mark.lastName,"'s", mark.bmi," BMI." )
} else {
    console.log(mark.firstName, mark.lastName, "'s BMI (",mark.bmi,") is higher than", john.firstName, john.lastName,"'s", john.bmi," BMI." )

}


console.log(mark)
console.log(john)



const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037-1991,
    "teacher",
    ["Michael","Peter", "Steven"]
]
const typeofArray = []
//for (const i in jonasArray) {
 //   console.log(jonasArray[i])
//}

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i])
    //typeofArray[i] = typeof jonasArray[i]  ////////classic way to fill it
    typeofArray.push(typeof jonasArray[i])
}

console.log(typeofArray)


const bYears = [1991, 2007, 1969, 2020]
const ages = []

for (let i= 0; i < bYears.length; i++) {
    ages.push(2020 - bYears[i])
}

console.log(ages)


const jonas = [
    "Jonas",
    "Schmedtmann",
    2037-1991,
    "teacher",
    ["Michael","Peter", "Steven"]
]
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === "number") break

    console.log(jonas[i], typeof jonas[i])
}

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== "string") continue

    console.log(jonas[i], typeof jonas[i])
}



const jonas = [
    "Jonas",
    "Schmedtmann",
    2020 - 1991,
    "teacher",
    ["Michael", "Smith", "Peter"]
]

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i])
}


for (let exercise = 1; exercise <= 3; exercise++){
    console.log("----------Starting exercise",exercise)

    for(let rep = 1; rep <= 5; rep++) {
        console.log("Lifting weight repetition",rep)
    }
}
const numbers = []
for (let j = 0; j <= 200; j++) {
    numbers[j] = j
    console.log(numbers[j])
}


let dice = Math.trunc(Math.random() * 6) + 1
while (dice !== 6) {
   
    console.log("dice rolled a ",dice)
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice == 6) console.log("Rolled a six, about to exit while loop")
}



const bills = [22, 295,176,440,37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

function calcTip(bill) {
    let tipRes = 0
    if (bill >= 50 && bill <= 300) {
        tipRes = 0.15 * bill
    } else {
        tipRes = 0.2 * bill
    }
    return tipRes
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i])
    totals[i] = tips[i] + bills[i]
}

console.log(bills, tips, totals)

const calcAverage = function (arr) {
    let sum = 0, avg = 0, res = ""
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    avg = sum / arr.length
    res = "sum: " + sum + " avg:" + avg
    return res
}

console.log(calcAverage(totals)) 


const getTemperatures = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]+"°C in",i+1,"days.")
    }
}

temperatures = [12, 5, -5, 0, 4]
getTemperatures(temperatures)

*/