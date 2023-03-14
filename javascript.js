// form selectors
const form = document.querySelector('form');
const inputs = document.querySelectorAll('.input');
const errorIcon = document.querySelectorAll('.err-icon');
const span = document.querySelectorAll('.err-msg');

// success form submission message selectors
const successMessageContainer = document.querySelector(
  '.success-message-container'
);
const successMessage = document.querySelector('.successMsg');
const trialInfoContainer = document.querySelector('.trial-info-container');
// form values
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

// function to capitalize form value names
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkFormSubmission(e) {
  e.preventDefault();

  // checks to ensure form inputs are valid before submitting
  let correctInputCount = 0;
  let correctEmail = false;

  // regex to confirm email is valid
  const emailRegex = /.+@.+\..+/;

  for (let i = 0; i < inputs.length; i++) {
    //checks if any inputs are empty strings
    if (inputs[i].value === '') {
      errorIcon[i].classList.remove('hidden');
      inputs[i].classList.add('err-border');
      span[i].textContent = `${inputs[i].placeholder} cannot be empty`;
      // if input is not an empty string
    } else if (inputs[i].value !== '') {
      span[i].classList.remove('hidden');
      span[i].textContent = 'niceee ✅';
      span[i].style.color = '#38cc8b';
      errorIcon[i].classList.add('hidden');
      inputs[i].classList.remove('err-border');
      inputs[i].style.border = '2px solid #38cc8b';

      correctInputCount++;
    }
  }

  // checks if email is valid
  if (!emailRegex.test(email.value)) {
    console.log('not valid email');
    span[2].classList.remove('hidden');
    span[2].textContent = 'Looks like this is not an email';
    span[2].style.color = 'red';
    inputs[2].style.border = '2px solid red';
    errorIcon[2].classList.remove('hidden');
    email.classList.add('err-border');
    email.textContent = email.value;
    // if email is valid
  } else if (emailRegex.test(email.value)) {
    correctEmail = true;
    inputs[2].style.color = '#3d3b48';
  }

  // checks if all input fields are valid and displays success message
  if (correctInputCount === 4 && correctEmail === true) {
    successMessage.textContent = ` ${capitalizeFirstLetter(
      firstName.value
    )}, you can now claim your free trial!`;
    successMessageContainer.classList.remove('hidden');
    form.classList.add('hidden');
    trialInfoContainer.classList.add('hidden');

    // prints object with form values to console.log
    const submittedValues = {
      firstName: capitalizeFirstLetter(firstName.value),
      lastName: capitalizeFirstLetter(lastName.value),
      email: email.value,
      password: password.value,
    };
    console.log(submittedValues);
  }
}

form.addEventListener('submit', checkFormSubmission);
