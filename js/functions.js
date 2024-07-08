//Task-1
function checkLengthString (str, maxLength) {
  return (str.length <= maxLength);
}
checkLengthString();

//Task-2
function checkPalindrome (str) {
  const newStr = str.replaceAll(' ', '').toLowerCase();
  let emptyStr = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    const char = newStr.at(i);
    emptyStr += char;
  }
  return (emptyStr === newStr);
}
checkPalindrome();

//Task-3.1
function checkNumberInStr (str) {
  let emptyStr = '';
  for (let i = 0; i <= str.length - 1; i++) {
    if (!Number.isNaN(Number(str[i])) && str[i] !== ' ') {
      emptyStr += str[i];
    }
  }
  return emptyStr ? Number(emptyStr) : NaN;
}
checkNumberInStr();

//Task-3.2
function checkNumberInNum (str) {
  let emptyStr = '';
  const convertString = String(str);
  for (let i = 0; i <= convertString.length - 1; i++) {
    if (!Number.isNaN(Number(convertString[i])) && convertString[i] !== ' ') {
      emptyStr += convertString[i];
    }
  }
  return emptyStr ? Number(emptyStr) : NaN;
}
checkNumberInNum();

