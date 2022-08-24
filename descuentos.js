const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {

  const price = Number(inputPrice.value);
  const discount = Number(inputDiscount.value);

  console.log({ price, discount });

  if (!price || !discount) {
    pResult.innerText = 'Por favor llenar el formulario';
    return;
  }

  if (discount > 100) {
    pResult.innerText = 'El descuento debe de ser menor a 100%, ERROR!';
    return;
  }

  const newPrice = (price * (100 - discount)) / 100;
  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}