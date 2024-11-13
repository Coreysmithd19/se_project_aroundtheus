import Card from "../components/Card.js";

import FormValidator from"../components/FormValidator.js";

import "./index.css"

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

function getCardElement(cardData) {
  const card = new Card(cardData, "#card-template" , handleImageClick);
  return card.getView();
}

function handleImageClick(card) {
  previewImage.src = card.link;
  previewImage.alt = card.aname;
  previewImageTitle.textContent = card.name;
  openPopUp(previewImageModal);
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

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__popup_input_type_error",
  errorClass: "modal__popup_error_visible",
};

const editFormValidator = new FormValidator( config, profileEditForm );
const addFormValidator = new FormValidator( config, addCardForm );
editFormValidator.enableValidation();
addFormValidator.enableValidation();

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


initialCards.forEach((cardData) => renderCard(cardData));