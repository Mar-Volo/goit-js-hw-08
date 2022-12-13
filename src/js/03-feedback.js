import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const button = document.querySelector('form, button');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const values = {};
form.addEventListener('input', throttle(saveValues, 500));
button.addEventListener('submit', resetForm);
checkForm();
function saveValues(e) {
  values[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(values));
}

function resetForm(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
function checkForm() {
  if (JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))) {
    form.elements.email.value =
      JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email || '';

    form.elements.message.value =
      JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message || '';
  }
}

