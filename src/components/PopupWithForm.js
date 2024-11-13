import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor(popupselector, handleFormSubmit){
        super({popupselector})
        this.popupForm = this.popupelement.querySelector(".modal__form")
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
        this._popupForm.addEventListener("submit", (e) => {
          e.preventDefault();
          this._handleFormSubmit(this._getInputValues());
        });

    }

    close() {
        this.popupForm.reset();
        super.close();
    }

    }
