const container = document.querySelector("#container");
let newLi;

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        newLi = `<li class="box fizzbuzz">FizzBuzz</li>`;
    } else if (i % 3 === 0){
        newLi = `<li class="box fizz">Fizz</li>`;
    } else if (i % 5 === 0){
        newLi = `<li class="box buzz">Buzz</li>`;
    } else {
        newLi = `<li class="box">${i}</li>`;
    }

    container.innerHTML += newLi;
}
