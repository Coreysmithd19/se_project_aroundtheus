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

function closePopUp() {
  profileEditModal.classList.remove("modal_opened");
}

function openPopUp() {
  profileEditModal.classList.add("modal_opened");
}

function getCardElement(cardData) {
 const cardElement = cardTemplate.cloneNode(true);
 const cardImage = cardElement.querySelector(".card__image");
 const cardTitleEl = cardElement.querySelector(".card__title");
 cardImage.src = cardData.link;
 cardImage.alt = cardData.name;
 cardTitleEl.textContent = cardData.name;
 return cardElement;
};

function handleProfileEditSubmit(e){
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp();
}

profileEditButton.addEventListener( "click" , () => {
 profileTitleInput.value = profileTitle.textContent;
 profileDescriptionInput.value = profileDescription.textContent;
 openPopUp();
});

profileModalCloseButton.addEventListener("click", closePopUp);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
const cardElement = getCardElement(cardData);
cardListEl.prepend(cardElement);
})