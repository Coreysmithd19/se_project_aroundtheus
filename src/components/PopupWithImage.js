import Popup from "./Popup";

export default class PopupWithIamge extends Popup {
    constructor(popupselector){
        super(popupselector)
       this.previewImage = document.querySelector(".modal__image");
       this.previewImageTitle = document.querySelector(".modal__title");
    }

    open(data) {
       this.previewImage.src = data.link;
       this.previewImage.alt = data.aname;
       this.previewImageTitle.textContent = data.name;
       super.open();
    }
}