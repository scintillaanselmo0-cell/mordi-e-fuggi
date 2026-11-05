# Mordi e Fuggi — sito web

Sito statico (HTML + CSS + JavaScript vanilla). Nessun server, nessun backend, nessuna build.
Pronto per GitHub Pages.

## Come modificare i contenuti
**Tutto si modifica da un solo file: `data.js`.**
Prezzi, orari, piatti, telefono, indirizzo, social: cambi una riga lì dentro e il sito si aggiorna da solo. Non devi mai toccare `index.html`, `styles.css` o `app.js`.

Esempi:
- **Cambiare un prezzo** → cerca il piatto in `menu:` e modifica `price: 8.00`.
- **Cambiare un orario** → modifica la riga del giorno in `hours:` (es. `5: [["11:00","15:00"],["18:30","00:30"]]`).
- **Aggiungere un piatto** → copia una riga `{ name:"…", price:…, desc:"…" }` dentro la categoria giusta.
- **Mettere i prezzi reali** → aggiornali e poi imposta `pricesVerified: true` per togliere l'avviso "prezzi indicativi".

## ⚠️ Da verificare prima di pubblicare (cerca `VERIFICARE` in `data.js`)
1. **`contact.whatsapp`** — metti il **cellulare con WhatsApp attivo** (ora c'è il numero fisso come segnaposto: i link WhatsApp funzioneranno davvero solo con un cellulare).
2. **Prezzi** — sono **stime di fascia**, non forniti dal locale. Confermali.
3. **`contact.geo`** — coordinate approssimative di Teverola; affinale se vuoi il pin preciso.
4. **Pizze / primi / spiedo / friggitoria** — alcuni piatti sono esempi plausibili: sostituiscili con quelli reali.
5. **Recensioni/stelle** — quando vuoi, aggiungi `reviewsUrl` (link Google) e, con dati reali, un punteggio.
6. **`seo.url`** — aggiorna con l'URL/dominio definitivo (ora punta a GitHub Pages).
7. **Foto** — quelle fornite sono **miniature a bassa risoluzione**: sostituiscile con foto in alta risoluzione per una resa ottimale (stessi nomi file in `assets/img/`, formato `.webp`).

## Pubblicare su GitHub Pages
1. Crea un repository (es. `mordi-e-fuggi`) e carica tutti questi file **nella root**.
2. Settings → Pages → Branch `main` / `/root` → Save.
3. Online su `https://<utente>.github.io/mordi-e-fuggi/`.

Il file `.nojekyll` è già incluso (necessario perché GitHub Pages serva tutto correttamente).

## Struttura
```
index.html      pagina (contenitori + SEO/meta statici)
styles.css      stile (mobile-first 390px, desktop ≥820px)
app.js          motore: render dal data.js, "aperto ora", form prenotazione, schema JSON-LD
data.js         ← UNICA FONTE DI VERITÀ (modifica solo questo)
assets/img/     immagini .webp + logo + favicon + og image
robots.txt, sitemap.xml, .nojekyll
```
