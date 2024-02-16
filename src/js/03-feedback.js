// Importing lodash.throttle library
import throttle from 'lodash.throttle';

// Function to save form state to localStorage
function saveFormState() {
  const formData = {
    email: document.querySelector('input[name="email"]').value,
    message: document.querySelector('textarea[name="message"]').value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Function to load form state from localStorage
function loadFormState() {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
}

// Function to clear form state from localStorage
function clearFormState() {
  localStorage.removeItem('feedback-form-state');
}

// Throttle the saveFormState function to update localStorage no more than once every 500 milliseconds
const throttledSaveFormState = throttle(saveFormState, 500);

// Event listener for input event on the form
document.querySelector('.feedback-form').addEventListener('input', () => {
  throttledSaveFormState();
});

// Event listener for submit event on the form
document.querySelector('.feedback-form').addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted');
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    console.log('Form data:', formData);
  }
  clearFormState();
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';
});

// Load form state when the page is loaded
window.addEventListener('load', () => {
  loadFormState();
});