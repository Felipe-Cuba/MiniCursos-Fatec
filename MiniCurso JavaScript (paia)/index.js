function showAlert() {
  const num  = 'minecraft';
  alert( `Clicou no botão: ${num}` );
}

function save(event) {
  event.preventDefault()
}

function showTotalPrice() {
  const price =+ document.getElementById('price').value;
  const installation =+ document.getElementById('installation').value;

  document.getElementById('totalPrice').innerHTML = price + installation; 
}

function populateDueData() {
  
  const numExists = num > 0;
  
}