const form = document.querySelector('form');

const firstName = document.querySelector('#first-name');

const inputs = document.querySelectorAll('input');
// const errBorder = document.querySelectorAll('.err-border');

const inputContainer = document.querySelectorAll('.input-container');
const errorIcon = document.querySelectorAll('.err-icon');

const span = document.querySelectorAll('.err-msg');
console.log(inputContainer);
// console.log(span);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(inputs[0]);

  //   console.log(firstName.value);
  if (inputs[0].value === '') {
    span[0].textContent = 'First Name cannot be empty';
    errorIcon[0].classList.remove('hidden');
    inputs[0].classList.add('err-border');
  } else if (inputs[0].value !== '') {
    span[0].textContent = 'Nicee ✅';
    span[0].style.color = 'green';
    errorIcon[0].classList.add('hidden');
    inputs[0].classList.remove('err-border');
  }
});
