//  part 2 js reps easy going 
// for (i = 0; i <= 20; i++){
//     console.log(i)
// }
// get even
// for(let i = 0; i <=200; i+=2){
//     console.log(i)
// }

// fizz buzz
// for(let i = 0; i <= 100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log('fizz buzz')
//     }else if(i % 5 == 0){
//         console.log('buzz')
//     }else if(i % 3 == 0){
//         console.log('fizz')
//     }else{ console.log(i)}
// }
const wolfy = ['wolfy', 'wolf', 16, 'yukon territory']
const sharky = ['sharky', 'shark', 20, 'left coast']
const plantee = ['plantee', 'plant', 5000, 'mordor']
const porgee = ['porgee', 'porg', 186, 'anch-to']
const dart = ["d'art", 'demogorgan dog', 2, 'upside down']


plantee[2]++;
// console.log(plantee.findIndex(attribute => Number.isInteger(attribute) === true))
// plantee.every(attribute => {(Number.isInteger(attribute) === true)++})
// console.log(plantee)

wolfy.splice(wolfy.findIndex(attribute => attribute == 'yukon territory'), 1,'gotham city')
// console.log(wolfy)

// dart[4] = new Array().push(dart[4], 'hawkins')
let home = dart[3]
dart[3] = new Array
dart[3].push(home, 'hawkins')
// console.log(dart)

wolfy.splice(0,1, 'gameboy')
// console.log(wolfy)

// let tmnt = ['donatello','leonardo', 'raphael', 'michaelangelo']
// for(let turtle of tmnt){
//     console.log(turtle.toUpperCase())
// }
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained',
 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic',
  'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther',
   'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
//  console.log(favMovies)
// console.log(favMovies.length)
// console.log(favMovies.findIndex(movie => movie === 'Titanic'))
favMovies.sort()
// console.log(favMovies)
// 1. yes sort altered the order of the array
favMovies.pop()
favMovies.push('Gaurdians of the Galaxy')
// console.log(favMovies)
favMovies.reverse()
// console.log(favMovies)
console.log(favMovies.shift())
console.log(favMovies.unshift('gaurdians of the galaxy'))
// the unshift returns the length of the mutated array

// favMovies.splice(favMovies.findIndex(movie => movie === "Django Unchained"), 1, 'Avatar')
// console.log(favMovies)
let backHalf = favMovies.slice(favMovies.length/2, favMovies.length)
// console.log(backHalf)
// slice pulled out a subset of the array that is composed of the last half of the array