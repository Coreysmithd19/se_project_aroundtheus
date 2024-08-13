const initialCards = [
    {
    name:"Yosemite Valley",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    },
    {
    name:"Lake Louise",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    },
    {
    name:"Bald Mountains",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    },
    {
    name:"Latemar",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    },
    {
    name:"National Park",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    },
    {
    name:"Lago di Braies",
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    },
];

const profileEditButton =document.querySelector("#profile__edit-button");
const profileEditModal = document.querySelector("#profile__edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const profileModalCloseButton = profileEditModal.querySelector("#modal-closed-button");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");
const addNewCardButton = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#add-card-modal")
const addNewCardButtonClose = addCardModal.querySelector("#modal-closed-button");
const previewImageModal = document.querySelector("#preview-image");
const previewImage = document.querySelector(".modal__image");
const previewImageButtonClose = previewImageModal.querySelector("#modal-closed-button");
const previewImageTitle = document.querySelector(".modal__title");
const addCardForm = addCardModal.querySelector("#add-card-form");
const cardTitleInput = addCardForm.querySelector("#place-title");
const cardUrlInput = addCardForm.querySelector("#place-image");

function closePopUp(modal) {
 modal.classList.remove("modal_opened");
 document.removeEventListener("keydown", handleEsc);
 modal.removeEventListener("mousedown", handleModalClick);
}

function openPopUp(modal) {
 modal.classList.add("modal_opened");
 document.addEventListener("keydown", handleEsc);
 modal.addEventListener("mousedown", handleModalClick);
}


function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

function handleModalClick(e) {
  if (e.currentTarget === e.target || e.target.classList.contains("modal__close-button")) {
    closePopUp(e.currentTarget)
  }
}

function handleEsc(e) {
  if (e.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closePopUp(openedModal);
  }
};


function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const trashButton = cardElement.querySelector(".card__trash-button")

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  trashButton.addEventListener("click", () => {
    cardElement.remove();
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button-active")
  });

  cardImage.addEventListener("click", function () {
    previewImage.src = cardData.link;
    previewImage.alt = cardData.name;
    previewImageTitle.textContent = cardData.name;
    openPopUp(previewImageModal);
  });
  return cardElement;
 
};

function handleProfileEditSubmit(e){
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp(profileEditModal);
};

function handleNewCardSubmit(e){
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link}, cardListEl);
  e.target.reset();
  closePopUp(addCardModal);
};

profileEditButton.addEventListener( "click" , () =>  {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopUp(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

addCardForm.addEventListener("submit", handleNewCardSubmit);

addNewCardButton.addEventListener( "click" , () => openPopUp(addCardModal));

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));