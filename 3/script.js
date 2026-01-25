let clientAge=Number(prompt("Введите возраст"));

if (clientAge >= 18){
	alert("Вы совершеннолетний")
}else{
	alert("Вы не совершеннолетний")
}

let money = Number(prompt('Сколько у тебя денег?'));
let price = 5000

if (money <= price){
	alert("Покупка успешна")
}else{
	alert("У вас недостаточно денег")
}


// < 16 - Отказ 
// 16-17 Ограниченный доступ
// 18 - Полный доступ

let age = Number(prompt("Возраст"))


if (age < 16)
	alert("Доступ запрещен")
else if (age < 18)
	alert("Доступ ограничен")
 else if (age < 22)
 	alert("Ограниченый доступ")
else 
	alert("Полный доступ")