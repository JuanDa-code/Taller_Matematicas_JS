// Descuentos
const inputPrice = document.getElementById('price');
const inputDiscount = document.getElementById('discount');
const h1Result = document.getElementById('result');
const btnCalcular = document.getElementById('calcular');

// Cupones
const inputPriceCoupon = document.getElementById('priceCoupon');
const inputCoupon = document.getElementById('coupon');
const h1ResultCoupon = document.getElementById('resultCoupon');
const btnCalcularCoupon = document.getElementById('calcularCoupon');

const validCoupons = [
    {
        coupon: 'N4V1D4D',
        discount: 20,
    },
    {
        coupon: 'F1NW33K3ND',
        discount: 10,
    },
    {
        coupon: 'BL4CKFR1D4Y',
        discount: 40,
    }
];

const couponObj = {
    'JuanDacode': 50,
    'PLATZI': 25,
    'JuanDC': 10
}

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

const calcularCoupon = () => {
    let priceCoupon = Number(inputPriceCoupon.value);
    let coupon = inputCoupon.value;

    
    if (!priceCoupon || !coupon) {
        alert('Por favor llene los campos.');
        return;
    }

    // Metodo del profesor con arrays de tipo objeto
    let discount

    // Metodo filter nos devuelve un array
    // const couponInArray = validCoupons.filter((validCoupon) => {
    //     return validCoupon.coupon == coupon;
    // })

    // Metodo find nos devuelve un objeto
    const couponInArray = validCoupons.find((validCoupon) => {
        return validCoupon.coupon == coupon;
    });

    if (couponInArray) {             // En caso de utilizar el metodo filter usar: couponInArray.length > 0
        discount = couponInArray.discount;   // Y aqui: couponInArray[0].discount

        let purchaseValueCoupon = (priceCoupon * (100 - discount)) / 100;

        h1ResultCoupon.innerText = `$ ${purchaseValueCoupon}`;
    } else {
        h1ResultCoupon.innerText = `Lo lamentamos, el cupon no es valido.`
        return;
    }

    // Metodo del profesor con objetos
    // let discount;

    // if (couponObj[coupon]) {
    //     discount = couponObj[coupon];

    //     let purchaseValueCoupon = (priceCoupon * (100 - discount)) / 100;
    
    //     h1ResultCoupon.innerText = `$ ${purchaseValueCoupon}`;
    // } else {
    //     h1ResultCoupon.innerText = `Lo lamentamos, el cupon no es valido.`
    //     return;
    // }

    // Metodo propio
    // if (priceCoupon != "" && coupon != "") {
    //     let isValidCoupon = false;
    //     let discount = 0;

    //     validCoupons.forEach(validCoupon => {
    //         if (validCoupon.coupon == coupon) {
    //             isValidCoupon = true;
    //             discount = validCoupon.discount;
    //         }
    //     });

    //     if (isValidCoupon == true) {
    //         let purchaseValueCoupon = (priceCoupon * (100 - discount)) / 100;

    //         h1ResultCoupon.innerText = `$ ${purchaseValueCoupon}`;
    //     } else {
    //         return alert('Lo lamentamos, el cupon no es valido.')
    //     }
    // } else {
    //     alert('Por favor llene los campos.')
    // }
}

btnCalcular.addEventListener('click', calcular);
btnCalcularCoupon.addEventListener('click', calcularCoupon)