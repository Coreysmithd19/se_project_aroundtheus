export default Class formValidator {

   Constructor( settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass= settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass =  settings.errorClass;

    this._form = formEl;
   };

    showInputError(_form, inputEl, {_inputErrorClass, _errorClass}) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }
  
   hideInputError(_form, inputEl, {_inputErrorClass, _errorClass}) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClasss);
    errorMessageEl.textContent = ("");
    errorMessageEl.classList.remove(this._errorClass);
  }

   checkInputValidity(_form, inputEl, config ){
    if(!inputEl.validity.valid) {
      showInputError(_form, inputEl, config);
    }
    else{
        hideInputError(_form, inputEl, config);
    }
}

   _toggleButtonState(_inputSelector, _submitButtonSelector, {_inactiveButtonClass}) {
    let foundInvalid = false;
    this._inputSelector.forEach(_inputSelector => {
      if(!_inputSelector.validity.valid) {
        foundInvalid = true;
      }
    });
  
    if(foundInvalid) {
        this._submitButtonSelector.classList.add(_inactiveButtonClass);
        this._submitButtonSelector.disabled = true;
    }else {
        this._submitButtonSelector.classList.remove(_inactiveButtonClass);
        this._submitButtonSelector.disabled = false;
    }
  }

   _setEventListeners() {
    const { inputSelector } = options;
    const inputEls = [...this._form.querySelectorAll(_inputSelector)];
    const submitButton = this._form.querySelector(options._submitButtonSelector);
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

 