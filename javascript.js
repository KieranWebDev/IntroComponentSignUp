const form = document.querySelector('form');
const inputs = document.querySelectorAll('.input');
const errorIcon = document.querySelectorAll('.err-icon');
const span = document.querySelectorAll('.err-msg');

const successMessage = document.querySelector('.successMsg');

// form values
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

// const inputContainer = document.querySelectorAll('.input-container');

// const firstName = document.querySelector('#first-name');

// const errBorder = document.querySelectorAll('.err-border');

// console.log(inputContainer);
// console.log(span);
// console.log(successMessage);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log('value ' + typeof inputs[0].value);

  let correctInputCount = 0;
  //   console.log(firstName.value);
  //   console.log(span[0].textContent);

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

  if (correctInputCount === 4) {
    successMessage.textContent = `success! Enjoy your free trial ${firstName.value}`;
    form.classList.add('hidden');
    const submittedValues = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };
    console.log(submittedValues);
  }
});
