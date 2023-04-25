const inputPrice = document.getElementById('price');
const inputDiscount = document.getElementById('discount');
const h1Result = document.getElementById('result');
const btnCalcular = document.getElementById('calcular');

const calcular = () => {
    let price = Number(inputPrice.value);
    let discount = Number(inputDiscount.value);

    if (price != "" && discount != "") {
        if (discount > 100) {
            alert('No puede existir un descuento mayor al 100%, no te daremos plata.')
            return;
        }
        let purchaseValue = (price * (100 - discount)) / 100;

        h1Result.innerText = `$ ${purchaseValue}`;
    } else {
        alert('Por favor llene los campos.');
    }
};

btnCalcular.addEventListener('click', calcular);