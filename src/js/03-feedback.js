import throttle from 'lodash.throttle';

const refs = {
  inputEl: document.querySelector('[type="email"]'),
  textareaEl: document.querySelector('[name="message"]'),
  formEl: document.querySelector('.feedback-form'),
};

const FORM_VALUE_KEY = 'feedback-form-state';

refs.formEl.addEventListener('submit', onSubmitForm);
refs.formEl.addEventListener('input', throttle(onFormValue, 500));

populateForm();

function onFormValue(e) {
  const obj = {
    email: refs.inputEl.value.trim(),
    message: refs.textareaEl.value.trim(),
  };
  localStorage.setItem(FORM_VALUE_KEY, JSON.stringify(obj));
}

function populateForm() {
  const savedValue = JSON.parse(localStorage.getItem(FORM_VALUE_KEY));
  if (savedValue) {
    const { email, message } = savedValue;
    refs.inputEl.value = email;
    refs.textareaEl.value = message;
  }
}

function onSubmitForm(evt) {
  evt.preventDefault();
  console.log('done');
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(FORM_VALUE_KEY)));
  localStorage.removeItem(FORM_VALUE_KEY);
}
