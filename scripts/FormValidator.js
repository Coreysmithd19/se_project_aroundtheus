export default Class FormValidator {

   Constructor( settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass= settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass =  settings.errorClass;

    this._form = formEl;
   };

   function showInputError(this._formEl, inputEl, {this._inputErrorClass, this._errorClass}) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }
  
  function hideInputError(this._form, inputEl, {this._inputErrorClass, this._errorClass}) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClasss);
    errorMessageEl.textContent = ("");
    errorMessageEl.classList.remove(this._errorClass);
  }

function checkInputValidity(this._form, inputEl, config ){
    if(!inputEl.validity.valid) {
      showInputError(this._form, inputEl, config);
    }
    else{
        hideInputError(this._form, inputEl, config);
    }
}

   _toggleButtonState(this._inputSelector, this._submitButtonSelector, {this._inactiveButtonClass}) {
    let foundInvalid = false;
    this._inputSelector.forEach(this._inputSelector => {
      if(!this._inputSelector.validity.valid) {
        foundInvalid = true;
      }
    });
  
    if(foundInvalid) {
        this._submitButtonSelector.classList.add(this._inactiveButtonClass);
        this._submitButtonSelector.disabled = true;
    }else {
        this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
        this._submitButtonSelector.disabled = false;
    }
  }

   _setEventListeners() {
    const { inputSelector } = options;
    const inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    const submitButton = this._form.querySelector(options.this._submitButtonSelector);
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(this._form, inputEl, options);
        toggleButtonState(inputEls, submitButton, options);
      });
    });
  
    toggleButtonState(inputEls, submitButton, options);
   }

   enableValidation() {
    this._form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
      setEventListeners(formEl, config);
   }

 }

 const settings = {,
 inputSelector: ".modal__form-input",
 submitButtonSelector: ".modal__button",
 inactiveButtonClass: "modal__button_disabled",
 inputErrorClass: "modal__popup_input_type_error",
 errorClass: "modal__popup_error_visible",
 };

 