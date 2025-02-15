import Card from "../components/Card.js";

import FormValidator from"../components/FormValidator.js";


import Section from "../components/Section.js";

import "./index.css"

import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/Userinfo.js";

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



function getCardElement(cardData) {
  const card = new Card(cardData, "#card-template" , handleImageClick);
  return card.getView();
}

const popupWithImage = new PopupWithImage("#preview-image");


function handleImageClick(data) {
  popupWithImage.open({ name: data.name, link: data.link });
  popupWithImage.setEventListners();
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}



const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__popup_input_type_error",
  errorClass: "modal__popup_error_visible",
};

const popupWithEditProfileForm = new PopupWithForm(
  "#profile__edit-modal",
  handleProfileEditSubmit
);

const newCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleNewCardSubmit
);


const userInfo = new UserInfo(profileTitle, profileDescription)



const editFormValidator = new FormValidator( config, profileEditForm );
const addFormValidator = new FormValidator( config, addCardForm );
editFormValidator.enableValidation();
addFormValidator.enableValidation();

function handleProfileEditSubmit({title, description }){
  userInfo.setUserInfo(title, description);
};

function handleNewCardSubmit({ name, url }) {
  renderCard({ name, link: url }, cardListEl);
}

popupWithEditProfileForm.setEventListeners();

newCardPopup.setEventListeners();



profileEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  profileTitleInput.value = userData.name;
  profileDescriptionInput.value = userData.job;

  popupWithEditProfileForm.open();
});

addNewCardButton.addEventListener( "click" , () => {
  newCardPopup.open();
});



  const cardSection = new Section(
    {
      items: initialCards,
      renderer: (cardData) => {
        const card = new Card( cardData,"#card-template" , handleImageClick);
        const cardElement = card.getView();
        cardSection.addItem(cardElement);
      },
    },
    ".cards__list");

cardSection.renderItems();

