let numberOne = document.querySelector('#num1');
let numberTwo = document.querySelector('#num2');
let answer = document.querySelector('#ans');
let button = document.querySelector('#btn');
let reset = document.querySelector('#reset');
 
button.addEventListener('click',()=>{
    let ans = Math.pow(numberOne.value,2) + Math.pow(numberTwo.value,2);
    answer.value = ans;
})

reset.addEventListener('click',()=>{
    if(numberOne.value==='' && numberTwo.value==='' && answer.value===''){
        console.log('Summa iru daa!!')
    } else {
        numberOne.value='';
        numberTwo.value='';
        answer.value='';
    }
})