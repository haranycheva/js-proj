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