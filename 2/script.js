
 let price=Number(prompt("Цена Товара"))

 let quantity=Number(prompt("Колличевство"))

 let total= price * quantity;

 alert("Общяя сумма" + " " + total + " " + "Сум")

 let discount=Number(prompt("Скидка %"))

 let sale= discount*price /100;

 let finalPrice= price-sale;

 alert("К оплате"+" " + finalPrice + " "+"Сум")
 alert("Цена со скидкой "+ "" + finalPrice);

let year = 2026
let birthYear=Number(prompt("Твой Год рождения?"))

let age= year-birthYear

alert("Тебе " +"" + age + " " + "Лет")

let width=Number(prompt("Ширина комнаты"))
let length2=Number(prompt("Длина комнаты"))

let area= width*length2
alert("Площадь комнаты" + "" +" " + area +"М2")