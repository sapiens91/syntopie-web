function fmtEUR0(n){
  return new Intl.NumberFormat("de-DE", {
    style:"currency",
    currency:"EUR",
    maximumFractionDigits:0
  }).format(n);
}

function fmtEUR2(n){
  return new Intl.NumberFormat("de-DE", {
    style:"currency",
    currency:"EUR",
    minimumFractionDigits:2,
    maximumFractionDigits:2
  }).format(n);
}

async function loadFinance(){
  try{
    const res = await fetch("/.netlify/functions/finance", { cache: "no-store" });
    const data = await res.json();
    if(!res.ok) throw new Error(data?.error || "Fehler beim Laden");

    const pct = Math.max(0, Math.min(1, Number(data.progress))) * 100;

    document.getElementById("kpi-goal").textContent = fmtEUR0(data.ziel);
    document.getElementById("kpi-current").textContent = fmtEUR0(data.eingeworben);
    document.getElementById("kpi-price").textContent = fmtEUR0(data.kaufpreis);
    document.getElementById("kpi-rent").textContent =
      fmtEUR2(data.mieteProQm) + " / m²";

    document.getElementById("progress-fill").style.width =
      pct.toFixed(1) + "%";

    document.getElementById("progress-amounts").textContent =
      fmtEUR0(data.eingeworben) +
      " von " +
      fmtEUR0(data.ziel) +
      " (" +
      pct.toFixed(1) +
      "%)";
  } catch(e){
    console.error(e);
    document.getElementById("progress-amounts").textContent =
      "Finanzierungsdaten aktuell nicht verfügbar.";
  }
}

loadFinance();
document.getElementById('year').textContent = new Date().getFullYear();
