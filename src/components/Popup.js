 export default class Popup {
    constructor({popupselector}) {
        this.popupelement = document.querySelector(popupselector)
        this.openedModal = document.querySelector(".modal_opened");
        this.handleEsc = this.handleEsc;
        this.handleModalClick = this.handleModalClick;
    }

    open () {
     this.popupelement.classList.add("modal_opened");
     document.addEventListener("keydown", this.handleEsc);
     this.popupelement.addEventListener("mousedown", this.handleModalClick);
    }

    close () {
      this.popupelement.classList.remove("modal_opened");
      document.removeEventListener("keydown", this.handleEsc);
      this.popupelement.removeEventListener("mousedown", this.handleModalClick);
    }

    _handleEscClose(event) {
      if (event.key === "Escape") {
        this.close();
      }
    }
  
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