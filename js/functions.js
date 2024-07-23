/*
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

    if (!Number.isNaN(Number(str[i])) && str[i] !== ' ') {
      emptyStr += str[i];

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
*/


//module5-task2
function getTimeinMin (time) {
  const [hours, minutes] = time.split(':');
  const minutesConvert = 60;
  return hours * minutesConvert + parseInt(minutes, 10);
}

function checkMeetingTime (startWorkingDay, finishWorkingDay, startMeetingTime, durationMeeting) {
  const startWorkingDayInMin = getTimeinMin(startWorkingDay);
  const finishWorkingDayInMin = getTimeinMin(finishWorkingDay);
  const startMeetingTimeInMin = getTimeinMin(startMeetingTime);

  return startMeetingTimeInMin >= startWorkingDayInMin &&
  startMeetingTimeInMin + durationMeeting <= finishWorkingDayInMin;
}

/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/
(checkMeetingTime('08:00', '17:30', '14:00', 90)); // true
(checkMeetingTime('8:0', '10:0', '8:0', 120)); // true
(checkMeetingTime('08:00', '14:30', '14:00', 90)); // false
(checkMeetingTime('14:00', '17:30', '08:0', 90)); // false
(checkMeetingTime('8:00', '17:30', '08:00', 900)); // false
