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

let tmnt = ['donatello','leonardo', 'raphael', 'michaelangelo']
for(let turtle of tmnt){
    console.log(turtle.toUpperCase())
}