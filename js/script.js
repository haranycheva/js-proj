// let num = 0;
// while (num <= 5) {
//     console.log(num);
//     num += 1;
// }

// const QUESTION = prompt("Яка офіційна назва js?");
// const ANSWER = "ECMAScript";

// if (QUESTION === null) {
//     alert("scasovano");
// } else if (QUESTION.toLowerCase() === ANSWER.toLowerCase()) {
//     alert("ok");
// }else {
//     alert("do not know???");
// }

// const NUM = Number(prompt("enter the value"));
// const HOURS = Math.floor(NUM / 60);
// const MINUTES = Math.floor(NUM % 60);
// console.log(`${String(HOURS).padStart(2,"0")}:${String(MINUTES).padStart(2, "0")}`);

//1
const BROWSER = "Opera";
if (BROWSER === "Edge"){
    alert("You've got the Edge!");
}else if  ( BROWSER === "Chrome" || 'Firefox' || 'Safari' || 'Opera') {
    alert('Okay we support these browsers too');
}else {
    alert('We hope that this page looks ok!');
}
//2
const SIMB = "abcde";
const FIRST = SIMB[0];
if (FIRST === "a") {
    console.log("yes");
}else {
    console.log("no");
}

// f1

const NUM1 = Number(prompt("enter first number"));
const NUM2 = Number(prompt("enter second number"));
function poriv(n1, n2){
    if (n1 > n2 ) {
        alert("1");
    } else if (n1 < n2 ) {
        alert ("-1");
    } else if (n1 === n2) {
        alert ("0");
    } else {
        alert("error");
    }
}

function poriv2(n1, n2){
    n1 > n2 ? alert("1") : n1 < n2  ? alert("-1") : n1===n2 ? alert("0") : alert("error");
}

let poriv3 = (n1, n2) => {
    if (n1 > n2 ) {
        alert("1");
    } else if (n1 < n2 ) {
        alert ("-1");
    } else if (n1 === n2) {
        alert ("0");
    } else {
        alert("error");
    }
}

poriv(NUM1, NUM2);

// f2
const textFromUser = prompt("enter text");
const colorFromUser = prompt("enter color");
const bgColorFromUser = prompt("enter background color")
function myParagraph(backColor, textColor, text) {
    document.write(`<p style="background-color:${backColor}; color:${textColor}">${text}</p>`);
}
myParagraph(bgColorFromUser, colorFromUser, textFromUser);

// f arguments

function showWords(){
    let text = '';
    for (let i = 0; i < arguments.length; i++ ) {
        text += arguments[i] + ' ';
    }
    return text;
}

document.write(showWords("I've", "been", "learning", "JavaScript", "for", "a", "month") + "<br>");

// m 1a
let poem = ["Мороз","и", "солнце", "день","чудесный"];
const fraseLenght = poem.length;
const indexFromUser = Number(prompt(`enter the number of the word from 1 to ${fraseLenght}` )) - 1;
const wordFromUser = prompt("enter the word");
if (indexFromUser >= 0 && indexFromUser < fraseLenght) {
    poem.splice(indexFromUser,1, wordFromUser);
} else {
    alert (" wrong value")
}
document.write(poem.join(" ") + '<br>')

// m 1b
let poem2 = ["Мороз","и", "солнце", "день","чудесный"];
poem2.splice(poem2.length - 2, 1, "пень")
document.write(poem2.join(" "));

// m2
let random = [];
let masive = [];
for (let i = 0; i < 20; i++) {
    random.push(Math.floor(Math.random() * 101));
}
function numb (num) {
    for ( let j of random){
        if (j % num === 0) {
            masive.push(j);
        }
    }
    console.log(masive.join(" "));
    masive.length = 0;
}
numb(2);
numb(3);
numb(5);
numb(10);







