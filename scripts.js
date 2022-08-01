let rootcolor = document.querySelector(':root');


let blue = document.getElementById ("colorblue")
let red = document.getElementById ("colorred")
let green = document.getElementById ("colorgreen")
let purple = document.getElementById ("colorpurple")

blue.addEventListener ("click", (event) => {
    rootcolor.style.setProperty('--color1', '#0071ff');
    console.log("blue")
    })

red.addEventListener ("click", (event) => {
    rootcolor.style.setProperty('--color1', '#c63838');
    })

green.addEventListener ("click", (event) => {
    rootcolor.style.setProperty('--color1', '#1aa050');
     })



purple.addEventListener ("click", (event) => {
    rootcolor.style.setProperty('--color1', '#9852b2');
         })
    



