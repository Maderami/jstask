let btnindex = document.querySelector('#btnindex');
const declar = document.querySelector('#duplicateField');

btnindex.onclick = function(){
    inputtextt = document.getElementById('inputtext');
    declar.textContent  = inputtextt.value;
    inputtextt.value = '';

}

