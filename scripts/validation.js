const toggleButtonState = (spotsNputList, button) => {
  const hasInvalidInput = spotsNputList.some(input => !input.validity.valid);
  button.disabled = hasInvalidInput;
};


const setEventListeners = (formLmnt) => {
  const spotsNputList = Array.from(formLmnt.querySelectorAll(".modal__input"));
  const sbmtBtn = formLmnt.querySelector(".modal__submit-btn");
};

toggleButtonState(spotsNputList, sbmtBtn);

spotsNputList.forEach(nputLement) => {


  nputLement.addEventListener("change", () => {
    checkInputValidity(formLmnt, nputLement);
    toggleButtonState(spotsNputList, sbmtBtn);


  }); //don't commit this just yet. //
};

const enableValidation = () => {
  const spotsFormList = Array.from(document.querySelectorAll(".modal__form"));
  spotsFormList.forEach((formLmnt) => {
    setEventListeners(formLmnt);
  });
};

enableValidation();
