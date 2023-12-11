// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('#form');
const list = document.querySelector('#list');
const product = document.querySelector('#product');
const quantity = document.querySelector('#qty');



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const productValue = product.value;
    const qtyValue = quantity.value;
    const li = document.createElement('li');
    li.innerText = `${qtyValue} ${productValue}`;
    list.appendChild(li);
    product.value = '';
    quantity.value = '';
})


let name1 = {
    firstName: 'Naresh',
    lastName: 'Kumar'
}

function printName(){
    console.log(`Welcome ${this.firstName} ${this.lastName}`);
}

let refName = printName.bind(name1);

// refName();
console.log(name1);