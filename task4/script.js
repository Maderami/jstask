const aaa = document.querySelector('#changea');

function promptASimple(event){
   
    let prmptValue = prompt('Введите любое слово ');
    aaa.textContent = prmptValue;
    event.preventDefault();
}

aaa.addEventListener('click', promptASimple);