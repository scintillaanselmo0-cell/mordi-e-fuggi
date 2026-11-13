/* =========================================================================
   MORDI e FUGGI — UNICA FONTE DI VERITÀ DEL SITO
   -------------------------------------------------------------------------
   Modifica SOLO questo file per aggiornare il sito.
   Menu e prezzi presi dal LISTINO UFFICIALE (listino sala A4).

   DA CONTROLLARE (segnate con  ⚠️  VERIFICARE ):
     1. contact.whatsapp  → METTI il numero di cellulare WhatsApp reale
     2. contact.geo (lat/lng) → coordinate approssimative
   ========================================================================= */

window.MORDI = {

  /* ---------------------------------------------------------------- BRAND */
  brand: {
    name: "Mordi e Fuggi",
    legalName: "Mordi e Fuggi — Ristorante · Pizzeria · Friggitoria · Paninoteca",
    tagline: "Ristorante · Pizzeria · Friggitoria · Paninoteca",
    claim: "Come se stessi a casa.",
    hook: "Pizza napoletana, carne alla brace, panini di Marchigiana e friggitoria. Sulla SS7bis a Teverola, aperto tutti i giorni a pranzo e a cena.",
    cuisine: "Cucina napoletana, pizza, carne alla brace, hamburger, friggitoria",
    logo: "assets/img/logo.webp",
    priceRange: "€€"
  },

  /* ------------------------------------------------------------- CONTATTI */
  contact: {
    phone:        "+39 378 420 8243",
    phoneHref:    "+393784208243",
    phoneNote:    "solo chiamate",
    whatsapp:     "",                 // nessun WhatsApp: il numero è solo per chiamate
    email:        "restaurantdatommaso@gmail.com",
    addressLine:  "SS7bis Km 11,00 · Zona ASI",
    city:         "81030 Teverola (CE) — Campania",
    mapsQuery:    "Mordi e Fuggi Pizzeria Teverola",
    // ⚠️ VERIFICARE: coordinate approssimative
    geo: { lat: 40.9952, lng: 14.2051 },
    social: {
      facebook:  "https://www.facebook.com/mordiefuggiteverola/",
      instagram: "https://www.instagram.com/mordiefuggiteverola/"
    },
    delivery: []
  },

  /* --------------------------------------------------------------- ORARI */
  hours: {
    1: [["11:00","15:00"],["18:00","00:00"]], // Lunedì
    2: [["11:00","15:00"],["18:00","00:00"]], // Martedì
    3: [["11:00","15:00"],["18:00","00:00"]], // Mercoledì
    4: [["11:00","15:00"],["18:00","00:00"]], // Giovedì
    5: [["11:00","15:00"],["18:30","00:30"]], // Venerdì
    6: [["11:00","15:00"],["18:30","00:30"]], // Sabato
    0: [["11:00","15:00"],["18:00","00:00"]]  // Domenica
  },
  hoursNote: "Aperto 7 giorni su 7 · pranzo e cena · orari invernali",

  /* ----------------------------------------------------------- SERVIZI */
  services: [
    { icon: "dinein",   label: "Sala, asporto & self service" },
    { icon: "parking",  label: "Parcheggio gratuito" },
    { icon: "wheel",    label: "Accessibile a sedia a rotelle" },
    { icon: "family",   label: "Menu bimbo" },
    { icon: "group",    label: "Sala privata per gruppi" },
    { icon: "wine",     label: "Birre & vini selezionati" },
    { icon: "card",     label: "Carte & contactless" },
    { icon: "pet",      label: "Cani ammessi" }
  ],

  /* ---------------------------------------------------------- POSIZIONAM. */
  cucina: ["Ristorante","Cucina tipica napoletana","Self service","Pizzeria",
           "Pizza al metro","Carne alla brace","Panini alla piastra","Friggitoria"],

  /* ------------------------------------------------------- GALLERIA FOTO */
  gallery: ["assets/img/g/g01.webp","assets/img/g/g02.webp","assets/img/g/g03.webp","assets/img/g/g04.webp","assets/img/g/g05.webp","assets/img/g/g06.webp","assets/img/g/g07.webp","assets/img/g/g08.webp","assets/img/g/g09.webp","assets/img/g/g10.webp","assets/img/g/g11.webp","assets/img/g/g12.webp","assets/img/g/g13.webp","assets/img/g/g14.webp","assets/img/g/g15.webp","assets/img/g/g16.webp","assets/img/g/g17.webp","assets/img/g/g18.webp","assets/img/g/g19.webp","assets/img/g/g20.webp","assets/img/g/g21.webp","assets/img/g/g22.webp","assets/img/g/g23.webp","assets/img/g/g24.webp","assets/img/g/g25.webp","assets/img/g/g26.webp","assets/img/g/g27.webp","assets/img/g/g28.webp"],

  /* ----------------------------------------------------- PIATTI IN VETRINA */
  featured: [
    { name:"La pizza napoletana", img:"assets/img/feat-pizza.webp",
      text:"Impasto a lunga lievitazione, cotta come si deve. Dalla Margherita alla Delizia con porcini." },
    { name:"O’ Mariuolo", img:"assets/img/feat-burger.webp",
      text:"Hamburger di Marchigiana, provola di Agerola, uovo a occhio di bue, bacon croccante e cheddar." },
    { name:"Carne alla brace", img:"assets/img/feat-spiedo.webp",
      text:"Beef, tagliata, misto di carne e pollo con patate. Cotti alla brace, come si deve." },
    { name:"Primi espressi", img:"assets/img/feat-primi.webp",
      text:"Carbonara, bolognese, scarpariello e gnocco alla sorrentina. Fatti al momento." }
  ],

  /* ---------------------------------------------------------------- MENU */
  /* Legenda allergeni (dal listino ufficiale):
     1 Glutine · 2 Crostacei · 3 Uova · 4 Pesce · 5 Arachidi · 6 Soia
     7 Latte/latticini · 8 Frutta a guscio · X Surgelato                     */
  allergenLegend: {
    "1":"Glutine","2":"Crostacei","3":"Uova","4":"Pesce","5":"Arachidi",
    "6":"Soia","7":"Latte/latticini","8":"Frutta a guscio","X":"Surgelato"
  },
  pricesVerified: true,
  priceNote: "",

  menu: [
    { id:"antipasti-terra", title:"Antipasti di terra", items:[
      { name:"Crocchè", price:2.00, tags:["vegetariano"], allergens:["1","3","7"], desc:"" },
      { name:"Bruschetta", price:2.00, tags:["vegetariano"], allergens:["1"], desc:"" },
      { name:"Arancino", price:2.00, allergens:["1","3","7"], desc:"" },
      { name:"Zeppoline alle alghe", price:3.50, tags:["vegetariano"], allergens:["1"], desc:"" },
      { name:"Frittatina di pasta", price:2.50, allergens:["1","3","7"], desc:"" },
      { name:"Cuoppo napoletano", price:10.00, tags:["specialità"], allergens:["1","3","7"],
        desc:"Crocchè, frittatina, arancino, mozzarella in carrozza, zeppoline e patatine." },
      { name:"Scagnuzielli fritti", price:12.00, allergens:["1","3","7"],
        desc:"Pane pizza fritto con salsa cheddar e scaglie di grana." },
      { name:"Parmigiana di melanzane", price:7.00, tags:["vegetariano"], allergens:["1","3"], desc:"" },
      { name:"Mozzarella di bufala D.O.P. 150 g e olive", price:5.00, tags:["vegetariano"], allergens:["7"], desc:"" },
      { name:"Caprese", price:10.00, tags:["vegetariano"], allergens:["1","7"],
        desc:"Pomodorini ciliegino, mozzarella D.O.P., origano e basilico." },
      { name:"Prosciutto crudo e mozzarella", price:12.00, allergens:["7"], desc:"" },
      { name:"Tagliere della fattoria", price:18.00, allergens:["1","3","7"],
        desc:"Affettati misti, formaggi e mozzarella di bufala." }
    ]},
    { id:"antipasti-mare", title:"Antipasti di mare", items:[
      { name:"Polipo alla brace", price:20.00, tags:["specialità"], allergens:["4","1","X"], desc:"" },
      { name:"Polipo all’insalata", price:20.00, allergens:["4","X"], desc:"" }
    ]},
    { id:"primi-terra", title:"Primi di terra", items:[
      { name:"Spaghetto al pomodorino", price:12.00, tags:["vegetariano"], allergens:["1","3"], desc:"" },
      { name:"Bucatino scarpariello", price:12.00, tags:["vegetariano"], allergens:["1","3"], desc:"" },
      { name:"Fettuccine funghi e salsiccia", price:14.00, allergens:["1","3"], desc:"" },
      { name:"Gnocco alla sorrentina", price:10.00, tags:["vegetariano"], allergens:["1","3","7"], desc:"" },
      { name:"Spaghetto alla carbonara", price:12.00, tags:["specialità"], allergens:["1","3","7"],
        desc:"Uova, guanciale di maiale, formaggio e pepe." },
      { name:"Fettuccine alla bolognese", price:12.00, allergens:["1","3"],
        desc:"Carne di vitello macinata e passata di pomodoro." }
    ]},
    { id:"primi-mare", title:"Primi di mare", items:[
      { name:"Gnocco al salmone", price:12.00, allergens:["1","3","7","X"], desc:"" },
      { name:"Linguina agli scampi", price:18.00, tags:["specialità"], allergens:["1","3","7","X"], desc:"" }
    ]},
    { id:"pizze", title:"Pizze", note:"Tutte le nostre pizze contengono glutine.", items:[
      { name:"Marinara", price:5.00, tags:["vegetariano"], allergens:["1"], desc:"Origano, aglio, olio e pomodoro." },
      { name:"Margherita", price:6.00, tags:["vegetariano"], allergens:["1","7"], desc:"Pomodoro, fior di latte, olio e basilico." },
      { name:"Pub", price:8.00, allergens:["1","7"], desc:"Würstel, patatine e fior di latte." },
      { name:"Diavola", price:7.00, tags:["piccante"], allergens:["1","7"], desc:"Fior di latte, pomodoro e salame piccante." },
      { name:"Carabiniera", price:9.00, tags:["piccante"], allergens:["1","7"], desc:"Fior di latte, pomodoro, salame piccante, origano, aglio e olive nere." },
      { name:"Mimosa", price:8.00, allergens:["1","7"], desc:"Panna, prosciutto cotto, mais e fior di latte." },
      { name:"Ortolana", price:10.00, tags:["vegetariano"], allergens:["1","7"], desc:"Verdure miste e fior di latte." },
      { name:"Gattò", price:9.00, allergens:["1","3","7"], desc:"Fior di latte, prosciutto cotto, panna e crocchè di patate." },
      { name:"Bufalina", price:9.00, tags:["vegetariano"], allergens:["1","7"], desc:"Mozzarella di bufala D.O.P. e pomodoro." },
      { name:"D.O.C.", price:10.00, tags:["vegetariano"], allergens:["1","7"], desc:"Pomodorino e mozzarella di bufala D.O.P." },
      { name:"4 formaggi", price:10.00, tags:["vegetariano"], allergens:["1","7"], desc:"Fior di latte, Emmental, gorgonzola e provolone dolce." },
      { name:"Capricciosa", price:9.00, allergens:["1","7"], desc:"Fior di latte, pomodoro, prosciutto cotto, funghi, carciofini e olive nere." },
      { name:"Pulcinella", price:12.00, tags:["specialità"], allergens:["1","7"], desc:"Salsiccia, friarielli e fior di latte." },
      { name:"Pesto genovese", price:10.00, tags:["vegetariano"], allergens:["1","7","8"], desc:"Fior di latte, pesto alla genovese, pomodorino e basilico." },
      { name:"D.O.C. extra", price:12.00, allergens:["1","7"], desc:"Mozzarella di bufala D.O.P., pomodorino giallo e rosso, pomodorino semi-dry, basilico e olio." },
      { name:"Regina", price:12.00, tags:["specialità"], allergens:["1","7"], desc:"Pomodorino, rucola, scaglie di parmigiano, prosciutto crudo e mozzarella di bufala D.O.P." },
      { name:"Tirolese", price:12.00, allergens:["1","7","8"], desc:"Ricotta, noci, provola e speck." },
      { name:"Delizia", price:13.00, tags:["specialità"], allergens:["1","7"], desc:"Fior di latte, salsiccia e funghi porcini." }
    ]},
    { id:"pizze-ripiene", title:"Pizze ripiene", items:[
      { name:"Calzone classico", price:10.00, allergens:["1","7"], desc:"Fior di latte, pomodoro, prosciutto cotto, salame, ricotta e formaggio." },
      { name:"Calzone fritto", price:10.00, allergens:["1","7"], desc:"Fior di latte, ricotta, ciccioli, pepe e pomodoro." },
      { name:"Mezzaluna", price:12.00, tags:["specialità"], allergens:["1","7"], desc:"Mozzarella di bufala D.O.P., prosciutto crudo, rucola, scaglie e pomodorino." }
    ]},
    { id:"panini", title:"Panini", note:"Tutti i nostri panini contengono glutine.", items:[
      { name:"O’ Sapurito", price:9.00, allergens:["1","7"], desc:"Hamburger di scottona, provola di Agerola, rucola e patatine fritte." },
      { name:"O’ Turco", price:9.00, allergens:["1","7"], desc:"Kebab, mozzarella di bufala, funghi e lattuga romana." },
      { name:"O’ Cafone", price:10.00, allergens:["1","7"], desc:"Salsiccia di suino, bacon croccante, melanzane a funghetto e lattuga romana." },
      { name:"O’ Pesante", price:10.00, allergens:["1","7"], desc:"Hamburger di scottona, peperoni, provola di Agerola e cheddar." },
      { name:"O’ Scustumato", price:10.00, allergens:["1","7"], desc:"Salsiccia di suino, melanzane a funghetto, cheddar e lattuga romana." },
      { name:"Miez e miez", price:10.00, allergens:["1","7"], desc:"Porchetta di Ariccia, melanzane grigliate, patate al forno e provola di Agerola." },
      { name:"O’ Secco", price:10.00, allergens:["1","7"], desc:"Petto di pollo grigliato, provola di Agerola, rucola, zucchine grigliate e lattuga romana." },
      { name:"O’ Mariuolo", price:12.00, tags:["specialità"], allergens:["1","3","7"], desc:"Hamburger di Marchigiana, provola di Agerola, uovo a occhio di bue, bacon croccante e cheddar." },
      { name:"O’ Rre", price:11.00, allergens:["1","7"], desc:"Hamburger di Marchigiana, bacon croccante, rucola, patate al forno, cheddar e lattuga romana." },
      { name:"O’ Chatton", price:12.00, tags:["specialità"], allergens:["1","7"], desc:"Doppio hamburger di Marchigiana, rucola, patate al forno, bacon croccante e lattuga romana." },
      { name:"Uammamia", price:13.00, allergens:["1","7"], desc:"Doppio hamburger di Marchigiana, melanzane grigliate, zucchine grigliate, provola di Agerola e patate aromatizzate al forno." },
      { name:"Panino 2/3 gusti", price:9.00, allergens:["1"], desc:"Componibile a scelta." },
      { name:"Panino 4 gusti", price:10.00, allergens:["1"], desc:"Componibile a scelta." },
      { name:"Panino 5 gusti", price:12.00, allergens:["1"], desc:"Componibile a scelta." }
    ]},
    { id:"secondi-terra", title:"Secondi di terra · alla brace", items:[
      { name:"Hamburger alla brace con patate", price:10.00, allergens:["1","3","7"], desc:"" },
      { name:"Beef alla brace 300/400 g", price:20.00, tags:["specialità"], allergens:["1"], desc:"" },
      { name:"Tagliata di entrecôte", price:20.00, tags:["specialità"], allergens:["1"], desc:"Entrecôte argentina con rucola, pomodorini e scaglie." },
      { name:"Misto di carne alla brace", price:18.00, tags:["specialità"], allergens:["1"], desc:"Misto di carne alla brace con patate." },
      { name:"Scaloppina", price:14.00, allergens:["1","3","7"], desc:"Vino o limone." },
      { name:"Cotoletta di pollo con patate", price:10.00, allergens:["1","3","7"], desc:"" },
      { name:"Salsiccia di maiale alla brace", price:12.00, allergens:["1","3"], desc:"" },
      { name:"Pollo con patate", price:12.00, tags:["specialità"], allergens:["1","3"], desc:"" },
      { name:"Mezzo pollo con patate", price:8.00, allergens:["1","3"], desc:"" },
      { name:"Petto di pollo alla brace", price:10.00, allergens:[], desc:"" }
    ]},
    { id:"secondi-mare", title:"Secondi di mare", items:[
      { name:"Frittura di calamaro", price:18.00, allergens:["1","4","X"], desc:"" },
      { name:"Frittura classica", price:20.00, allergens:["1","4","X"], desc:"Gamberi e calamaro." },
      { name:"Calamaro alla brace", price:20.00, allergens:["4","X"], desc:"" }
    ]},
    { id:"contorni", title:"Contorni", items:[
      { name:"Insalata verde", price:4.00, tags:["vegetariano"], allergens:[], desc:"" },
      { name:"Insalata di pomodoro", price:5.00, tags:["vegetariano"], allergens:[], desc:"" },
      { name:"Insalatona mista", price:12.00, allergens:["1","3","7"], desc:"Insalata, pomodorini, mais, mozzarella di bufala, tonno e olive verdi." },
      { name:"Patatine fritte", price:4.00, tags:["vegetariano"], allergens:["1","3"], desc:"" },
      { name:"Verdure alla griglia", price:5.00, tags:["vegetariano"], allergens:[], desc:"" }
    ]},
    { id:"domenica", title:"I primi della domenica", note:"Proposte domenicali.", items:[
      { name:"Gnocco alla sorrentina", price:10.00, tags:["vegetariano"], allergens:["1","3","7"], desc:"" },
      { name:"Mezzanelli alla genovese", price:12.00, allergens:["1"], desc:"" },
      { name:"Mezzanelli alla bolognese", price:12.00, allergens:["1"], desc:"" },
      { name:"Paccheri calamari e gamberi", price:12.00, allergens:["1","4","X"], desc:"" },
      { name:"Spaghetti alla carbonara", price:12.00, allergens:["1","3","7"], desc:"" },
      { name:"Lasagna o pasta al forno", price:8.00, allergens:["1","3","7"], desc:"" }
    ]},
    { id:"menu-fissi", title:"Menù fissi", items:[
      { name:"Menu fisso — a persona", price:35.00, tags:["specialità"], allergens:["1","3","7"],
        desc:"Antipasto (crudo e bufala), centro tavolo (bruschette, zeppoline, verdure pastellate), primo a scelta, misto di carne alla brace con patate. Bibite incluse, vino limitato." },
      { name:"Menu bimbo", price:20.00, allergens:["1","3","7"],
        desc:"Pennette al pomodoro, cotoletta con patate e bibita." }
    ]},
    { id:"dolci", title:"Dolci", items:[
      { name:"Dolci artigianali dello chef", price:4.50, allergens:["1","3","7","8"], desc:"" },
      { name:"Ananas", price:4.00, tags:["vegetariano"], allergens:[], desc:"" },
      { name:"Fantasia di frutta", price:4.50, tags:["vegetariano"], allergens:[], desc:"" },
      { name:"Caffè", price:1.50, allergens:[], desc:"" },
      { name:"Amaro della casa", price:3.00, allergens:[], desc:"" }
    ]},
    { id:"bibite", title:"Bibite & birre", items:[
      { name:"Acqua 1 L (minerale o naturale)", price:2.50, allergens:[], desc:"" },
      { name:"Coca-Cola lattina 0,33 L", price:3.00, allergens:[], desc:"" },
      { name:"Fanta lattina", price:3.00, allergens:[], desc:"" },
      { name:"Birra Peroni 0,33 L", price:3.00, allergens:["1"], desc:"" },
      { name:"Nastro Azzurro 0,33 L", price:3.00, allergens:["1"], desc:"" },
      { name:"Heineken 0,33 L", price:3.00, allergens:["1"], desc:"" },
      { name:"Birra Tennent’s", price:4.00, allergens:["1"], desc:"" }
    ]},
    { id:"vini", title:"Vini", items:[
      { name:"Calice di vino (rosso o bianco)", price:3.50, allergens:[], desc:"" },
      { name:"Aglianico Terre Normanne 0,75 L", price:12.00, allergens:[], desc:"" },
      { name:"Gragnano Iovine 0,75 L", price:16.00, allergens:[], desc:"" },
      { name:"Aglianico Mastroberardino 0,75 L", price:22.00, allergens:[], desc:"" },
      { name:"Pompeiano frizzante 0,75 L", price:16.00, allergens:[], desc:"" },
      { name:"Greco di Tufo Mastroberardino 0,75 L", price:22.00, allergens:[], desc:"" },
      { name:"Falanghina Terre Normanne 0,75 L", price:null, allergens:[], desc:"Chiedi la disponibilità." }
    ]}
  ],

  /* --------------------------------------------- PUNTI DI FORZA (recensioni) */
  reviewHighlights: [
    { title:"Pizza di livello",   text:"Una pizza che, per molti clienti, rivaleggia con le migliori della zona." },
    { title:"Prezzi popolari",    text:"Ottimo rapporto qualità-prezzo: si mangia bene senza spendere tanto." },
    { title:"Varietà infinita",   text:"Dai panini alla carne alla brace, dai primi espressi alle pizze: ce n’è per tutti." }
  ],
  reviewsUrl: "",
  ratingNote: "Dalle recensioni dei clienti su Google.",

  /* --------------------------------------------------------------- STORIA */
  about: {
    title:"Due passi dal lavoro, il sapore di casa",
    body:[
      "Mordi e Fuggi è sulla SS7bis, a due passi dalla zona ASI di Teverola, con un’idea semplice: mangiare bene e in fretta, senza rinunciare a niente. A pranzo è il punto di riferimento di chi lavora in zona — self service veloce, primi espressi e panini alla piastra. La sera diventa ristorante, pizzeria e friggitoria, con la pizza napoletana, la carne alla brace e i panini di Marchigiana.",
      "Prodotti genuini, porzioni oneste e prezzi popolari. C’è posto per le famiglie, per i gruppi e per chi passa di corsa a mordere qualcosa al volo. Come se stessi a casa — con un ampio parcheggio davanti."
    ],
    images:["assets/img/sala-1.webp","assets/img/banco-self.webp","assets/img/banco-friggi.webp"]
  },

  /* --------------------------------------------------------- DATI LEGALI */
  legal: {
    managedNote: "Attività gestita da Restaurant Antica Appia S.r.l.",
    operator:    "Restaurant Antica Appia S.r.l.",
    operatorFull:"RESTAURANT ANTICA APPIA SOCIETÀ A RESPONSABILITÀ LIMITATA",
    form:        "Società a responsabilità limitata (S.r.l.)",
    vat:         "04804120618",           // Partita IVA e Codice Fiscale
    rea:         "CE-356606",
    reaOffice:   "Camera di Commercio di Caserta",
    capital:     "€ 1.000,00 interamente versato",
    regOffice:   "Via Carlo Casalegno 7, 81031 Aversa (CE)",
    pec:         "restaurantanticaappiasrl@pec.it",
    rep:         "Francesco Oliviero — Amministratore Unico",
    // Il marchio/insegna appartiene a un'altra società, concesso in uso
    brandOwner:  "L’Impero della Pace S.r.l.",
    brandNote:   "Il marchio e l’insegna “Mordi e Fuggi” sono di proprietà esclusiva de L’Impero della Pace S.r.l., concessi in uso a Restaurant Antica Appia S.r.l. nell’ambito del contratto di affitto di ramo d’azienda.",
    policyUpdated: "13 novembre 2026"
  },

  /* --------------------------------------------------------------- SEO */
  seo: {
    url: "https://scintillaanselmo0-cell.github.io/mordi-e-fuggi/",
    metaDescription: "Mordi e Fuggi a Teverola (CE): pizzeria napoletana, carne alla brace, panini di Marchigiana, primi espressi e friggitoria. Sala, asporto e prenotazioni. Aperto 7 giorni su 7, pranzo e cena.",
    ogImage: "assets/img/og.jpg"
  }
};
