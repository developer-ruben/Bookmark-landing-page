const questions = document.querySelectorAll(".question");
const form = document.getElementById("form");
const email = document.getElementById("email");

const menu = document.getElementById("menu");
const menuOpenBtn = document.getElementById("menu-open");
const menuCloseBtn = document.getElementById("menu-close");

menuOpenBtn.addEventListener("click", () => menu.classList.add("nav--open"));
menuCloseBtn.addEventListener("click", () =>
  menu.classList.remove("nav--open"),
);

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

const submitForm = (e) => {
  e.preventDefault();

  if (email.value === "" || !validateEmail(email.value)) {
    form.querySelector(".form__group").classList.add("form__group--error");
    return;
  }

  form.querySelector(".form__group").classList.remove("form__group--error");

  console.log("Form submitted!");
};

const questionClick = (question) => {
  if (question.classList.contains("question--open")) {
    question.classList.remove("question--open");
    return;
  }

  document.querySelector(".question--open")?.classList.remove("question--open");

  question.classList.toggle("question--open");
};

form.addEventListener("submit", submitForm);

questions.forEach((question) => {
  question.addEventListener("click", () => questionClick(question));
});
