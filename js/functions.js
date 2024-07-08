//task_1

function checkLengthString (str, maxLength) {
  return (str.length <= maxLength);
}
checkLengthString ('проверяемая строка', 20);

//task_2

function checkPalindrome (str) {
  const newStr = str.replaceAll(' ', '').toLowerCase();
  let emptyStr = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    const char = newStr.at(i);
    emptyStr += char;
  }
  return (emptyStr === newStr);
}
checkPalindrome('Лёша на полке клопа нашёл ');

//task_3.1

function checkNumberInStr (str) {
  let emptyStr = '';
  for (let i = 0; i <= str.length - 1; i++) {
    for (let i = 0; i <= str.length - 1; i++) {
      if (!Number.isNaN(Number(str[i])) && str[i] !== ' ') {
        emptyStr += str[i];
      }
    }
    return emptyStr ? Number(emptyStr) : NaN;
  }
}
checkNumberInStr('ECMAScript 2022');

//task_3.2

function checkNumberInNumber (str) {
  let emptyStr = '';
  const convertString = String(str);
  for (let i = 0; i <= convertString.length - 1; i++) {
    if (!Number.isNaN(Number(convertString[i])) && convertString[i] !== ' ') {
      emptyStr += convertString[i];
    }
  }
  return emptyStr ? Number(emptyStr) : NaN;
}
checkNumberInNumber (2024);
