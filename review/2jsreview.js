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
// console.log(favMovies.shift())
// console.log(favMovies.unshift('gaurdians of the galaxy'))
// the unshift returns the length of the mutated array

// favMovies.splice(favMovies.findIndex(movie => movie === "Django Unchained"), 1, 'Avatar')
// console.log(favMovies)
let backHalf = favMovies.slice(favMovies.length/2, favMovies.length)
// console.log(backHalf)
// slice pulled out a subset of the array that is composed of the last half of the array

const whereIsWaldo = [['timmy', 'frank'], 'eggbert',
['lucinda', 'jacc', 'neff', 'snoop'],['petunia',['baked goods', 'Waldo']]]

whereIsWaldo.splice(1,1)
// console.log(whereIsWaldo)
// console.log(whereIsWaldo[1].splice(whereIsWaldo[1].findIndex(element => element === 'neff'), 1, 'no one'))
// console.log(whereIsWaldo)
// console.log('here is ' + whereIsWaldo[2][1][1]+'!!')

let speak = ['human why are you taking picture of me',
 'the catnip made me do it', 'why does the red dot always get away?']

// for(let i = 0; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(speak[Math.floor(Math.random()*3)])
//     }else{console.log('love me, pet me! hssss!')}
// }

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,18,12,17,12,71,18,15,12]
nums.sort()
console.log(nums[Math.floor(nums.length/2)])