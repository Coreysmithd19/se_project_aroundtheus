import Popup from "./Popup";

export default class PopupWithIamge extends Popup {
    constructor({popupselector}){
        super({popupselector})
       this.previewImage = document.querySelector(".modal__imgae_popup");
       this.previewImageTitle = document.querySelector(".modal__title");
    }

    open(data) {
        const cardImagePopup = document.querySelector("#open-image-modal");
        const imageDescriptionElement = document.querySelector("#image-description-modal");
       this.previewImage.src = data.link;
       this.previewImage.alt = data.name;
       this.previewImageTitle.textContent = data.name;
       super.open();
    }
}