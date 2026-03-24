async function loadIncludes() {
  const elements = document.querySelectorAll("[data-include]");

  for (const el of elements) {
    const file = el.getAttribute("data-include");
    const response = await fetch(file);
    el.innerHTML = await response.text();
  }

  initMobileMenu();
}

function initMobileMenu() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".menu-toggle");

  if (!nav || !toggle) return;
  if (toggle.dataset.bound === "true") return;

  toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  toggle.dataset.bound = "true";
}

loadIncludes();