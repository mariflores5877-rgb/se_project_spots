const settings = {
  formSelector: ".modal__form",
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

const disableBtn = (buttonElement, settings) => {
  buttonElement.disabled = true;
};

const disableAllSubmitBtns = (buttonElements, settings) => {
  buttonElements.forEach(disableBtn);
};

const resetValidation = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector),
  );

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, settings);
  });

  toggleButtonState(
    inputList,
    formElement.querySelector(settings.submitButtonSelector),
    settings,
  );
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector),
  );
  const submitBtn = formElement.querySelector(settings.submitButtonSelector);

  toggleButtonState(inputList, submitBtn, settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, submitBtn, settings);
    });
  });
};

function enableValidation(settings) {
  const spotsFormList = Array.from(
    document.querySelectorAll(settings.formSelector),
  );
  spotsFormList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  });
}

enableValidation(settings);
