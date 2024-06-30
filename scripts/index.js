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
const AddNewCardButton = document.querySelector(".profile__add-button");
const AddCardModal = document.querySelector("#add-card-modal")
const AddNewCardButtonClose = AddCardModal.querySelector("#modal-closed-button");
const PreviewImageModal = document.querySelector("#preview-image");
const PreviewImage = document.querySelector(".modal__imgae_popup");
const PreviewImageButtonClose = PreviewImageModal.querySelector("#modal-closed-button");
const PreviewImageTitle = document.querySelector(".modal__image_title");
const AddCardForm = AddCardModal.querySelector("#add-card-form");
const CardTitleInput = AddCardForm.querySelector(".modal__input_type_title");
const CardUrlInput = AddCardForm.querySelector(".modal__input_type_url");

function closePopUp(modal) {
 modal.classList.remove("modal_opened");
}

function openPopUp(modal) {
 modal.classList.add("modal_opened");
}

function renderCard(cardData) {
  const CardElement = getCardElement(cardData);
  cardListEl.prepend(CardElement);
}

function likeButton(card) {
  card.classList.add("card__liked-button");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const LikeButton = cardElement.querySelector(".card__like-button");
  const TrashButton = cardElement.querySelector(".card__trash-button")

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  TrashButton.addEventListener("click", () => {
    cardElement.remove();
  });

  LikeButton.addEventListener("click", () => {
    LikeButton.classList.toggle("card__like-button-active")
  });

  cardImage.addEventListener("click", function () {
    PreviewImage.src = cardData.link;
    PreviewImageTitle.textContent = cardData.name;
    openPopUp(PreviewImageModal);
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
  const name = CardTitleInput.value;
  const link = CardUrlInput.value;
  renderCard({ name, link}, cardListEl);
  closePopUp(AddCardModal);
};

profileEditButton.addEventListener( "click" , () =>  {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopUp(profileEditModal);
});

profileModalCloseButton.addEventListener("click", () => closePopUp(profileEditModal));

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

AddCardForm.addEventListener("submit", handleNewCardSubmit);

AddNewCardButton.addEventListener( "click" , () => openPopUp(AddCardModal));

AddNewCardButtonClose.addEventListener( "click" , () => closePopUp(AddCardModal));

PreviewImageButtonClose.addEventListener( "click" , () => closePopUp(PreviewImageModal));

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));