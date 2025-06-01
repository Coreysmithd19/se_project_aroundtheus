import Card from "../components/Card.js";

import FormValidator from"../components/FormValidator.js";


import Section from "../components/Section.js";

import "./index.css"

import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/Userinfo.js";
import {initialCards,config} from "../utils/constants.js"
import Api from "../components/Api.js";
import Popup from "../components/Popup.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const deleteCardConfirmButton = document.querySelector("#modal__delete-button");
const deleteCardConfirm = document.querySelector("#delete-confirmation");
const trashButton = document.querySelector("#card__trash-button");
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
const profileImage = document.querySelector(".profile__image")



function getCardElement(cardData) {
  const card = new Card(cardData, "#card-template" , handleImageClick,handleTrashButton);
  return card.getView();
}

const popupWithImage = new PopupWithImage("#preview-image");

popupWithImage.setEventListners();


function handleImageClick(data) {
  popupWithImage.open({ name: data.name, link: data.link });
}

function handleTrashButton(cardData) {
deleteCardPopup.open(cardData)
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardSection.addItem(cardElement);
}



const popupWithEditProfileForm = new PopupWithForm(
  "#profile__edit-modal",
  handleProfileEditSubmit
);

const newCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleNewCardSubmit
);

const deleteCardPopup = new PopupWithConfirmation(
  "#delete-confirmation",
  handleCardDelete
);


const userInfo = new UserInfo({
    profileTitle: profileTitle,
    profileDescription: profileDescription,
    profileImage: profileImage
});

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "6bc379b4-e2fd-4963-8b35-f48b85a38b35",
    "Content-Type": "application/json"
  }
});




const editFormValidator = new FormValidator( config, profileEditForm );
const addFormValidator = new FormValidator( config, addCardForm );
editFormValidator.enableValidation();
addFormValidator.enableValidation();


function handleProfileEditSubmit({ title, description }) {
  api.profileEdit({ title, description })
    .then((userData) => {
      UserInfo.setUserInfo({
        title: userData.name,
        description: userData.about
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

function handleNewCardSubmit({ name, url:link }) {
  api.addCard({ name, link })
    .then((cardData) => {
      renderCard({
        name: cardData.name,
        link: cardData.link
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

function handleCardDelete (cardData) {
  api.deleteCard(cardData._id)
  .then ((itemToDelete) => {
    console.log("This post has been deleted")
    cardData._removeCard(itemToDelete)


    deleteCardPopup.close();
    })
    .catch((err) => {
      console.error(err);
    });
  }


popupWithEditProfileForm.setEventListeners();

newCardPopup.setEventListeners();

deleteCardPopup.setEventListners();



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
      renderer: renderCard,
    },
    ".cards__list");


api.getInitialCards().then( res => cardSection.renderItems(res));

api.getUserInfo()
    .then((userData) => {
      userInfo.setUserInfo({
        title: userData.name,
        description: userData.about
      });
    })
    .catch((err) => {
      console.error(err);
    });
