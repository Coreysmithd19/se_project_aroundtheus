export default class Card {
    constructor({ name, link, _id}, cardSelector, handleImageClick, handleDeleteClick) {
      this._name = name;
      this._link = link;
      this._id = _id;
      this._cardSelector = cardSelector;
      this._handleImageClick = handleImageClick;
      this._handleDeleteClick = handleDeleteClick;
    }
    
    _getTemplate() {
      const cardElement = document
        .querySelector(this._cardSelector)
        .content.querySelector(".card")
        .cloneNode(true);
      return cardElement;
    }
  
    _setEventListeners() {
      this._cardEl
        .querySelector(".card__like-button")
        .addEventListener("click", () => {
          this._handleLikeIcon();
        });
  
      this._cardEl
        .querySelector(".card__trash-button")
        .addEventListener("click", () => {
          this._handleDeleteCard();
        });
  
        this._cardImageElement.addEventListener('click', () => {
            this._handleImageClick({name: this._name, link: this._link});
        });

    }
  
_handleDeleteCard() {
  this._handleDeleteClick(this);
}

_removeCard (){
  this._cardEl.remove();
}
  
    _handleLikeIcon() {
      this._cardEl
        .querySelector(".card__like-button")
        .classList.toggle("card__like-button-active");
    }
  
    getView() {
      this._cardEl = this._getTemplate();
      this._cardEl.querySelector('.card__title').textContent = this._name;
      this._cardImageElement = this._cardEl.querySelector('.card__image');
      this._cardImageElement.src = this._link;
      this._cardImageElement.alt = this._name;
  
      this._setEventListeners();
      return this._cardEl;
    }
  }