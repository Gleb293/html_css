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