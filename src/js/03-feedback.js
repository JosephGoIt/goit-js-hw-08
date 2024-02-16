// Function to save form state to localStorage
// function saveFormState() {
//     const formData = {
//       email: document.querySelector('input[name="email"]').value,
//       message: document.querySelector('textarea[name="message"]').value
//     };
//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//   }
  
function saveInput () {
    const inputText = document.querySelector('.test');
    localStorage.setItem('enteredvalue', inputText.className);
}
  // Event listener for input event on the form
//   document.querySelector('.feedback-form').addEventListener('input', () => {
//     saveFormState();
//   });

document.querySelector('.test').addEventListener('click', () => {
    saveInput();
});