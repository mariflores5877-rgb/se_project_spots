const hideInputError = (formElement, inputElement) => {
  const errorMsgElement = document.querySelector(`#${inputElement.id}-error`);
  errorMsgElement.textContent = "";
  errorMsgElement.classList.remove("error_active");
  inputElement.classList.remove("modal__input_error");
};

const showInputError = (formElement, inputElement, errorMsg) => {
  const errorMsgElement = document.querySelector(`#${inputElement.id}-error`);
  errorMsgElement.textContent = errorMsg;
  errorMsgElement.classList.add("error_active");
  inputElement.classList.add("modal__input_error");
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, submitBtn) => {

  }

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
