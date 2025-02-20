import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit){
        super({popupSelector})
        this.popupForm = this.popupElement.querySelector(".modal__form")
        this.handleFormSubmit = handleFormSubmit
    }

    _getInputValues() {
        const inputList = this.popupForm.querySelectorAll(".modal__form-input");
        const formValues = {};
        inputList.forEach(input => {
          formValues[input.name] = input.value;
        });
        return formValues;
      }

    setEventListeners() {
        super.setEventListners();
        this.popupForm.addEventListener("submit", (e) => {
          e.preventDefault();
          this.handleFormSubmit(this._getInputValues());
          e.target.reset();
          super.close();
        });

    }

    }
