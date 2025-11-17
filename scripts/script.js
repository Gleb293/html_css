const scrollbtn = document.querySelector(".scroll");

scrollbtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});


let buttompressed =false;

if(buttompressed){
    console.log("кнопка нажата");
}


let store =30;

if (store<0){
    console.log("ура победа");
}

let battery=5;

if(battery<10){
   console.log("нужна зарядка");
}
else{
    console.log("все окей");
}
let isweekend=false;
if(isweekend===true){
    console.log("спим");
}
else{
    console.log("надо в шкилу(")
}
let grade=8;
if(grade>=9)
{
    console.log("кайф");
}
else if(grade>=7)
{
    console.log("нормик");
}
else if(grade>=5)
{
    console.log("минимум");
}
else{
    console.log("ты тупой")
}


let temp=20;
if(temp>=30)
{
    console.log("кайф");
}
else if(temp>=20)
{
    console.log("нормик");
}
else if(temp>=10)
{
    console.log("почти колд");
}
else{
    console.log("колд");
}
let age=20;
let hasticket=true;
if(age>=18)
{
    if(hasticket)
    {
        console.log("можно войти");
    }else{
        console.log("нужен билет");
    }
}else{
    console.log("недостаточно лет");
}
if(age>=18&&hasticket)
{
    console.log("можно войти");
}else if(age>=18&&!hasticket){
console.log("нужен билет");
}
else{
    console.log("недостаточно лет")
}


let day=3;
switch (day){
case 1:console.log("pn");
break;
case 2:console.log("vt");
break;
case 3:console.log("sr");
break;
default:console.log("enother day");
}
let role=3;
switch (role){
case 1:console.log("noob");
break;
case 2:console.log("pro");
break;
case 3:console.log("hacker");
break;
default:console.log("god");
}

let isonline=true;
let status=isonline ? "в сети ":"не в сети";
console.log(status);
let zakaz=false;//0
let info=zakaz ? "пришел":"не пришел";
console.log('статус заказа:', info);
for(i=0;i<=5;i++){
    console.log("povtor"+i);
}

for (let q=2;q<=10;q+=2){
    console.log(q);
}

for(let i=5;i<=15;i++){
    console.log(i);
}

for(let i=5;i>=5;i--){
    console.log(i);
}
console.log("Страт!")

let e=1;
while(e<=3){
    console.log("шаг "+e)
    e++;
}

let money=100;
while(money>0){
    console.log("покупаю мороженое");
    money-=20;
}

let n=10;
while(n>0){
    console.log(n);
    n--;
}

/*let password;
do{
    password=prompt("Enter password:");
}while(password !=="1234");
console.log("Password is right!")


let ch;
do{
    ch=prompt("Enter number:");
}while(ch !=="5");
console.log("ok")*/

let fruits=["апельсин","яблоко","груша"]
for(let fruit of fruits){
    console.log(fruit);
}

for(let letter of "privet"){
    console.log(letter);
} 

let animals=["енот","кот","собака","человек","ехидна"]
for(let animal of animals){
    console.log(animal);
}

let person={name:"Gleb",age:14,city:"Minsk"};
for(let key in person){
    console.log(key + ": "+person[key]);
}

let me={name:"Gleb",age:14,city:"Minsk"};
for(let key in person){
    console.log(key + ": "+me[key]);
}

for(let i=1;i<=10;i++){
    if (i===5)break;
    console.log(i);
}

for (let i=1;i<=5;i++){
    if (i===3)continue;
    console.log(i);
}

for (let i=1;i<=10;i++){
    if(i%2===0) continue;
    console.log(i);
}

let sum=0;
for(i=0;i<=5;i++){
    sum+=i;
    console.log(sum);
}

let umn;
for(let i=0;i<=10;i++){
    // umn=5*i;
    // console.log(umn)
    console.log(`3 x ${i} = ${3 * i}`);
}

let word="банан";
let count=0;
for(let letter of word){
    if (letter === "а") count++;
}
console.log(`букв в слове ${word}:` ,count)

let frw="ананас";
let  frwc=0;
for (let letter of frw.toLowerCase()){
    if (letter === "а") frwc++;
}
console.log(`букв в слове ${frw}:`,frwc);



function summa(a,b){
  return a+b;
}

let result=summa(1,2);
alert(result);

const sayhi=function(){
    console.log("привет");
}
sayhi();


const square = x=>x*x;
console.log(square(5));
let resultt =square(4);
console.log(resultt);

function user(name){
    this.name=name;
};new user("Gleb");

setInterval(()=>{
    console.log("every second");
},1000);

let name="Gleb";
function sayHi(){
    alert("Hi, "+name);
}
name="Dima";
sayHi();


function sm(a,b,c){
    return a+b+c;
  }
  let res=sm(3,10,1);
  console.log(res);