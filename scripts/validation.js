const config = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_error",
  errorClass: "error__active",
};

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
  if (hasInvalidInput(inputList)) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
};

const disableBtn = (buttonElement) => {
  buttonElement.disabled = true;
};

const disableAllSubmitBtns = (buttonElements) => {
  buttonElements.forEach(disableBtn);
};

const resetValidation = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector),
  );

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, config);
  });

  toggleButtonState(
    inputList,
    formElement.querySelector(config.submitButtonSelector),
    config,
  );
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
  });
};

function enableValidation() {
  const spotsFormList = Array.from(document.querySelectorAll(".modal__form"));
  spotsFormList.forEach((formElement) => {
    setEventListeners(formElement);
  });
}

enableValidation();
