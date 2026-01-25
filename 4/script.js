let day = Number (prompt("Введите номер дня недели(1-7)"));

if (day >= 1 && day <= 5){
	alert("Рабочий день ")
}else if (day === 6){
	alert("Суббота")
}else if (day ===7 ){
	alert("Воскресенье")
}else
	alert("Ошибка!")

 let Number = (prompt("Введите Уровень сложности!"));

if (Number >= 0 && Number <= 20){
	alert ("Очень легкий!")
}else if (Number >= 20 && Number <= 49){
	alert("Легкий")
}else if (Number >= 40 && Number <= 69){
	alert("Средний")
}else if (Number >= 70 && Number <=89){
	alert("Сложный")
}else 
	alert("Очень сложный")

let speed = Number(prompt("Введите скорость (Км/ч)"))

if (speed >= 0 && speed <=60){
	alert("Разрешенная скорость")
}else if (speed >= 61 && speed <= 90){
	alert("Превышение скорости!")
}else if (speed >= 91 && speed <= 120){
	alert("Опасное превышение!")
}else 
	alert("Критическое превышение сбавьте скорость!")

let server =Number (prompt("Оценка загрузки сервера"))

if (server >= 0 && server <= 40){
	alert("Низкая нагрузка")
}else if (server >= 41 && server <= 69){
	alert("Средняя нагрузка")
}else if (server >= 70 && server <= 89){
	alert("Высокая нагрузка")
}else 
	alert("Критическая нагрузка")

let connection = Number(prompt("Качество связи"))

if (connection >= 1 && connection <=20){
	alert(" Связь отсутствует")
}else if (connection >= 21 && connection <= 49 ){
	alert("Плохая связь")
}else if (connection >= 50 && connection <= 79){
	alert("Нормальная связь")
}else 
	alert("Отличная связь")


let temperature= Number(prompt("Температура процессора?(°С)"))

if (temperature >= 0 && temperature <= 50){
	alert("Нормальная температура")
}else if (temperature >= 50 && temperature <= 69){
	alert("Повышенная температура")
}else if (temperature >= 70 && temperature <= 84){
	alert("Опасная температура")
}else 	
	alert("Критическая температура")

let money = Number(prompt("Расход бюджета (%)"))

if (money >= 0 && money <=30){
	alert("Минимальные расходы")
}else if (money >= 31 && money <= 59){
	alert("Контролируемые расходы")
}else if (money >= 60 && money <=89){
	alert("Высокие расходы")
}else 
	alert("Превышение бюджета")


let system = Number(prompt("Готовность системы к запуску"))

if (system >= 1 && system <= 49){
	alert("Не готова")
}else if (system >= 50 && system <= 79){
	alert("Частично готова")
}else if (system >= 80 && system <= 99){
	alert("Почти готова")
}else 
	alert("Полностью готова")
	