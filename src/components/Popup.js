 export default class Popup {
    constructor({popupSelector}) {
        this.popupElement = document.querySelector(popupSelector)
        this.openedModal = document.querySelector(".modal_opened");
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open () {
     this.popupElement.classList.add("modal_opened");
     document.addEventListener("keydown", this._handleEscClose);
    }

    close () {
      this.popupElement.classList.remove("modal_opened");
      document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose(event) {
      if (event.key === "Escape") {
        this.close();
      }
    }

  
    setEventListners() {
      this.popupElement.addEventListener("mousedown", (event) => {
        if (
          event.target.classList.contains("modal_opened") ||
          event.target.classList.contains("modal__close-button")
        ) {
          this.close();
        }
      });
    }
  }