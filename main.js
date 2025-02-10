// BUTONLARI HTML DEN AL
//BUTONLARI DİNLE TIKLANMIŞ MI
//TIKLANIRSA ARTTIR VEYA AZALT
//TİTLE I BUL VE ONU ARTTIR VEYA AZALT

const btnArttir = document.querySelector(".arttir");
const btnAzalt = document.querySelector(".azalt");
const number = document.querySelector(".sayi");

let innitalNumber = 0;
btnArttir.addEventListener('click', () => {
    innitalNumber++;
    number.innerHTML = `<i>${innitalNumber}</i>`;
})


btnAzalt.addEventListener('click', () => {
    innitalNumber--;
    number.innerHTML =`<i>${innitalNumber}</i>`
})