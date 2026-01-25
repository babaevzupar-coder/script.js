let price =Number(prompt("Цена товара"))

let quantity=Number(prompt("Колличевство"))

let total= price*quantity

alert("Цена" + " " + total)

let discount=Number(prompt("Скидка(%)"))

let sale = (total * discount) / 100

let finalPrice = total - sale

alert ("К оплате" + " " + finalPrice)

let year = 2026
let birthYear=Number(prompt("Твой Год рождения?"))

let age= year-birthYear

alert("Тебе " +"" + age + " " + "Лет")

let width=Number(prompt("Ширина комнаты"))
let length2=Number(prompt("Длина комнаты"))

let area= width*length2
alert("Площадь комнаты" + "" +" " + area +"М2")



