let myAnimals = ["dog","cat","horse","meerkat"]
let enterAnimal = prompt("Enter in an animal to add to the array:")
let newAnimalEntered = enterAnimal.toLowerCase()

myAnimals.push(newAnimalEntered)
 alert(`The last animal is ${myAnimals[myAnimals.length - 1]}`)

