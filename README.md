<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<title>Syntopie Website – Redaktionsanleitung</title>
<style>
body{
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Arial,sans-serif;
  line-height:1.6;
  max-width:900px;
  margin:40px auto;
  padding:0 20px;
}
h1,h2,h3{margin-top:2rem}
code{
  background:#f4f4f4;
  padding:2px 6px;
  border-radius:4px;
}
pre{
  background:#f4f4f4;
  padding:15px;
  border-radius:8px;
  overflow:auto;
}
.note{
  background:#fff6e9;
  padding:12px;
  border-left:4px solid #2e7d32;
  margin:20px 0;
}
</style>
</head>
<body>

<h1>Redaktionsanleitung – Syntopie e.V. Website</h1>

<p>
Diese Anleitung erklärt, wie Inhalte auf der Website geändert oder ergänzt werden können,
ohne das Layout oder Design zu beschädigen.
</p>

<div class="note">
<strong>Wichtig:</strong> Nur Inhalte innerhalb der <code>.card</code>-Blöcke oder
innerhalb von <code>.container</code> bearbeiten. Klassen und Struktur nicht verändern.
</div>

<hr>

<h2>1. Grundstruktur einer Section</h2>

<p>Neue Abschnitte orientieren sich an dieser Struktur:</p>

<pre><code>&lt;section class="section anchor-space"&gt;
  &lt;div class="container grid grid-2"&gt;

    &lt;div class="card"&gt;
      &lt;h2&gt;Titel&lt;/h2&gt;
      &lt;p&gt;Text...&lt;/p&gt;
    &lt;/div&gt;

    &lt;figure class="card"&gt;
      &lt;img src="img/beispiel.jpg" alt="Beschreibung"&gt;
    &lt;/figure&gt;

  &lt;/div&gt;
&lt;/section&gt;
</code></pre>

<p>
Desktop: nebeneinander. <br>
Mobil: automatisch untereinander.
</p>

<hr>

<h2>2. Bilder unter dem Text einfügen</h2>

<pre><code>&lt;div class="card"&gt;
  &lt;h2&gt;Titel&lt;/h2&gt;
  &lt;p&gt;Textabschnitt...&lt;/p&gt;

  &lt;figure class="card" style="margin-top:1rem"&gt;
    &lt;img src="img/haus.jpg" alt="Außenansicht"&gt;
  &lt;/figure&gt;
&lt;/div&gt;
</code></pre>

<p><strong>Regeln:</strong></p>
<ul>
  <li>Bilder immer im Ordner <code>img/</code> speichern</li>
  <li>Immer ein sinnvolles <code>alt</code>-Attribut setzen</li>
</ul>

<hr>

<h2>3. Bilder neben dem Text einfügen</h2>

<p>Einfach das bestehende <code>grid grid-2</code> Layout nutzen:</p>

<pre><code>&lt;div class="container grid grid-2"&gt;

  &lt;div class="card"&gt;
    &lt;h2&gt;Titel&lt;/h2&gt;
    &lt;p&gt;Text links...&lt;/p&gt;
  &lt;/div&gt;

  &lt;figure class="card"&gt;
    &lt;img src="img/bild.jpg" alt="Beschreibung"&gt;
  &lt;/figure&gt;

&lt;/div&gt;
</code></pre>

<p>
Bild links? → Reihenfolge der beiden Blöcke tauschen.
</p>

<hr>

<h2>4. Absätze und Hervorhebungen</h2>

<h3>Absätze</h3>

<pre><code>&lt;p&gt;Erster Absatz...&lt;/p&gt;
&lt;p&gt;Zweiter Absatz...&lt;/p&gt;
</code></pre>

<p>Bitte keine mehrfachen <code>&lt;br&gt;</code> verwenden – stattdessen neue <code>&lt;p&gt;</code>-Elemente.</p>

<h3>Fettgedruckter Text</h3>

<pre><code>&lt;p&gt;
  Wir suchen &lt;strong&gt;Direktkredite&lt;/strong&gt; für den Hauskauf.
&lt;/p&gt;
</code></pre>

<hr>

<h2>5. Links einfügen</h2>

<h3>Externer Link</h3>

<pre><code>&lt;a href="https://www.syndikat.org/" target="_blank" rel="noopener"&gt;
  Mietshäusersyndikat
&lt;/a&gt;
</code></pre>

<h3>Interner Link (zu einem Abschnitt)</h3>

<pre><code>&lt;a href="#direktkredit"&gt;Direktkredit anbieten&lt;/a&gt;
</code></pre>

<p>
Der Ziel-Abschnitt braucht eine ID:
</p>

<pre><code>&lt;section id="direktkredit" class="section anchor-space"&gt;
</code></pre>

<h3>E-Mail-Link</h3>

<pre><code>&lt;a href="mailto:direktkredit@syntopie-ev.de"&gt;
  direktkredit@syntopie-ev.de
&lt;/a&gt;
</code></pre>

<h3>Telefon-Link</h3>

<pre><code>&lt;a href="tel:+496912345678"&gt;
  +49 69 123 456 78
&lt;/a&gt;
</code></pre>

<hr>

<h2>6. Buttons einfügen</h2>

<pre><code>&lt;a class="btn" href="#direktkredit"&gt;
  Direktkredit anbieten
&lt;/a&gt;
</code></pre>

<p>Mehrere Buttons nebeneinander:</p>

<pre><code>&lt;div class="cta-actions"&gt;
  &lt;a class="btn" href="#"&gt;Button 1&lt;/a&gt;
  &lt;a class="btn" href="#"&gt;Button 2&lt;/a&gt;
&lt;/div&gt;
</code></pre>

<hr>

<h2>7. Was darf geändert werden?</h2>

<ul>
  <li>Texte in &lt;h2&gt;, &lt;p&gt;, &lt;summary&gt;</li>
  <li>Bilder (src austauschen)</li>
  <li>Links (href ändern)</li>
  <li>Reihenfolge von Bild/Text tauschen</li>
</ul>

<h2>Was darf NICHT geändert werden?</h2>

<ul>
  <li>class="..." löschen oder verändern</li>
  <li>CSS im &lt;style&gt;-Bereich ändern</li>
  <li>JavaScript unten im Dokument ändern</li>
  <li>Grundstruktur von &lt;section&gt; und &lt;container&gt; entfernen</li>
</ul>

<hr>

<h2>Fazit</h2>

<p>
Solange nur Inhalte innerhalb der <code>.card</code>-Blöcke geändert werden,
bleibt das Design stabil und mobil optimiert.
</p>

<p>
Bei Unsicherheiten lieber eine bestehende Section kopieren und anpassen,
statt eine komplett neue Struktur zu bauen.
</p>

</body>
</html>
