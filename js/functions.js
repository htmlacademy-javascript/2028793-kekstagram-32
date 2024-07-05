function checkLengthString (str, maxLength) {
  return (str.length <= maxLength);
}
// Строка короче 20 символов
console.log ('Тест №1. Ожидаю "true", получаю - ', checkLengthString ('text', 20));
// Длина строки ровно 18 символов
console.log ('Тест №2. Ожидаю "true", получаю - ', checkLengthString ('texttexttexttextte', 18));
// Строка длиннее 10 символов
console.log ('Тест №2. Ожидаю "false", получаю - ', checkLengthString ('texttexttexttext', 10));

function checkPalindrome (str) {
  const newStr = str.replaceAll(' ', '').toLowerCase();
  let emptyStr = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    const char = newStr.at(i);
    emptyStr += char;
    console.log(emptyStr);
  }
  return (emptyStr === newStr);
}

// Проверка палиндромности
console.log ('Тест №1. Ожидаю "true", получаю - ', checkPalindrome ('Лёша на полке клопа нашёл '));

function checkNumberInStr (str) {
  let emptyStr = '';
  for (let i = 0; i <= str.length-1; i++) {
    if (!Number.isNaN(Number(str[i])) && str[i] !== ' ') {
      emptyStr += str[i];
    }
  }
  return emptyStr ? Number(emptyStr) : NaN;

}

// Вывод чисел из строки
console.log ('Тест №1. Ожидаю число, получаю - ', checkNumberInStr ('2023 год'));

function checkNumberInStr (str) {
	let emptyStr = '';
	const convertString = String(str);
	for (let i = 0; i <= convertString.length-1; i++) {
	  if (!Number.isNaN(Number(convertString[i])) && convertString[i] !== ' ') {
		emptyStr += convertString[i];
	  }
	}
	return emptyStr ? Number(emptyStr) : NaN;

  }

  // Вывод, если приходит число
  console.log ('Тест №1. Ожидаю число, получаю - ', checkNumberInStr (2023));
