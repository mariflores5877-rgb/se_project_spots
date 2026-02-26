const checkInputValidity = (formElement, inputElement) => {
  console.log(inputElement.validity);
};

const toggleButtonState = (inputList, button) => {
  const hasInvalidInput = inputList.some((input) => !input.validity.valid);
  button.disabled = hasInvalidInput;
};

const setEventListeners = (formLmnt) => {
  const inputList = Array.from(formLmnt.querySelectorAll(".modal__input"));
  const submitBtn = formLmnt.querySelector(".modal__submit-btn");

  toggleButtonState(inputList, submitBtn);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, submitBtn);
    });
    inputElement.addEventListener("blur", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, submitBtn);
    });
  });
};

function enableValidation() {
  const spotsFormList = Array.from(document.querySelectorAll(".modal__form"));
  spotsFormList.forEach((formElement) => {
    setEventListeners(formElement);
  });
}

enableValidation();
