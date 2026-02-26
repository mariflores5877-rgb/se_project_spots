const checkInputValidity = (formLmnt, nputLement) => {
  console.log(nputLement.validity);
};

const toggleButtonState = (spotsNputList, button) => {
  const hasInvalidInput = spotsNputList.some((input) => !input.validity.valid);
  button.disabled = hasInvalidInput;
};

const setEventListeners = (formLmnt) => {
  const spotsNputList = Array.from(formLmnt.querySelectorAll(".modal__input"));
  const sbmtBtn = formLmnt.querySelector(".modal__submit-btn");

  toggleButtonState(spotsNputList, sbmtBtn);

  spotsNputList.forEach((nputLement) => {
    nputLement.addEventListener("input", () => {
      checkInputValidity(formLmnt, nputLement);
      toggleButtonState(spotsNputList, sbmtBtn);
    });
    nputLement.addEventListener("blur", () => {
      checkInputValidity(formLmnt, nputLement);
      toggleButtonState(spotsNputList, sbmtBtn);
    });
  });
};

function enableValidation() {
  const spotsFormList = Array.from(document.querySelectorAll(".modal__form"));
  spotsFormList.forEach((formLmnt) => {
    setEventListeners(formLmnt);
  });
}

enableValidation();
