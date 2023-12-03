const consoleLog = document.querySelector('#consoleLog');
const simplecons =  document.querySelector('#simplecons');
const alertt = document.querySelector('#alert');
const alertt1 = document.querySelector('#alertchtxt');
const promptt = document.querySelector('#prompt');
const promptt1 = document.querySelector('#promptchtxt');

function consoleLOG(){
    alert('Метод выводит сообщение в web-console');
}

consoleLog.addEventListener('click', consoleLOG);


function consoleSimple(){
    simplecons.textContent = 'Пример использования команды console.log';
}

simplecons.addEventListener('click', consoleSimple);

function alertSimple(){
    alert('Метод выводит сообщение в  отдельном модальном окне для информирования ');
}

alertt.addEventListener('click', alertSimple);

function alertSimpleChange(){
    alert('Метод выводит сообщение в  отдельном модальном окне для информирования об изменении объекта');
    alertt1.textContent = 'Пример использования команды alert';
}

alertt1.addEventListener('click', alertSimpleChange);

function promptSimple(){
    alert('Метод выводит сообщение в  отдельном модальном окне для информирования о необходимости ввести значение');
    let prmptValue = prompt('Введите любое число');
    promptt.textContent = 'В окне по методу Prompt() было введено значение' + prmptValue;
}

promptt.addEventListener('click', promptSimple);


function promptSimpleChange(){
    alert('Метод выводит сообщение в  отдельном модальном окне для информирования об изменении объекта');
    let prmpt1Value = prompt('Введите любой техст');
    promptt1.textContent = 'Пример использования команды prompt' + ' - ' + prmpt1Value;
}

promptt1.addEventListener('click', promptSimpleChange);
