let toCalcBtn = document.getElementById('toCalcBtn')


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// const params = (new URL(document.location)).searchParams;


let firstnumber = urlParams.get('firstnumber') 
let useroperator = urlParams.get('useroperator') 
let seconnumber = urlParams.get('secondnumber') 
let operatorpar = urlParams.get('useroperator'); 
let firstnumpar = parseInt(urlParams.get('firstnumber'));
let secondnumpar = parseInt(urlParams.get('secondnumber'));

toCalcBtn.addEventListener ( 'click', (event)=> {
    // let operatorpar = params.get('useroperator'); 
    // let firstnumpar = parseInt(params.get('firstnumber'));
    // let secondnumpar = parseInt(params.get('secondnumber'));
    if ( urlParams.has('firstnumber') ) {
        window.location.href = "./calucator.html?fullName=" + fullName + "&email=" + email + "&firstnumber=" + firstnumpar + "&useroperator=" + operatorpar + "&secondnumber=" + secondnumpar
        // URLSearchParams.append(firstnumber, firstnumpar)
        console.log('hello')
    }
})

if ( urlParams.has('firstnumber') ) {
    console.log('yessir')
} else {
    console.log('tell me why')
}