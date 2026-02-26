const showInputError = (formElement, inputElement, errorMsg) => {
  const errorMsgElement = document.querySelector(`#${inputElement.id}-error`);
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
};

const toggleButtonState = (inputList, button) => {
  const hasInvalidInput = inputList.some((input) => !input.validity.valid);
  button.disabled = hasInvalidInput;
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const submitBtn = formElement.querySelector(".modal__submit-btn");

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
