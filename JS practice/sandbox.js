// // const data = ['apple','potato','scissors','mango'];

// // data.unshift('Phone');
// // console.log(data);

// // const data2 ={
// //     name:'Naresh Kumar',
// //     age: 25,
// //     location:'Chennai'
// // }

// // data2.country='South Africa';
// // console.log(data2);

// // const data3 ={
// //     name:'Naresh Kumar',
// //     yearOfBirth:1997,
// //     generationType:function(){
// //         if(this.yearOfBirth >1995 && this.yearOfBirth<=2000){
// //             console.log("Generation Z");
// //         }

// //     }
// // }

// // console.log(data3);

// // const heading = document.querySelector('h1');
// // // heading.style.backgroundColor="yellow";
// // // heading.style.fontSize='40px';

// // heading.classList.add('error');

// // console.log(heading.innerText+=' Makkaley');

// // heading.innerHTML += '<h2> This is Naresh Kumar </h2>';

// let button1 = document.querySelector('button');

// button1.addEventListener('click', () => {
//     //console.log(Math.ceil(Math.random()*10));
//     if(Math.ceil(Math.random()*10) === 7){
//         console.log('Neutral');
//     }else if(Math.ceil(Math.random()*10) < 7){
//         console.log('Acid');
//     }else{
//         console.log('Base');
//     }
// });

// let arr = [1,2,3,4];
// console.log(arr.slice(0,2));

// let name = 'Naresh';
// let charName = [...name];
// console.log(charName.reverse().join(''));

// function allEvens(numbers){
//     return numbers.some(num => num%2 === 0 );
// }

// function isLeap(year) {   
//     if(year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0 ){
//         console.log("leap year");
//     }else{
//          console.log("Not leap year");
//     } 
    
//     }

//     let username ='india';

//     function password(){
//         if(prompt('enter the password') === username){
//             console.log("Correct");
//         }else{
//             console.log("Wrong");
//             password();
//         }
//     }

//     // password();

// const users = [
//     {firstname:'Naresh',lastname:'Kumar',age:25},
//     {firstname:'Deepika',lastname:'Choudary',age:75},
//     {firstname:'John',lastname:'Cena',age:55},
//     {firstname:'CM',lastname:'Punk',age:25}
// ]

// // const output = users.filter(x=>x.age<30).map(y=>y.firstname)

// const output = users.filter(x=>x.age<30).reduce((acc,curr) => {
//     acc.push(curr.firstname);
//     return acc;
// },[])

// console.log(output);

// let nk =100;

// function a(){
//     function b(){
//         console.log(nk);
//     }
//     b();
// }
// a();

// const text = "naresh";

// let newString = text.charAt(0).toUpperCase() + text.slice(1);

// // text.charAt(0).toUpperCase()

// console.log(newString);

// let x = Math.floor(Math.random() * 100 +1)
// let y = Math.floor(Math.random() * 50 +1)

// let add = `${x} + ${y} = ${x+y}`;
// let sub = `${x} - ${y} = ${x-y}`;
// let multiplication = `${x} * ${y} = ${x*y}`;
// let division = `${x} / ${y} = ${x/y}`;
// let modulus = `${x} % ${y} = ${x%y}`;



// console.log(add);
// console.log(sub);
// console.log(multiplication);
// console.log(division);
// console.log(modulus);

// const arr= [1,2,3,4,5];
// let z;
// z = arr.push(6);
// z = arr.unshift(0);
// z = arr.reverse();

// console.log(arr);

// const arr1= [1,2,3,4,5];
// const arr2= [5,6,7,8,9,10];

// let a;
// // a = arr1.splice(0,4);
// a = arr1.slice(0,4);
// a = [...a , ... arr2];
// console.log(a);

// const library = [
//     {
//         title: 'WWE SD',
//         author: 'Vince McMahon',
//         status : {
//             own: true,
//             reading: false,
//             read: false
//         }
//     },
//     {
//         title: 'WWE RAW',
//         author: 'HHH',
//         status : {
//             own: true,
//             reading: false,
//             read: false
//         }
//     },
//     {
//         title: 'WWE NXT',
//         author: 'Shawn Micheals',
//         status : {
//             own: true,
//             reading: false,
//             read: false
//         }
//     }
// ]

// let x = library;

// //x.status.read

// for (y of x){
//     y.status.read = true;
// }

// let [{title : firstTitle }] = library

// console.log(x);
// console.log(library);
// console.log(firstTitle);


// console.log(u);

// var u =100;

// ((x,y)=>{
//     console.log(x+y);
// })(50,100);

// const getCelsius = (F) => (F-32) * 5 / 9 ;

// console.log(`The Temperature is ${getCelsius(32)} \xB0C`);

// const arr =[47,23,76,12,98,213,26,2];

// const minMax = (arr) => { return
//     ({
//         max: Math.max(...arr),
//         min: Math.min(...arr)
//     })

// }; 
// const minMax = (arr) => {
//     console.log(`Minimum Value is ${Math.min(...arr)}`);    
//     console.log(`Maximum Value is ${Math.max(...arr)}`);  
// }; 
// minMax([47,23,76,12,98,26])

// (
//     (l,w) => {console.log(`The area of a rectangle with length ${l} and width ${w} is ${l*w}`);}
// )(5,6);

// function calculator(num1,num2,operator){
//     if(operator == '+'){
//         return num1 + num2;
//     } else  if(operator == '-'){
//         return num1 - num2;
//     } else  if(operator == '*'){
//         return num1 * num2;
//     } else  if(operator == '/'){
//         return num1 / num2;
//     } else {
//         console.log('Invalid Opeartor. Please try again');
//     }
// }

// console.log(calculator(5,10,'+'));
// console.log(calculator(5,10,'-'));
// console.log(calculator(5,10,'*'));
// console.log(calculator(5,10,'/'));


// for(let i=0; i<=100;i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     } else if(i % 3 === 0){
//         console.log("Fizz");
//     } else if(i % 5 === 0){
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

const givenArray = [
    { "name": "Shanghai", "population": 24300000 },
    { "name": "Los Angeles", "population": 3792621 },
    { "name": "New Delhi", "population": 21800000 },
    { "name": "Mumbai", "population": 18400000 },
    { "name": "Chicago", "population": 2695598 },
    { "name": "Houston", "population": 2100263 },
  ];

 // console.log(givenArray.filter(el => el.population<5000000).map(el => el.name));

const ppl = givenArray.reduce((acc,curr) => {
    if(curr.population < 5000000){
        acc.push(curr.name);
    }
    return acc;
},[])

console.log(ppl);

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors.length);
const spans =document.querySelectorAll('span');

let i=0;
for(let span of spans){
    span.style.color = colors[i];  
    i++;
}

