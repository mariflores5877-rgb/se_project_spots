const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClosedBtn =
  editProfileModal.querySelector(".modal__close-btn");

const editProfileForm = editProfileModal.querySelector(".modal__form");

const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);

const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-descriptive-input"
);

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClosedBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is_opened");
});

editProfileClosedBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is_opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is_opened");
});

newPostClosedBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is_opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is_opened");
}

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  console.log(editProfileNameInput.value);
  console.log(editProfileDescriptionInput.value);
  newPostModal.classList.remove("modal_is_opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
