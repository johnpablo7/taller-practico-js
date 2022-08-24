const inputPrice = document.querySelector('#price');
// const inputDiscount = document.querySelector('#discount');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

// const arrayUObjecto = undefined; // ['cupones': descuento] {}?

// const couponsObj = {
//   'ABC025': 25,
//   'ABC030': 30,
//   'ABC035': 35,
//   'ABC040': 40,
// }

const couponsList = [];
couponsList.push({
  name: 'ABC025',
  discount: 25,
});
couponsList.push({
  name: 'ABC030',
  discount: 30,
});
couponsList.push({
  name: 'ABC035',
  discount: 35,
});

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = 'Por favor llenar el formulario';
    return;
  }

  let discount;

  function isCouponInArray(couponElement) { // {name, discount}
    return couponElement.name == coupon;
  }

  // const couponInArray = couponsList.filter(isCouponInArray); // [{}]
  const couponInArray = couponsList.find(isCouponInArray); // {}

  // if (couponInArray.length > 0) {
  //   discount = couponInArray[0].discount;
  // } else {
  //   pResult.innerText = 'El cupón no es válido';
  //   return;
  // }

  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    pResult.innerText = 'El cupón no es válido';
    return;
  }

  console.log({
    coupon,
    discount,
    couponInArray,
    couponsList
  });


  // Para los objectos:

  // if (couponsObj[coupon]) {
  //   discount = couponsObj[coupon];
  // } else {
  //   pResult.innerText = 'El cupón no es válido';
  //   return;
  // }

  // switch (coupon) {
  //   case 'ABC123':
  //     discount = 30;
  //     break;
  //   case '123ABC':
  //     discount = 25;
  //     break;

  //   default:
  //     pResult.innerText = 'El cupón no es válido';
  //     return;
  // }

  // if (coupon == 'ABC123') {
  //   discount = 30;
  // } else if (coupon == '123ABC') {
  //   discount = 25;
  // } else {
  //   pResult.innerText = 'El cupón no es válido';
  //   return;
  // }

  // console.log({ price, discount });

  // if (discount > 100) {
  //   pResult.innerText = 'El descuento debe de ser menor a 100%, ERROR!';
  //   return;
  // }

  const newPrice = (price * (100 - discount)) / 100;
  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}