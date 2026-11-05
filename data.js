/* =========================================================================
   MORDI e FUGGI — UNICA FONTE DI VERITÀ DEL SITO
   -------------------------------------------------------------------------
   Modifica SOLO questo file per aggiornare il sito.
   Nessuna riga qui dentro tocca la grafica: cambi un prezzo, un orario o un
   piatto e il sito si aggiorna da solo.

   COSA CONTROLLARE SUBITO (segnate con  ⚠️  VERIFICARE ):
     1. contact.whatsapp  → METTI il numero di cellulare WhatsApp reale
     2. menu[].items[].price → prezzi STIMATI, da confermare in cassa
     3. contact.geo (lat/lng) → coordinate approssimative di Teverola
     4. ratingNote → quando vuoi, aggiungi recensioni/stelle reali
   ========================================================================= */

window.MORDI = {

  /* ---------------------------------------------------------------- BRAND */
  brand: {
    name: "Mordi e Fuggi",
    legalName: "Mordi e Fuggi — Pizzeria & Ristorante",
    tagline: "Pizzeria · Hamburgheria · Ristorante",
    // frase del loro stesso linguaggio (vista sulle grafiche Instagram)
    claim: "Come se stessi a casa.",
    hook: "Pizza napoletana, burger di marchigiana e pollo allo spiedo. A due passi dall’ASI di Teverola, aperto tutti i giorni a pranzo e a cena.",
    cuisine: "Cucina napoletana, pizza, hamburger, rosticceria",
    logo: "assets/img/logo.webp",
    priceRange: "€€"       // fascia popolare / ottimo rapporto qualità-prezzo
  },

  /* ------------------------------------------------------------- CONTATTI */
  contact: {
    phone:        "+39 081 504 7065",      // numero fisso (per "Chiama")
    phoneHref:    "+390815047065",
    // ⚠️ VERIFICARE: inserisci il CELLULARE con WhatsApp attivo (senza + né spazi).
    // Finché resta questo numero fisso, i link WhatsApp potrebbero non funzionare.
    whatsapp:     "390815047065",
    addressLine:  "Area Sviluppo Industriale (ASI)",
    city:         "81030 Teverola (CE) — Campania",
    // Query usata per la mappa Google e per i link "Indicazioni" (trova il locale per nome)
    mapsQuery:    "Mordi e Fuggi Pizzeria Teverola",
    // ⚠️ VERIFICARE: coordinate approssimative zona ASI Teverola
    geo: { lat: 40.9952, lng: 14.2051 },
    social: {
      facebook:  "https://www.facebook.com/mordiefuggiteverola/",
      instagram: "https://www.instagram.com/mordiefuggiteverola/"
    },
    // Piattaforme di delivery: NESSUNA confermata per questa sede.
    // Aggiungi qui per farle comparire in automatico, es:
    // { name: "Glovo", url: "https://..." }
    delivery: []
  },

  /* --------------------------------------------------------------- ORARI */
  /* Orari INVERNALI ufficiali (dal 21 settembre) come da grafica del locale.
     Due fasce al giorno: pranzo e cena. "00:00" = mezzanotte, "00:30" = mezza
     ora dopo mezzanotte (la logica "aperto ora" gestisce l'orario notturno).  */
  hours: {
    // 0 = Domenica ... 6 = Sabato  (standard JavaScript)
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
    { icon: "dinein",   label: "Sala & asporto" },
    { icon: "parking",  label: "Parcheggio gratuito" },
    { icon: "wheel",    label: "Accessibile a sedia a rotelle" },
    { icon: "family",   label: "Menu bambini" },
    { icon: "group",    label: "Sala privata per gruppi" },
    { icon: "wine",     label: "Birre & vini selezionati" },
    { icon: "card",     label: "Carte & contactless" },
    { icon: "pet",      label: "Cani ammessi" }
  ],

  /* ---------------------------------------------------------- POSIZIONAM. */
  // Cosa facciamo (dalla grafica "info cucina" del locale)
  cucina: ["Ristorante","Cucina tipica napoletana","Self service","Pizzeria",
           "Pizza al metro","Pollo allo spiedo","Panini alla piastra","Friggitoria"],

  /* ----------------------------------------------------- PIATTI IN VETRINA */
  /* Scelti dalle recensioni: pizza, burger, pollo allo spiedo, primi espressi. */
  featured: [
    { name:"La pizza napoletana", img:"assets/img/feat-pizza.webp",
      text:"Impasto a lunga lievitazione, cotta come si deve. Per molti, una delle migliori della zona." },
    { name:"O’ Mariulo", img:"assets/img/feat-burger.webp",
      text:"Burger di marchigiana, provola, uovo a occhio di bue, bacon croccante e cheddar. Roba seria." },
    { name:"Pollo allo spiedo", img:"assets/img/feat-spiedo.webp",
      text:"Croccante fuori, succoso dentro, con le patate al forno. Il gusto di casa, da portar via." },
    { name:"Primi espressi", img:"assets/img/feat-primi.webp",
      text:"Carbonara, bolognese e sughi pronti al momento. Veloci a pranzo, fatti come a casa." }
  ],

  /* ------------------------------------------------------- GALLERIA FOTO */
  // Galleria che scorre da sola (tutte le foto del cibo). Aggiungi o togli file qui.
  gallery: ["assets/img/g/g01.webp","assets/img/g/g02.webp","assets/img/g/g03.webp","assets/img/g/g04.webp","assets/img/g/g05.webp","assets/img/g/g06.webp","assets/img/g/g07.webp","assets/img/g/g08.webp","assets/img/g/g09.webp","assets/img/g/g10.webp","assets/img/g/g11.webp","assets/img/g/g12.webp","assets/img/g/g13.webp","assets/img/g/g14.webp","assets/img/g/g15.webp","assets/img/g/g16.webp","assets/img/g/g17.webp","assets/img/g/g18.webp","assets/img/g/g19.webp","assets/img/g/g20.webp","assets/img/g/g21.webp","assets/img/g/g22.webp","assets/img/g/g23.webp","assets/img/g/g24.webp","assets/img/g/g25.webp","assets/img/g/g26.webp","assets/img/g/g27.webp","assets/img/g/g28.webp"],

  /* ---------------------------------------------------------------- MENU */
  /* Legenda allergeni:
     G=Glutine · L=Latte/latticini · U=Uova · P=Pesce · F=Frutta a guscio · S=Soia
     Tag disponibili: "specialità", "piccante", "vegetariano"              */
  allergenLegend: {
    G:"Glutine", L:"Latte/latticini", U:"Uova", P:"Pesce", F:"Frutta a guscio", S:"Soia"
  },

  // ⚠️ VERIFICARE: i prezzi sono STIME di fascia (non forniti dal locale).
  // Metti i prezzi reali qui sotto e poi imposta pricesVerified: true per
  // togliere l'avviso "prezzi indicativi" dal sito.
  pricesVerified: false,
  priceNote: "Prezzi indicativi — conferma in cassa o al telefono.",

  menu: [
    {
      id:"burger",
      title:"Burger — American & Big",
      note:"Hamburger di carne marchigiana e chianina, alla piastra.",
      items:[
        { name:"O’ Mariulo", price:8.00, tags:["specialità"], allergens:["G","L","U"],
          desc:"Hamburger di marchigiana, provola, uovo a occhio di bue, bacon croccante, cheddar." },
        { name:"O’ Rre", price:8.00, allergens:["G","L"],
          desc:"Hamburger di marchigiana, bacon croccante, rucola, patate al forno, cheddar, lattuga." },
        { name:"O’ Chiatton", price:9.50, tags:["specialità"], allergens:["G","L"],
          desc:"Doppio hamburger di marchigiana, rucola, patate al forno, bacon croccante, cheddar." },
        { name:"O’ Merican", price:8.50, allergens:["G","L","U"],
          desc:"Hamburger di chianina, uovo a occhio di bue, provola, bacon croccante, lattuga." },
        { name:"Uammamia", price:9.50, allergens:["G","L"],
          desc:"Doppio hamburger di marchigiana, melanzane grigliate, provola, zucchine grigliate, patate aromatizzate al forno." },
        { name:"O’ Cafone", price:7.50, allergens:["G","L"],
          desc:"Salsiccia di suino, bacon, melanzane a funghetto, lattuga." }
      ]
    },
    {
      id:"panini",
      title:"Panini & specialità",
      note:"Alla piastra, con pane fresco.",
      items:[
        { name:"O’ Sapurito", price:7.00, allergens:["G","L"],
          desc:"Hamburger di scottona o marchigiana, provola, rucola, patatine fritte." },
        { name:"O’ Turco", price:7.00, tags:["piccante"], allergens:["G","L"],
          desc:"Kebab, mozzarella di bufala, funghi, lattuga." },
        { name:"O’ Pesante", price:7.00, allergens:["G","L"],
          desc:"Hamburger di marchigiana, peperoni, provola, cheddar." },
        { name:"O’ Scustumat", price:6.00, allergens:["G","L"],
          desc:"Salsiccia di suino, melanzane a funghetto, cheddar." },
        { name:"Miez e Miez", price:6.50, allergens:["G","L"],
          desc:"Porchetta di Ariccia, melanzane grigliate, patate al forno, provola." },
        { name:"O’ Secco", price:6.50, allergens:["G","L"],
          desc:"Petto di pollo grigliato, provola, rucola, zucchine grigliate, lattuga." },
        { name:"Panino base", price:5.00, allergens:["G"],
          desc:"Componibile a scelta, 2 o 3 gusti." }
      ]
    },
    {
      id:"pizze",
      title:"Pizze & pizza al metro",
      note:"⚠️ Elenco di esempio — sostituisci con le pizze reali del locale.",
      items:[
        { name:"Margherita", price:4.50, tags:["vegetariano"], allergens:["G","L"],
          desc:"Pomodoro San Marzano, fiordilatte, basilico, olio EVO." },
        { name:"Marinara", price:4.00, tags:["vegetariano"], allergens:["G"],
          desc:"Pomodoro, aglio, origano, basilico. Senza mozzarella." },
        { name:"Bufala", price:6.50, tags:["vegetariano","specialità"], allergens:["G","L"],
          desc:"Pomodoro, mozzarella di bufala campana DOP, basilico." },
        { name:"Diavola", price:6.00, tags:["piccante"], allergens:["G","L"],
          desc:"Pomodoro, fiordilatte, salame piccante." },
        { name:"Napoli", price:6.00, allergens:["G","L","P"],
          desc:"Pomodoro, fiordilatte, acciughe, capperi, origano." },
        { name:"Parigino", price:7.00, tags:["specialità"], allergens:["G","L"],
          desc:"La nostra pizza ripiena, farcita e dorata al forno." },
        { name:"Pizza al metro", price:10.00, tags:["specialità"], allergens:["G","L"],
          desc:"Per il tavolo, a scelta multi-gusto. Prezzo a persona indicativo." }
      ]
    },
    {
      id:"primi",
      title:"Primi espressi",
      note:"Pronti al momento — ideali per la pausa pranzo.",
      items:[
        { name:"Carbonara", price:7.00, tags:["specialità"], allergens:["G","L","U"],
          desc:"Guanciale, uovo, pecorino, pepe. Cremosa, fatta al momento." },
        { name:"Bolognese", price:7.00, allergens:["G","L"],
          desc:"Ragù di carne a lunga cottura su pasta fresca del giorno." },
        { name:"Amatriciana", price:7.00, tags:["piccante"], allergens:["G","L"],
          desc:"Guanciale, pomodoro, pecorino, un tocco di peperoncino." },
        { name:"Gnocchi alla sorrentina", price:7.50, tags:["vegetariano"], allergens:["G","L"],
          desc:"Gnocchi, pomodoro, fiordilatte e basilico, gratinati al forno." },
        { name:"Pasta e patate", price:6.50, allergens:["G","L"],
          desc:"Il comfort food napoletano, con provola filante." }
      ]
    },
    {
      id:"spiedo",
      title:"Dallo spiedo & dalla griglia",
      note:"La rosticceria: pollo allo spiedo e secondi di carne.",
      items:[
        { name:"Pollo allo spiedo intero", price:9.50, tags:["specialità"], allergens:[],
          desc:"Cotto allo spiedo, croccante fuori e succoso dentro." },
        { name:"Mezzo pollo allo spiedo", price:5.50, allergens:[],
          desc:"Mezza porzione, perfetta per una persona." },
        { name:"Pollo & patate", price:11.00, tags:["specialità"], allergens:[],
          desc:"Pollo allo spiedo con patate al forno. La combo perfetta." },
        { name:"Salsiccia e friarielli", price:8.00, allergens:[],
          desc:"Salsiccia di suino alla griglia con friarielli saltati." }
      ]
    },
    {
      id:"friggitoria",
      title:"Friggitoria",
      note:"Lo street food napoletano, da mordere al volo.",
      items:[
        { name:"Crocchè di patate", price:1.50, tags:["vegetariano"], allergens:["G","L","U"],
          desc:"Dorato fuori, cremoso dentro." },
        { name:"Arancino", price:2.50, allergens:["G","L","U"],
          desc:"Riso, ragù e piselli, impanato e fritto." },
        { name:"Frittatina di pasta", price:2.00, allergens:["G","L","U"],
          desc:"Bucatini, besciamella e piselli. Un classico." },
        { name:"Montanara", price:2.00, tags:["vegetariano"], allergens:["G","L"],
          desc:"Pizzella fritta con pomodoro, provola e basilico." }
      ]
    }
  ],

  /* --------------------------------------------- PUNTI DI FORZA (recensioni) */
  /* Temi reali dalle recensioni Google, NON citazioni con nomi inventati.
     Quando vuoi, sostituisci con recensioni reali e aggiungi il punteggio. */
  reviewHighlights: [
    { title:"Pizza di livello",   text:"Una pizza che, per molti clienti, rivaleggia con le migliori della zona." },
    { title:"Prezzi popolari",    text:"Ottimo rapporto qualità-prezzo: si mangia bene senza spendere tanto." },
    { title:"Varietà infinita",   text:"Dai panini al pollo allo spiedo, dai primi espressi alle pizze: ce n’è per tutti." }
  ],
  // ⚠️ VERIFICARE: aggiungi qui il link diretto alle recensioni Google quando disponibile
  reviewsUrl: "",
  ratingNote: "Dalle recensioni dei clienti su Google.",

  /* --------------------------------------------------------------- STORIA */
  about: {
    title:"Due passi dal lavoro, il sapore di casa",
    body:[
      "Mordi e Fuggi nasce nell’Area Sviluppo Industriale di Teverola con un’idea semplice: mangiare bene e in fretta, senza rinunciare a niente. A pranzo è il punto di riferimento di chi lavora in zona — self service veloce, primi espressi e panini alla piastra. La sera diventa pizzeria e rosticceria, con la pizza napoletana, i burger di marchigiana e il pollo allo spiedo.",
      "Prodotti genuini, porzioni oneste e prezzi popolari. C’è posto per le famiglie, per i gruppi e per chi passa di corsa a mordere qualcosa al volo. Come se stessi a casa — con un ampio parcheggio davanti."
    ],
    images:["assets/img/sala-1.webp","assets/img/banco-self.webp","assets/img/banco-friggi.webp"]
  },

  /* --------------------------------------------------------------- SEO */
  seo: {
    url: "https://scintillaanselmo0-cell.github.io/mordi-e-fuggi/", // ⚠️ aggiorna col dominio/URL reale
    metaDescription: "Mordi e Fuggi a Teverola (CE): pizzeria napoletana, hamburger di marchigiana, pollo allo spiedo e primi espressi. Sala, asporto e prenotazioni. Aperto 7 giorni su 7, pranzo e cena.",
    ogImage: "assets/img/og.jpg"
  }
};
