const { createElement } = require("react")

let diva = document.querySelector(".fdiv")
let sdiva = document.querySelector(".sdiv")
let tdiva = document.querySelector(".tdiv")
let fodiva = document.querySelector(".fodiv")
let fidiva = document.querySelector(".fidiv")
let sidiva = document.querySelector(".sidiv")
let sediva = document.querySelector(".sediv")
let counter = 0;
diva.addEventListener("click", changeit
);

function changeit (){
    diva.style.background = "red"
}

sdiva.addEventListener("click" , colorall)
function colorall(){
    diva.style.background = "green"
    sdiva.style.background = "green"
    tdiva.style.background = "green"
    fodiva.style.background = "green"
    fidiva.style.background = "green"
    fidiva.style.background = "green"
    sidiva.style.background = "green"
    sediva.style.background = "green"
}

tdiva.addEventListener('click', ()=> {
    tdiva.textContent = 'hello me again';
})
let sction = document.querySelector('.fodiva')
let dd = document.createElement('div')

fodiva.innerHTML += 
`<div>${counter}</div>
`
sction.appendChild(dd)

fodiva.addEventListener('click', ()=>{
    counter++;
})
let sec = document.querySelector('.fsection')
let inp = document.createElement('input')
inp.innerHTML =`
input class="input" type="text" placeholder="enter">
<div></div>`

fidiva.addEventListener('click', () => {

})
sec.appendChild(inp)
