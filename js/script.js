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

// //1
// const BROWSER = "Opera";
// if (BROWSER === "Edge"){
//     alert("You've got the Edge!");
// }else if  ( BROWSER === "Chrome" || 'Firefox' || 'Safari' || 'Opera') {
//     alert('Okay we support these browsers too');
// }else {
//     alert('We hope that this page looks ok!');
// }
// //2
// const SIMB = "abcde";
// const FIRST = SIMB[0];
// if (FIRST === "a") {
//     console.log("yes");
// }else {
//     console.log("no");
// }

// // f1

// const NUM1 = Number(prompt("enter first number"));
// const NUM2 = Number(prompt("enter second number"));
// function poriv(n1, n2){
//     if (n1 > n2 ) {
//         alert("1");
//     } else if (n1 < n2 ) {
//         alert ("-1");
//     } else if (n1 === n2) {
//         alert ("0");
//     } else {
//         alert("error");
//     }
// }

// function poriv2(n1, n2){
//     n1 > n2 ? alert("1") : n1 < n2  ? alert("-1") : n1===n2 ? alert("0") : alert("error");
// }

// let poriv3 = (n1, n2) => {
//     if (n1 > n2 ) {
//         alert("1");
//     } else if (n1 < n2 ) {
//         alert ("-1");
//     } else if (n1 === n2) {
//         alert ("0");
//     } else {
//         alert("error");
//     }
// }

// poriv(NUM1, NUM2);

// // f2
// const textFromUser = prompt("enter text");
// const colorFromUser = prompt("enter color");
// const bgColorFromUser = prompt("enter background color")
// function myParagraph(backColor, textColor, text) {
//     document.write(`<p style="background-color:${backColor}; color:${textColor}">${text}</p>`);
// }
// myParagraph(bgColorFromUser, colorFromUser, textFromUser);

// // f arguments

// function showWords(){
//     let text = '';
//     for (let i = 0; i < arguments.length; i++ ) {
//         text += arguments[i] + ' ';
//     }
//     return text;
// }

// document.write(showWords("I've", "been", "learning", "JavaScript", "for", "a", "month") + '<br>');

// // m 1a
// let poem = ["Мороз","и", "солнце", "день","чудесный"];
// const fraseLenght = poem.length;
// const indexFromUser = Number(prompt(`enter the number of the word from 1 to ${fraseLenght}` )) - 1;
// const wordFromUser = prompt("enter the word");
// if (indexFromUser >= 0 && indexFromUser < fraseLenght) {
//     poem.splice(indexFromUser,1, wordFromUser);
// } else {
//     alert (" wrong value")
// }
// document.write(poem.join(" ") + '<br>')

// // m 1b
// let poem2 = ["Мороз","и", "солнце", "день","чудесный"];
// poem2.splice(poem2.length - 2, 1, "пень")
// document.write(poem2.join(" "));

// // m2
// let random = [];
// let masive = [];
// for (let i = 0; i < 20; i++) {
//     random.push(Math.floor(Math.random() * 101));
// }
// function numb (num) {
//     for ( let j of random){
//         if (j % num === 0) {
//             masive.push(j);
//         }
//     }
//     console.log(masive.join(" "));
//     masive.length = 0;
// }
// numb(2);
// numb(3);
// numb(5);
// numb(10);


// const array = [2, 3, 44, 5656, 2323, 8789];
// function sum(arr){
//     let sumOfNumb = 0;
//     for (const i of arr) {
//         sumOfNumb += i;
//     }
//     return sumOfNumb;
// }
// console.log(sum(array));

// const users = ["sasha", "dasha", "pasha"];
// function login(userNames){
//     const nameOfUser = prompt("ur name");
//     userNames.includes(nameOfUser) 
//     ? alert("вітаю в системі")
//     : alert("такого користувача не існоє");
// }
// login(users);

// const findUser = function(logins, log){
//     return logins.includes(log)
//     ? "u r in sistem"
//     : "no"
// }

// const heigth = prompt("enter height");
// const weigth = prompt("enter weight");
// function comaToDotAndToNumb(str) {
//     return Number(str.replace(",", ".")) //replace змінює лише перше знаходження (replaceAll змінює всі)
// }
// function calcMassIndex(w, h){
//     w = comaToDotAndToNumb(w);
//     h = comaToDotAndToNumb(h);
//     return getNumb(w / Math.pow(h, 2));
// }
// console.log(calcMassIndex(weigth, heigth));

// function getNumb (numb) {
//     return Number(numb.toFixed(1))
// }

// // 1
// const numb = [5, 676, 9454, 7, 38, 29];
// function findSmallest(arr) {
//     return Math.min(...arr);
// }
// console.log(findSmallest(numb));

// // 2
// const phrase = prompt("enter word");
// function changeCase (word) {
//     let reverseWord= "";
//     for (const i of word){
//         if (i === i.toUpperCase()){
//             reverseWord += i.toLowerCase();
//             continue
//         }
//         reverseWord += i.toUpperCase();
//     }
//     return reverseWord;
// }
// console.log(changeCase(phrase))

// // 3
// const string = "Amazon was founded by Jeff Bezos from his garage in Bellevue Washington on July 5 1994";
// function toLowCaseAndDefise(parahraf){
//     let string2 = parahraf.toLowerCase();
//     return string2.replaceAll(" ", "-");
// }
// console.log(toLowCaseAndDefise(string))

// //4
// function toFilt(arr, ...elems){
//     let newArr = [];
//     for (const i of elems){
//         arr.includes(i) ? newArr.push(i) : '';
//     }
//     return newArr;
// }
// console.log(toFilt([10,20,30,40,50,60,70], 2, 46, 10, 40, 45, 87, 90, 20))

// 5
// const arrr = [2, 434, 54546, 6, 786, 357, 6, 98, 0];
// const elemm = 3;
// const elem2 = 4;
// function addToArr (arr, elem){
//     if (arr.includes(elem)){
//         return "is in list";
//     } else {
//         arr.push(elem);
//         return arr;
//     }
// }
// console.log(addToArr([2, 5, 454, 6, 5], 35));

// const arrr2 = [2, 434, 54546, 6, 786, 357, 6, 98, 0];
// function removeFromArr(arr, elem) {
//     let index = arr.indexOf(elem);
//     if (index === -1){
//         return "no value";
//     }
//     arr.splice(index, 1)
//     return arr
// }
// console.log(removeFromArr(arrr2, elemm));

// const arrr3 = [2, 3, 54546, 6, 786, 357, 6, 98, 0];
// function removeFromArrAndAddNew(arr, elem1, elem2) {
//     let index = arr.indexOf(elem1);
//     if (index === -1){
//         return "no value";
//     }
//     arr.splice(index, 1, elem2)
//     return arr
// }
// console.log(removeFromArrAndAddNew(arrr3, elemm, elem2));

// // 6
// const alf =  ['python', 'javascript', 'c++','php'];
// function toAlfavit(arr) {
//     return arr.sort()
// }
// console.log(toAlfavit(alf))
// f(o)
// o.f()

//  отримати числа в порядку зменшення
// 312 => 321

// function toSort (elem){
//     return String(elem).split('').sort().reverse().join('');
// }
// console.log(toSort(45839));

// const vovels = ["a", "o", "i", "e", "u"]
// function toCountShos (word){
//     return word.toLowerCase().split("").filter(item => vovels.includes(item)).length;
// }
// console.log(toCountShos("arabee"));
// 1

// function hernya (str) {
//     let counter = false;
//     let char = "";
//     for (let i = 0; i < str.length; i+=1){
//         let letter = str[i]
//         if (letter === " "){
//             counter = true;
//         }else if (counter || i===0){
//             char += letter.toUpperCase();
//             counter = false;
//         }else {
//             char += letter.toLowerCase();
//         }
//     }
//     char = char.replaceAll(" ", '');
//     return char.padStart(char.length + 1, "#");
// }
// console.log(hernya(" Hello there thanks for trying my Kata"))

// 2
// function zeroToEnd (arr){
//     let counter = 0;
//     let char = [];
//     for (const item of arr){
//         item === 0 ? counter += 1 : char.push(item);
//     }
//     for ( ; counter > 0 ; counter -= 1){
//         char.push(0);
//     }
//     return char;
// }
// console.log(zeroToEnd([false, 0, 5, 34, 0, true, "ghhgfheg", 0]))

// // 3
// function compSame(a, b) {
//     let counter = true;
//     if (a.includes(null) || b.includes(null)){
//         counter = false;
//     }
//     for (const item of a){
//         b.includes(item**2) ? '' : counter = false;
//     }
//     return counter;
// }
// console.log(compSame( [121, 144, 19, 161, 19, 144, 19, 11],  [132, 14641, 20736, 361, 25921, 361, 20736, 361]));

//4
function toFindCubeAmount(m) {
    counter = 0;
    for (let i = 1; m > 0; i += 1) {
        m = m - i**3;
        counter += 1;
    }
    if (m === 0) {
        return counter;
    }else {
        return -1;
    }
}
console.log(toFindCubeAmount(1071225));
console.log("dsjbdshvjds");

