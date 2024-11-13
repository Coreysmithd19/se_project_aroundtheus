 export default class Popup {
    constructor({popupselector}) {
        this.popupelement = document.querySelector(popupselector)
        this.openedModal = document.querySelector(".modal_opened");
    }

    open () {
     this.popupelement.classList.add("modal_opened");
     document.addEventListener("keydown", handleEsc);
     modal.addEventListener("mousedown", handleModalClick);
    }

    close () {
      this.popupelement.classList.remove("modal_opened");
      document.removeEventListener("keydown", handleEsc);
      modal.removeEventListener("mousedown", handleModalClick);
    }

    handleEscClose (e) {
     if (e.key === "Escape") {
            closePopUp(this.openedModal);
          }
    }

    setEventListners () {
     handleModalClick(e)
            if (e.currentTarget === e.target || e.target.classList.contains("modal__close-button")) {
              closePopUp(e.currentTarget)
            }
    } 

};