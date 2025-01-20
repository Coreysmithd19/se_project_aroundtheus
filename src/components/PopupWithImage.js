import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupselector){
        super({popupselector})
       this.previewImage = document.querySelector(".modal__imgae_popup");
       this.previewImageTitle = document.querySelector(".modal__title");
    }

    open(data) {
       this.previewImage.src = data.link;
       this.previewImage.alt = data.name;
       this.previewImageTitle.textContent = data.name;
       super.open();
    }
}