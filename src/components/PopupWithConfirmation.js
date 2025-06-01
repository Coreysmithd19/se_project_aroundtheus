import Popup from "./Popup";
 
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleSubmit) {
    super({popupSelector});
    this._handleSubmit = handleSubmit;
    this._form = this.popupElement.querySelector(".modal__form");
  }


  open(card) {
  this._card = card;
  super.open();
}


  setEventListners() {
    super.setEventListners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._card);
      evt.target.reset();
      super.close();
    });
  }
}