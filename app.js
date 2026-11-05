/* =========================================================================
   MORDI e FUGGI — app.js
   Rende tutto il sito a partire da data.js. Non modificare per cambiare i
   contenuti: usa data.js.
   ========================================================================= */
(function(){
"use strict";
var D = window.MORDI;
if(!D){ console.error("data.js non caricato"); return; }

/* --------------------------------------------------------------- utils */
function $(s,root){ return (root||document).querySelector(s); }
function el(tag,cls,html){ var e=document.createElement(tag); if(cls)e.className=cls; if(html!=null)e.innerHTML=html; return e; }
function toMin(hhmm){ var p=hhmm.split(":"); return (+p[0])*60+(+p[1]); }
function fmtMin(m){ m=((m%1440)+1440)%1440; var h=Math.floor(m/60), mm=m%60; return (h<10?"0":"")+h+":"+(mm<10?"0":"")+mm; }
function waDigits(){ return (D.contact.whatsapp||"").replace(/\D/g,""); }
function waLink(msg){ return "https://wa.me/"+waDigits()+"?text="+encodeURIComponent(msg); }
var DAYS_IT=["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"];
var DAYS_EN=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

/* ------------------------------------------------- orari / "aperto ora" */
function nowRome(){
  // ora corrente nel fuso del locale, indipendente dal dispositivo del visitatore
  var s=new Date().toLocaleString("en-US",{timeZone:"Europe/Rome"});
  return new Date(s);
}
function dayRanges(dow){
  return (D.hours[dow]||[]).map(function(r){
    var s=toMin(r[0]), e=toMin(r[1]); if(e<=s) e+=1440; return [s,e];
  });
}
function statusNow(){
  var now=nowRome(), dow=now.getDay(), cur=now.getHours()*60+now.getMinutes();
  var r,i;
  var today=dayRanges(dow);
  for(i=0;i<today.length;i++){ r=today[i]; if(cur>=r[0] && cur<r[1]) return {open:true, closeMin:r[1]%1440}; }
  // coda dal giorno precedente (servizio oltre mezzanotte)
  var yday=(dow+6)%7, yr=dayRanges(yday);
  for(i=0;i<yr.length;i++){ r=yr[i]; if(r[1]>1440 && cur<(r[1]-1440)) return {open:true, closeMin:(r[1]-1440)}; }
  // prossima apertura entro 7 giorni
  for(var off=0; off<8; off++){
    var d=(dow+off)%7, rr=dayRanges(d).slice().sort(function(a,b){return a[0]-b[0];});
    for(i=0;i<rr.length;i++){
      var startAbs=off*1440+rr[i][0];
      if(startAbs>cur) return {open:false, nextOff:off, nextMin:rr[i][0], nextDow:d};
    }
  }
  return {open:false};
}
function renderOpen(){
  var st=statusNow(), shortTxt, longTxt, isOpen=st.open;
  if(st.open){
    shortTxt="Aperto ora";
    longTxt="Aperto · chiude alle "+fmtMin(st.closeMin);
  } else {
    shortTxt="Chiuso ora";
    if(st.nextOff!=null){
      var when = st.nextOff===0 ? "oggi" : (st.nextOff===1 ? "domani" : DAYS_IT[st.nextDow]);
      longTxt="Chiuso · apre "+when+" alle "+fmtMin(st.nextMin);
    } else { longTxt="Chiuso"; }
  }
  [["#open-badge-nav",shortTxt],["#open-badge-hero",longTxt]].forEach(function(p){
    var b=$(p[0]); if(!b) return;
    b.classList.toggle("is-open", isOpen);
    $(".lbl",b).textContent=p[1];
  });
}

/* ------------------------------------------------------------ render */
function renderHero(){
  $("#hero-cuisine").textContent=D.brand.tagline;
  $("#hero-hook").textContent=D.brand.hook;
  $("#hero-loc").textContent="📍 "+D.contact.addressLine+" · "+D.contact.city.split("—")[0].trim();
}
function renderCucina(){
  var w=$("#cucina-list"); D.cucina.forEach(function(c){ w.appendChild(el("span",null,c)); });
}
function renderFeatured(){
  var w=$("#feat-grid");
  D.featured.forEach(function(f){
    var c=el("article","feat-card");
    c.innerHTML='<img src="'+f.img+'" alt="'+f.name+'" width="206" height="206" loading="lazy">'+
      '<div class="fc-body"><h3>'+f.name+'</h3><p>'+f.text+'</p></div>';
    w.appendChild(c);
  });
}
function renderGallery(){
  var t=$("#marquee-track"); if(!t) return;
  var g=D.gallery||[]; if(!g.length){ t.parentElement.parentElement.style.display="none"; return; }
  // doppia copia per il loop seamless; margin-right costante -> translateX(-50%) esatto
  var html="";
  g.concat(g).forEach(function(src){ html+='<img src="'+src+'" alt="" width="200" height="200" loading="eager">'; });
  t.innerHTML=html;
  // durata proporzionale al numero di foto (scorrimento costante su ogni dispositivo)
  t.style.animationDuration=(g.length*2.6)+"s";
}
function renderPriceNote(){
  if(!D.pricesVerified && D.priceNote){
    $("#price-note").innerHTML='<span class="price-note">ⓘ '+D.priceNote+'</span>';
  }
}
function tagEl(t){ return '<span class="tag '+t+'">'+t+'</span>'; }
function renderMenu(){
  var w=$("#menu-wrap");
  D.menu.forEach(function(cat){
    var sec=el("div","menu-cat"); sec.id="cat-"+cat.id;
    var head=el("div","menu-cat-head");
    head.innerHTML='<h3>'+cat.title+'</h3><span class="rule"></span>';
    sec.appendChild(head);
    if(cat.note) sec.appendChild(el("p","cat-note",cat.note));
    cat.items.forEach(function(it){
      var row=el("div","menu-item");
      var priceTxt = (typeof it.price==="number") ? "€ "+it.price.toFixed(2).replace(".",",") : "";
      var tags="";
      (it.tags||[]).forEach(function(t){ tags+=tagEl(t); });
      (it.allergens||[]).forEach(function(a){ tags+='<span class="tag allerg" title="'+(D.allergenLegend[a]||a)+'">'+a+'</span>'; });
      row.innerHTML=
        '<div class="mi-name">'+it.name+'</div>'+
        '<div class="mi-price">'+priceTxt+'</div>'+
        '<p class="mi-desc">'+(it.desc||"")+'</p>'+
        (tags?'<div class="mi-tags">'+tags+'</div>':'');
      sec.appendChild(row);
    });
    w.appendChild(sec);
  });
}
function renderLegend(){
  var parts=[];
  for(var k in D.allergenLegend){ parts.push("<b>"+k+"</b> "+D.allergenLegend[k]); }
  $("#legend").innerHTML="<b>Allergeni:</b> "+parts.join(" · ")+
    ". Per intolleranze o allergie, chiedi al personale prima di ordinare.";
}
function renderReviews(){
  var w=$("#rev-grid");
  D.reviewHighlights.forEach(function(r){
    var c=el("article","rev-card");
    c.innerHTML='<div class="q">&ldquo;</div><h3>'+r.title+'</h3><p>'+r.text+'</p>';
    w.appendChild(c);
  });
  var src=$("#rev-src");
  if(D.reviewsUrl){
    src.innerHTML=D.ratingNote+' <a href="'+D.reviewsUrl+'" target="_blank" rel="noopener" style="color:var(--gold);text-decoration:underline">Leggi le recensioni su Google →</a>';
  } else { src.textContent=D.ratingNote; }
}
function renderAbout(){
  $("#about-title").textContent=D.about.title;
  var b=$("#about-body"); D.about.body.forEach(function(p){ b.appendChild(el("p",null,p)); });
  $("#about-claim").textContent=D.brand.claim;
  var w=$("#about-imgs");
  D.about.images.forEach(function(src,i){
    w.innerHTML+='<img src="'+src+'" alt="Mordi e Fuggi — ambiente" width="206" height="206" loading="lazy">';
  });
}
/* ------------------------------------------------------- icone inline */
var ICON={
  phone:'<path d="M6.6 10.8a15.9 15.9 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.4 11.4 0 003.6.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.58 3.6 1 1 0 01-.24 1z" fill="currentColor"/>',
  pin:'<path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" fill="currentColor"/>',
  clock:'<path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10.6V6h-2v7.4l5 3 1-1.7z" fill="currentColor"/>',
  wa:'<path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.8.7.7-2.7-.2-.3A8 8 0 1112 20zm4.5-5.8c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7 1-.3.2-.5.1a6.5 6.5 0 01-1.9-1.2 7.2 7.2 0 01-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5.3-.5c.1-.1 0-.3 0-.4l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 00-.7.3A2.8 2.8 0 006 9.3a4.9 4.9 0 001 2.6 11.2 11.2 0 004.3 3.8c.6.3 1.1.4 1.5.5a3.6 3.6 0 001.6.1 2.7 2.7 0 001.8-1.3 2.2 2.2 0 00.2-1.3c-.1-.1-.2-.1-.4-.2z" fill="currentColor"/>',
  dinein:'<path d="M11 3v8a3 3 0 01-2 2.8V21H7v-7.2A3 3 0 015 11V3h2v6h1V3h2v6h1V3h0zm6 0c-1.7 0-3 2.2-3 5 0 2.4 1 4.3 2 4.8V21h2V3h-1z" fill="currentColor"/>',
  parking:'<path d="M6 3h7a5 5 0 010 10h-4v8H6V3zm3 3v4h4a2 2 0 000-4H9z" fill="currentColor"/>',
  wheel:'<path d="M12 4a2 2 0 110 4 2 2 0 010-4zM9 9l.3 3h4.2l2.2 5.2 1.8-.8-2.6-6H10.3L10 9H9zm2.5 4.5A4.5 4.5 0 1016 18l-1.7.7a2.8 2.8 0 11-2-3.6l-.1-1.6z" fill="currentColor"/>',
  family:'<path d="M8 6a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4zM6 8h4l1.2 6H10v7H6v-7H4.8L6 8zm8 0h4l1.2 6H18v7h-4v-7h-1.2L14 8z" fill="currentColor"/>',
  group:'<path d="M12 11a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 0114 0v1H5v-1zm13.5-6.5A3 3 0 0019 8a3 3 0 00-1.5.4 5 5 0 01.9 5.1 6 6 0 013.6 5.5V21H22v-1a6 6 0 00-3.5-6.5z" fill="currentColor"/>',
  wine:'<path d="M7 3h10l-1 7a4 4 0 01-3 3.9V19h3v2H8v-2h3v-5.1A4 4 0 018 10L7 3zm2.2 2l.3 2h5l.3-2H9.2z" fill="currentColor"/>',
  card:'<path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm0 4v2h18V9H3zm0 4v4h8v-4H3z" fill="currentColor"/>',
  pet:'<path d="M5.5 11a2 2 0 110-4 2 2 0 010 4zm13 0a2 2 0 110-4 2 2 0 010 4zM9 8a2 2 0 110-4 2 2 0 010 4zm6 0a2 2 0 110-4 2 2 0 010 4zm-3 3c2.5 0 5 2.5 5 5a3 3 0 01-3 3 6 6 0 01-2-.4 6 6 0 01-2 .4 3 3 0 01-3-3c0-2.5 2.5-5 5-5z" fill="currentColor"/>',
  fb:'<path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2a1 1 0 011-1z" fill="currentColor"/>',
  ig:'<path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 16.5 4.5 4.5 0 0112 7.5zm0 2A2.5 2.5 0 1012 14.5 2.5 2.5 0 0012 9.5zM17.5 6a1 1 0 110 2 1 1 0 010-2z" fill="currentColor"/>'
};
function svg(name){ return '<svg viewBox="0 0 24 24" aria-hidden="true">'+(ICON[name]||"")+'</svg>'; }

function renderServices(){
  var w=$("#services");
  D.services.forEach(function(s){
    var d=el("div","svc"); d.innerHTML=svg(s.icon)+"<span>"+s.label+"</span>"; w.appendChild(d);
  });
}
function renderContact(){
  var c=D.contact, ul=$("#cinfo");
  ul.innerHTML=
    '<li>'+svg("pin")+'<span>'+c.addressLine+'<br>'+c.city+'</span></li>'+
    '<li>'+svg("phone")+'<a href="tel:'+c.phoneHref+'">'+c.phone+'</a></li>'+
    (waDigits()?'<li>'+svg("wa")+'<a href="'+waLink("Ciao Mordi e Fuggi! Avrei una domanda.")+'" target="_blank" rel="noopener">Scrivici su WhatsApp</a></li>':'')+
    '<li>'+svg("clock")+'<span>'+D.hoursNote+'</span></li>';

  // orari tabella
  var t=$("#hours-table"), todayDow=nowRome().getDay(), rows="";
  for(var i=1;i<=7;i++){
    var dow=i%7; // 1..6 poi 0 (Lun..Dom)
    var ranges=(D.hours[dow]||[]).map(function(r){return r[0]+"–"+r[1];}).join(" · ") || "Chiuso";
    rows+='<tr'+(dow===todayDow?' class="today"':'')+'><td>'+DAYS_IT[dow]+'</td><td>'+ranges+'</td></tr>';
  }
  t.innerHTML=rows;

  // mappa
  $("#map").src="https://maps.google.com/maps?q="+encodeURIComponent(c.mapsQuery)+"&z=15&output=embed";
  $("#directions").href="https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(c.mapsQuery);

  // delivery
  var dr=$("#delivery-row");
  if(c.delivery && c.delivery.length){
    dr.innerHTML='<p style="width:100%;margin:0 0 .3rem;font-weight:700;color:var(--wine)">Ordina online:</p>';
    c.delivery.forEach(function(p){ dr.innerHTML+='<a class="btn btn-ghost" href="'+p.url+'" target="_blank" rel="noopener">'+p.name+'</a>'; });
  }
  // social
  var sc=$("#socials");
  if(c.social.instagram) sc.innerHTML+='<a href="'+c.social.instagram+'" target="_blank" rel="noopener" aria-label="Instagram">'+svg("ig")+'</a>';
  if(c.social.facebook)  sc.innerHTML+='<a href="'+c.social.facebook+'" target="_blank" rel="noopener" aria-label="Facebook">'+svg("fb")+'</a>';
}
function wireLinks(){
  var href="tel:"+D.contact.phoneHref;
  ["#hero-call","#sticky-call","#foot-phone"].forEach(function(s){ var a=$(s); if(a) a.href=href; });
  $("#foot-addr").textContent=D.contact.addressLine+" · "+D.contact.city;
  $("#foot-ig").href=D.contact.social.instagram;
  $("#foot-fb").href=D.contact.social.facebook;
  $("#year").textContent=new Date().getFullYear();
}

/* ------------------------------------------------------- prenotazione */
function pad(n){ return (n<10?"0":"")+n; }
function todayStr(){ var d=nowRome(); return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate()); }
function buildTimes(dateVal){
  var sel=$("#f-orario"); sel.innerHTML="";
  if(!dateVal){ sel.appendChild(new Option("Scegli prima la data…","")); return; }
  var d=new Date(dateVal+"T00:00"), dow=d.getDay();
  var raw=D.hours[dow]||[];
  var isToday=(dateVal===todayStr());
  var nowM=nowRome().getHours()*60+nowRome().getMinutes();
  sel.appendChild(new Option("Scegli un orario…",""));
  var any=false;
  raw.forEach(function(r,idx){
    var s=toMin(r[0]), e=toMin(r[1]); if(e<=s)e+=1440;
    var grp=document.createElement("optgroup");
    grp.label=(idx===0?"Pranzo":"Cena")+"  ("+r[0]+"–"+r[1]+")";
    var added=false;
    for(var m=s; m<=e-15; m+=15){
      if(isToday && m <= nowM+30) continue; // margine 30 min, solo oggi
      var o=new Option(fmtMin(m), fmtMin(m)); grp.appendChild(o); added=true; any=true;
    }
    if(added) sel.appendChild(grp);
  });
  if(!any){
    sel.innerHTML=""; sel.appendChild(new Option(isToday?"Nessun orario disponibile per oggi":"Chiuso in questa data",""));
    $("#book-hint").textContent=isToday?"Per oggi il servizio è terminato: prova con un altro giorno.":"In questa data siamo chiusi: scegli un altro giorno.";
  } else {
    $("#book-hint").textContent="Gli orari disponibili seguono gli orari di apertura del locale.";
  }
}
function setErr(id,on){ $(id).parentElement.classList.toggle("invalid",on); return !on; }
function setupBooking(){
  var f=$("#book-form"); if(!f) return;
  var dateI=$("#f-data");
  dateI.min=todayStr();
  dateI.addEventListener("change",function(){ buildTimes(dateI.value); });

  f.addEventListener("submit",function(ev){
    ev.preventDefault();
    var nome=$("#f-nome").value.trim();
    var pers=parseInt($("#f-persone").value,10);
    var data=$("#f-data").value;
    var ora=$("#f-orario").value;
    var ok=true;
    ok &= setErr("#f-nome", nome.length<2);
    ok &= setErr("#f-persone", !(pers>=1 && pers<=20));
    ok &= setErr("#f-data", !data || data<todayStr());
    ok &= setErr("#f-orario", !ora);
    if(!ok){ var bad=$(".field.invalid input,.field.invalid select"); if(bad) bad.focus(); return; }

    var dp=data.split("-"); var dataIt=dp[2]+"/"+dp[1]+"/"+dp[0];
    var msg="Ciao Mordi e Fuggi! Vorrei prenotare un tavolo.\n"+
            "Nome: "+nome+"\nPersone: "+pers+"\nData: "+dataIt+"\nOrario: "+ora+"\nGrazie!";
    var link=waLink(msg);
    $("#book-ok-link").href=link;
    $("#book-ok").classList.add("show");
    window.open(link,"_blank","noopener");
    $("#book-ok").scrollIntoView({behavior:"smooth",block:"center"});
  });

  // togli errore mentre si corregge
  ["#f-nome","#f-persone","#f-data","#f-orario"].forEach(function(s){
    $(s).addEventListener("input",function(){ this.parentElement.classList.remove("invalid"); });
  });
}

/* ----------------------------------------------------------- JSON-LD */
function injectSchema(){
  var c=D.contact, spec=[];
  for(var dow=0; dow<7; dow++){
    (D.hours[dow]||[]).forEach(function(r){
      spec.push({ "@type":"OpeningHoursSpecification",
        "dayOfWeek":"https://schema.org/"+DAYS_EN[dow],
        "opens":r[0], "closes":r[1] });
    });
  }
  var data={
    "@context":"https://schema.org","@type":"Restaurant",
    "name":D.brand.legalName, "image":[D.seo.url+D.seo.ogImage],
    "logo":D.seo.url+D.brand.logo, "url":D.seo.url,
    "telephone":c.phoneHref, "servesCuisine":["Pizza","Napoletana","Hamburger","Italiana"],
    "priceRange":D.brand.priceRange, "acceptsReservations":"True",
    "address":{"@type":"PostalAddress","streetAddress":c.addressLine,
      "addressLocality":"Teverola","postalCode":"81030","addressRegion":"CE","addressCountry":"IT"},
    "geo":{"@type":"GeoCoordinates","latitude":c.geo.lat,"longitude":c.geo.lng},
    "openingHoursSpecification":spec,
    "hasMenu":D.seo.url+"#menu",
    "sameAs":[c.social.facebook,c.social.instagram].filter(Boolean)
  };
  var s=document.createElement("script"); s.type="application/ld+json";
  s.textContent=JSON.stringify(data); document.head.appendChild(s);
}

/* --------------------------------------------------------------- nav */
function setupNav(){
  var b=$("#burger"), m=$("#mobile-menu");
  if(b) b.addEventListener("click",function(){
    var open=m.classList.toggle("open");
    b.setAttribute("aria-expanded",open?"true":"false");
    b.setAttribute("aria-label",open?"Chiudi menu":"Apri menu");
  });
  if(m) m.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click",function(){ m.classList.remove("open"); b.setAttribute("aria-expanded","false"); });
  });
}

/* --------------------------------------------------------------- init */
renderHero(); renderCucina(); renderFeatured(); renderGallery(); renderPriceNote();
renderMenu(); renderLegend(); renderReviews(); renderAbout();
renderServices(); renderContact(); wireLinks();
setupBooking(); setupNav(); injectSchema();
renderOpen(); setInterval(renderOpen, 60000); // aggiorna ogni minuto
})();
