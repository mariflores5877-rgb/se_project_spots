const setEventListeners = (formLmnt) => {
  const spotsNputList = Array.from(formLmnt.querySelectorAll(".modal__input"));
  const sbmtBtn = formLmnt.querySelector(".modal__submit-btn");
};

const enableValidation = () => {
  const spotsFormList = Array.from(document.querySelectorAll(".modal__form"));
  spotsFormList.forEach((formLmnt) => {
    setEventListeners(formLmnt);
  });
};

enableValidation();
