//  part 2 js reps easy going 
// for (i = 0; i <= 20; i++){
//     console.log(i)
// }
// get even
// for(let i = 0; i <=200; i+=2){
//     console.log(i)
// }

// fizz buzz
for(let i = 0; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('fizz buzz')
    }else if(i % 5 == 0){
        console.log('buzz')
    }else if(i % 3 == 0){
        console.log('fizz')
    }else{ console.log(i)}
}