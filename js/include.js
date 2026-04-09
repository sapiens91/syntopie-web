async function loadIncludes() {
  const elements = document.querySelectorAll("[data-include]");

  for (const el of elements) {
    const file = el.getAttribute("data-include");

    try {
      const response = await fetch(file);

      if (!response.ok) {
        console.error(`Include konnte nicht geladen werden: ${file}`);
        continue;
      }

      el.innerHTML = await response.text();
    } catch (error) {
      console.error(`Fehler beim Laden von ${file}:`, error);
    }
  }

  initMobileMenu();

  // Wichtig: Signal an andere Skripte, dass jetzt alles geladen ist
  document.dispatchEvent(new Event("includesLoaded"));
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