const form = document.querySelector('form');
const inputs = document.querySelectorAll('.input');
const errorIcon = document.querySelectorAll('.err-icon');
const span = document.querySelectorAll('.err-msg');

const successMessage = document.querySelector('.sucessMsg');
// const inputContainer = document.querySelectorAll('.input-container');

// const firstName = document.querySelector('#first-name');

// const errBorder = document.querySelectorAll('.err-border');

// console.log(inputContainer);
// console.log(span);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('value' + typeof inputs[0].value);

  let correctInputCount = 0;
  //   console.log(firstName.value);
  console.log(span[0].textContent);
  for (let i = 0; i < inputs.length; i++) {
    console.log(inputs[i].value);
    if (inputs[i].value === '') {
      errorIcon[i].classList.remove('hidden');
      inputs[i].classList.add('err-border');
      span[i].classList.remove('hidden');
    } else if (inputs[i].value !== '') {
      span[i].classList.remove('hidden');
      span[i].textContent = 'niceee ✅';
      span[i].style.color = 'green';
      errorIcon[i].classList.add('hidden');
      inputs[i].classList.remove('err-border');
      inputs[i].style.border = '2px solid green';
      correctInputCount++;
    }
  }
  console.log(correctInputCount);

  if 
  console.log('success');
});
