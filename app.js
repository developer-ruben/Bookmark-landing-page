const questions = document.querySelectorAll(".faq__question");
const form = document.querySelector("#form");
const email = document.querySelector("#email");

const tabs = document.querySelectorAll(".features-section__nav-button");

const items = document.querySelector(".features-section__items");

const menuButton = document.querySelector(".header__button");
const menuButtonIcon = menuButton.querySelector("img");
const logo = document.querySelector("#logo");

const nav = document.querySelector(".header .nav");
const overlay = document.querySelector(".overlay");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Open primary navigation" : "Close primary navigation",
  );
  menuButtonIcon.src = isOpen
    ? "./images/icon-hamburger.svg"
    : "./images/icon-close.svg";

  logo.src = isOpen
    ? "./images/logo-bookmark.svg"
    : "./images/logo-bookmark-nav.svg";

  nav.classList.toggle("nav--show", !isOpen);
  overlay.classList.toggle("overlay--show", !isOpen);
});

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Slide to the selected panel
    items.style.transform = `translateX(-${index * (100 / 3)}%)`;

    // Update active tab styling
    tabs.forEach((item) => {
      item.classList.remove("features-section__nav-button--active");
      item.setAttribute("aria-selected", "false");
    });

    tab.classList.add("features-section__nav-button--active");
    tab.setAttribute("aria-selected", "true");
  });
});

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".faq__item");
    const isActive = item.classList.contains("faq__item--active");

    // Close all FAQ items
    questions.forEach((button) => {
      button.closest(".faq__item").classList.remove("faq__item--active");
      button.setAttribute("aria-expanded", "false");
    });

    // Open the clicked item if it was previously closed
    if (!isActive) {
      item.classList.add("faq__item--active");
      question.setAttribute("aria-expanded", "true");
    }
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

  form.classList.toggle("form--error", !isValid);

  if (isValid) {
    form.submit();
  }
});
