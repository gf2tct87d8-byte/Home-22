const age = prompt('Введите ваш возраст');
const number = Number(age);

if (age === null || age.trim() === '' || !Number.isFinite(number)) {
	alert('Введите число')
} else if (number < 18) {
	alert('Вам доступ запрещён(')
} else if (number <= 60) {
	alert('Добро пожаловать:)')
} else {
	alert('Вы слишком взрослый для этого сайта(')
}
