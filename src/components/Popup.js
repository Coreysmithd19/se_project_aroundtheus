 export default class Popup {
    constructor({popupselector}) {
        this.popupelement = document.querySelector(popupselector)
        this.openedModal = document.querySelector(".modal_opened");
        this._handleEscClose = this._handleEscClose.bind(this);
        this.handleModalClick = this._handleModalClick.bind(this);
    }

    open () {
     this.popupelement.classList.add("modal_opened");
     document.addEventListener("keydown", this._handleEscClose);
     this.popupelement.addEventListener("mousedown", this._handleModalClick);
    }

    close () {
      this.popupelement.classList.remove("modal_opened");
      document.removeEventListener("keydown", this._handleEscClose);
      this.popupelement.removeEventListener("mousedown", this._handleModalClick);
    }

    _handleEscClose(event) {
      if (event.key === "Escape") {
        this.close();
      }
    }

    _handleModalClick = (e) => {
      if (e.target.classList.contains("modal__close-button")) {
          this.close();
      }
  };
  
    setEventListners() {
      this.popupelement.addEventListener("mousedown", (event) => {
        if (
          event.target.classList.contains("modal_opened") ||
          event.target.classList.contains("modal__close-button")
        ) {
          this.close();
        }
      });
    }
  }