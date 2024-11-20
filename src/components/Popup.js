 export default class Popup {
    constructor({popupselector}) {
        this.popupelement = document.querySelector(popupselector)
        this.openedModal = document.querySelector(".modal_opened");
        this.handleEsc = this.handleEsc.bind(this);
        this.handleModalClick = this.handleModalClick.bind(this);
    }

    open () {
     this.popupelement.classList.add("modal_opened");
     document.addEventListener("keydown", this.handleEsc);
     this.popupelement.addEventListener("mousedown", this.handleModalClick);
    }

    close () {
      this.popupelement.classList.remove("modal_opened");
      document.removeEventListener("keydown", this.handleEsc);
      this.popupelement.removeEventListener("mousedown", this.handleModalClick());
    }

    handleEsc(e) {
     if (e.key === "Escape") {
            this.close(this.openedModal);
          }
    }

    handleModalClick(e) {
            if (e.currentTarget === e.target || e.target.classList.contains("modal__close-button")) {
              this.close(e.currentTarget)
            }
    } 

};