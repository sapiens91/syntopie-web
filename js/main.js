function fmtEUR0(n) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  }).format(n);
}

function fmtEUR2(n) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(n);
}

async function loadFinance() {
  const goalEl = document.getElementById("kpi-goal");
  const currentEl = document.getElementById("kpi-current");
  const priceEl = document.getElementById("kpi-price");
  const rentEl = document.getElementById("kpi-rent");
  const fillEl = document.getElementById("progress-fill");
  const amountsEl = document.getElementById("progress-amounts");

  // Falls das Finanz-Partial noch nicht da ist oder auf einer anderen Seite fehlt:
  if (!goalEl || !currentEl || !priceEl || !rentEl || !fillEl || !amountsEl) {
    console.warn("Finanz-Dashboard-Elemente nicht gefunden.");
    return;
  }

  try {
    const res = await fetch("/.netlify/functions/finance", { cache: "no-store" });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Fehler beim Laden");
    }

    const pct = Math.max(0, Math.min(1, Number(data.progress))) * 100;

    goalEl.textContent = fmtEUR0(data.ziel);
    currentEl.textContent = fmtEUR0(data.eingeworben);
    priceEl.textContent = fmtEUR0(data.kaufpreis);
    rentEl.textContent = fmtEUR2(data.mieteProQm) + " / m²";

    fillEl.style.width = pct.toFixed(1) + "%";

    amountsEl.textContent =
      fmtEUR0(data.eingeworben) +
      " von " +
      fmtEUR0(data.ziel) +
      " (" +
      pct.toFixed(1) +
      "%)";
  } catch (e) {
    console.error("Fehler in loadFinance():", e);
    amountsEl.textContent = "Finanzierungsdaten aktuell nicht verfügbar.";
  }
}

function setYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function initPage() {
  loadFinance();
  setYear();
}

document.addEventListener("includesLoaded", initPage);