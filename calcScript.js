let nums = document.getElementsByClassName("num")
let actions = document.getElementsByClassName("action")
let myResult = document.getElementById("myResult")
let clear = document.getElementById("clear")
let equals = document.getElementById("getresult")
let deletelast = document.getElementById("delete")
let finish = document.getElementById("finish")
let calculations = document.getElementById('calculations')
let toCalcBtn = document.getElementById('toCalcBtn')
let sharebutton = document.getElementById('checkresult')
let inputs = myResult.innerText

let equationsTyped = [];
let numbersTyped = [];
let actionsTyped = [];

for ( let num of nums ) {
num.addEventListener( 'click', (event) => {
    document.getElementById("myResult").innerHTML += parseFloat(num.innerHTML)
    firstnum  = (myResult).textContent
    })
};

for ( let action of actions ) {
action.addEventListener( 'click', (event) => {
    document.getElementById("myResult").innerHTML += action.innerHTML
    actionsTyped.push(action.innerHTML)
    })
};

clear.addEventListener( 'click', (event) => {
    document.getElementById("myResult").innerHTML = '';
    })

let answer

function divide (x,y) {
    answer = x
    let z = 0
    for(let i = 0; answer > 0; i++){
        answer -= y
        z = z + 1
    }
    return z
}

function multiply (x,y) {
    answer = x
    for(let i = 0; i < y - 1; i++){
        answer += x
    }
    return answer
} 

function exponent (x,y) {
    let z = 1;
    for(let i = 1; i <= y; i++){
        z = multiply(z,x) 
    }
    return z;
}

function precent (x,y) {
    let c = divide(multiply(x,y), 100)
    return c
}

let curAction 

equals.addEventListener( 'click', (event) => {
    toString(myResult.innerText)
    let currentEquation = myResult.innerText
    curAction = actionsTyped.pop()
    switch (curAction) {
    case '^':
        exporesult = exponent(parseInt(myResult.innerText.split("^")[0]),
        parseInt(myResult.innerText.split("^")[1]))
        document.getElementById("myResult").innerText = exporesult
        break
    case '%':
        precentresult = precent(parseInt(myResult.innerText.split("%")[0]),
        parseInt(myResult.innerText.split("%")[1]))
        document.getElementById("myResult").innerText = precentresult
        break
    case '*':
        multiplyresult = multiply(parseInt(myResult.innerText.split("*")[0]),
        parseInt(myResult.innerText.split("*")[1]))
        document.getElementById("myResult").innerText = multiplyresult
        // actionsTyped.slice(0,-1)
        // curAction = NaN
        break
    case '÷':
        divisionresult = divide(parseInt(myResult.innerText.split("÷")[0]),
        parseInt(myResult.innerText.split("÷")[1]))
        document.getElementById("myResult").innerText = divisionresult
        break
    case '+':
        document.getElementById("myResult").innerText = 
        parseInt(myResult.innerText.split("+")[0]) + parseInt(myResult.innerText.split("+")[1])
        break
    case '-':
        document.getElementById("myResult").innerText = 
        parseInt(myResult.innerText.split("-")[0]) - parseInt(myResult.innerText.split("-")[1])
        break
    default:
        console.log('help')
        break
}
    currentresult = (' = ' + myResult.innerText)
    current = currentEquation + currentresult
    equationsTyped.push(current)
})

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let fullName = urlParams.get('fullName') 
let email = urlParams.get('email') 
// let UserFirstNumber = urlParams.get('firstnum') 
// let UserOperator = urlParams.get('useroperator') 
// let UserSecondNumber = urlParams.get('secondnum') 
let firstnumber = urlParams.get('firstnumber') 
let useroperator = urlParams.get('useroperator') 
let seconnumber = urlParams.get('secondnumber') 

let nameToAdd = document.createTextNode(fullName)
let emailToAdd = document.createTextNode(email)
// let equationToAdd = document.createTextNode(UserFirstNumber + UserOperator + UserSecondNumber)

deletelast.addEventListener ("click", (event) => {
    myResult.innerText = myResult.innerText.slice(0, -1);
    })

finish.addEventListener( 'click', (event) => {
    if (equationsTyped[0] == undefined){
        alert('נסה קצת את המחשבון קודם')
    } else {
    document.getElementById('calculator').classList.toggle('hidden')
    document.getElementById('resultsPage').classList.toggle('hidden')
    document.getElementById('finish').parentElement.classList.toggle('hidden')
    
    for(let i = 0; i < equationsTyped.length; i++){
        let li = document.createElement('li');
        li.innerText = equationsTyped[i]
        calculations.appendChild(li)
    }}
});

let sharefirstnum = document.getElementById ("firstnum")
let shareoperator = document.getElementById ("useroperator").value
let sharesecondnum = document.getElementById ("secondnum")
let shareactions = document.getElementById("shareactions").style.display = "none";
let checkresult = document.getElementById ("checkresult")

let viewfirstnum
let insertfirstnum

let viewsecondnum
let insertsecondnum


let viewoperator
let insertoperator


let viewanswer
let insertanswer

let WAshare = document.getElementById("WAshare")
let myUrl = window.location.href

let sharetitle = document.getElementById("sharetitle").style.display = "none";
let sharenew = document.getElementById("sharenew").style.display = "none";


// let firstnumber = document.getElementById ("firstnumber").value
// let useroperator = document.getElementById ("useroperator").value
// let secondnumber = document.getElementById ("secondnumber").value

checkresult.addEventListener ("click", (event) => {
    const query = new URLSearchParams(window.location.search);
    query.append("enabled", "true");
// console.log("https://wa.me/?text=היי אני משתף איתך את המחשבוניסט של מילנה ואיתי: file:///C:/fullstack/general_stack/general_stack-main/calucator.html?firstnum='"
// + document.getElementById ("firstnumber").value + "'&useroperator='" + document.getElementById ("useroperator").value + "'&secondnumber='" + document.getElementById ("secondnumber").value + "'")

sharefirstnum = document.getElementById ("firstnum").value
viewfirstnum = document.getElementById("viewfirstnum");
insertfirstnum = document.createTextNode(" " + sharefirstnum );
viewfirstnum.appendChild(insertfirstnum);


useroperator = document.getElementById ("useroperator").value
viewoperator = document.getElementById("viewoperator");

switch(useroperator) {
    case "*":
        insertoperator = document.createTextNode("כפול")
        viewoperator.appendChild(insertoperator);
        viewanswer = document.getElementById("viewanswer");
        sharefirstnum = document.getElementById ("firstnum").value
        sharesecondnum = document.getElementById ("secondnum").value
        insertanswer = document.createTextNode(parseInt(sharefirstnum)  *  parseInt(sharesecondnum) );
        sharenew = document.getElementById("sharenew").style.display = "flex";
        sharetitle = document.getElementById("sharetitle").style.display = "block";
        break;

    case "+":
        insertoperator = document.createTextNode("ועוד")
        viewoperator.appendChild(insertoperator);
        viewanswer = document.getElementById("viewanswer");
        sharefirstnum = document.getElementById ("firstnum").value
        sharesecondnum = document.getElementById ("secondnum").value
        insertanswer = document.createTextNode(parseInt(sharefirstnum)  +  parseInt(sharesecondnum) );
        sharenew = document.getElementById("sharenew").style.display = "flex";
        sharetitle = document.getElementById("sharetitle").style.display = "block"
        break;

    case "-":
        insertoperator = document.createTextNode("פחות")
        viewoperator.appendChild(insertoperator);
        viewanswer = document.getElementById("viewanswer");
        sharefirstnum = document.getElementById ("firstnum").value
        sharesecondnum = document.getElementById ("secondnum").value
        insertanswer = document.createTextNode(parseInt(sharefirstnum)  -  parseInt(sharesecondnum) );
        sharenew = document.getElementById("sharenew").style.display = "flex";
        sharetitle = document.getElementById("sharetitle").style.display = "block";
        break;
        
    case "/":
        insertoperator = document.createTextNode("חלקי")
        viewoperator.appendChild(insertoperator);
        viewanswer = document.getElementById("viewanswer");
        sharefirstnum = document.getElementById ("firstnum").value
        sharesecondnum = document.getElementById ("secondnum").value
        insertanswer = document.createTextNode(parseInt(sharefirstnum)  /  parseInt(sharesecondnum) );
        sharenew = document.getElementById("sharenew").style.display = "flex";
        sharetitle = document.getElementById("sharetitle").style.display = "block";
        break;
        
    default:
        alert ("האופרטור שהזנת לא חוקי, יש להשתמש באופרטורים הבאים בלבד: * / + / - או חילוק")
    }



    sharesecondnum = document.getElementById ("secondnum").value
    viewsecondnum = document.getElementById("viewsecondnum");
    insertsecondnum = document.createTextNode(" " + sharesecondnum );
    viewsecondnum.appendChild(insertsecondnum);


    
    viewanswer.appendChild(insertanswer);


    
})

const params = (new URL(document.location)).searchParams;
let operatorpar = params.get('useroperator'); 
let firstnumpar = parseInt(params.get('firstnumber'));
let secondnumpar = parseInt(params.get('secondnumber'));

if ( urlParams.has('fullName') ) {
    document.getElementById('nameRecieved').appendChild(nameToAdd);
    document.getElementById('emailRecieved').appendChild(emailToAdd);
    // document.getElementById('resultsusername').appendChild(nameToAdd);
    document.getElementById('user-info').style.display="block"
} else if (urlParams.has('firstnumber')) {
    window.location = "https://wa.me/?text=היי אני משתף איתך את המחשבוניסט של מילנה ואיתי:" + "./index.html?firstnumber=" + firstnumpar + "%26useroperator=" + operatorpar + "%26secondnumber=" + secondnumpar
    // "./index.html?firstnum='"
    // + document.getElementById ("firstnumber").value + "'&useroperator='" + document.getElementById ("useroperator").value + "'&secondnumber='" + document.getElementById ("secondnumber").value + "'"
} else {
    alert('לרצות להגיע פירושו להיות כבר במחצית הדרך (אלפרד קאפי)' + '\n' + 'רוצה להגיע למחשבון? יש להירשם לפני')
    window.location = "./index.html"
}

// sharebutton.addEventListener ( 'click', (event)=>{
//     if ( urlParams.has('firstnumber') ) {
//     window.location = "https://wa.me/?text=היי אני משתף איתך את המחשבוניסט של מילנה ואיתי:" + "./index.html?firstnumber=" + firstnumpar + "%26useroperator=" + operatorpar + "%26secondnumber=" + secondnumpar
//     }
// })

if ( urlParams.has('firstnumber') ) {
    console.log('yessir')
} else {
    console.log('tell me why')
}