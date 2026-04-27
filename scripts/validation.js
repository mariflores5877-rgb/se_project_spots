const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_error",
  errorClass: "error_active",
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorMsgElement = formElement.querySelector(
    `#${inputElement.id}-error`,
  );
  errorMsgElement.textContent = "";
  errorMsgElement.classList.remove(settings.errorClass);
  inputElement.classList.remove(settings.inputErrorClass);
};

const showInputError = (formElement, inputElement, errorMsg) => {
  const errorMsgElement = formElement.querySelector(
    `#${inputElement.id}-error`,
  );
  errorMsgElement.textContent = errorMsg;
  errorMsgElement.classList.add(settings.errorClass);
  inputElement.classList.add(settings.inputErrorClass);
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, submitBtn, settings) => {
  if (hasInvalidInput(inputList)) {
    disableBtn(submitBtn, settings);
  } else {
    enableBtn(submitBtn, settings);
  }
};

const disableBtn = (buttonElement, settings) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(settings.inactiveButtonClass);
};

const enableBtn = (buttonElement, settings) => {
  buttonElement.disabled = false;
  buttonElement.classList.remove(settings.inactiveButtonClass);
};

const disableAllSubmitBtns = (buttonElements, settings) => {
  buttonElements.forEach((btn) => disableBtn(btn, settings));
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
