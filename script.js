const menuToggle = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelector(".navigation-links");
const currentYear = document.querySelector("#current-year");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
  navigationLinks.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open menu" : "Close menu");
  navigationLinks.classList.toggle("is-open", !isExpanded);
});

navigationLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

currentYear.textContent = String(new Date().getFullYear());
