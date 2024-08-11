function showInputError(formEl, inputEl, {inputErrorClass, errorClass}) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(errorClass);
  }
  
  function hideInputError(formEl, inputEl, {inputErrorClass, errorClass}) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(inputErrorClass);
    errorMessageEl.textContent = ("");
    errorMessageEl.classList.remove(errorClass);
  }

function checkInputValidity(formEl, inputEl, config ){
    if(!inputEl.validity.valid) {
      showInputError(formEl, inputEl, config);
    }
    else{
        hideInputError(formEl, inputEl, config);
    }
}

function toggleButtonState(inputEls, submitButton, {inactiveButtonClass}) {
    let foundInvalid = false;
    inputEls.forEach(inputEl => {
      if(!inputEl.validity.valid) {
        foundInvalid = true;
      }
    });
  
    if(foundInvalid) {
      submitButton.classList.add(inactiveButtonClass);
      submitButton.disabled = true;
    }else {
      submitButton.classList.remove(inactiveButtonClass);
      submitButton.disabled = false;
    }
  }

  function setEventListeners(formEl, options) {
    const { inputSelector } = options;
    const inputEls = [...formEl.querySelectorAll(inputSelector)];
    const submitButton = formEl.querySelector(options.submitButtonSelector);
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(formEl, inputEl, options);
        toggleButtonState(inputEls, submitButton, options);
      });
    });
  
    toggleButtonState(inputEls, submitButton, options);
  }
  
  function enableValidation(config) {
    const formEls = [...document.querySelectorAll(config.formSelector)];
    formEls.forEach((formEl) => {
      formEl.addEventListener("submit", (e) => {
        e.preventDefault();
      });
      setEventListeners(formEl, config);
    });
  }
  
const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__form-input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__popup_input_type_error",
    errorClass: "modal__popup_error_visible",
  };

enableValidation(config);