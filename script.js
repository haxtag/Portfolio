const menuToggle = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelector(".navigation-links");
const currentYear = document.querySelector("#current-year");
const projectList = document.querySelector("#project-list");
const projectDialog = document.querySelector("#project-dialog");
const projectDialogClose = projectDialog.querySelector(".project-dialog-close");
const projectDialogType = projectDialog.querySelector(".project-dialog-type");
const projectDialogTitle = projectDialog.querySelector(".project-dialog-title");
const projectDialogSummary = projectDialog.querySelector(".project-dialog-summary");
const projectDialogTags = projectDialog.querySelector(".project-dialog-tags");
const projectDialogDescription = projectDialog.querySelector(".project-dialog-description p");
const projectDialogLinks = projectDialog.querySelector(".project-dialog-links");

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

projectList.addEventListener("click", (event) => {
  const openButton = event.target.closest(".project-card-open");
  if (!openButton) {
    return;
  }

  const card = openButton.closest(".project-card");
  const projectType = card.querySelector(".project-type");
  const projectTitle = card.querySelector(".project-title");
  const projectDescription = card.querySelector(".project-description");
  const projectTags = card.querySelector(".project-tags");
  const projectDetails = card.querySelector(".project-expanded p");
  const projectLinks = card.querySelector(".project-links");

  projectDialogType.replaceChildren(...[...projectType.childNodes].map((node) => node.cloneNode(true)));
  projectDialogTitle.textContent = projectTitle.textContent;
  projectDialogSummary.textContent = projectDescription.textContent;
  projectDialogTags.replaceChildren(...[...projectTags.children].map((tag) => tag.cloneNode(true)));
  projectDialogDescription.textContent = projectDetails.textContent;
  projectDialogLinks.replaceChildren(...[...projectLinks.children].map((link) => link.cloneNode(true)));
  projectDialog.showModal();
});

projectDialogClose.addEventListener("click", () => {
  projectDialog.close();
});

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) {
    projectDialog.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    if (projectDialog.open) {
      event.preventDefault();
      projectDialog.close();
    }
  }
});

currentYear.textContent = String(new Date().getFullYear());
