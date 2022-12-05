var acc = document.getElementsByClassName("accordion"); /*https://www.w3schools.com/howto/howto_js_accordion.asp*/
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
/*Seda koodi kasutatakse klõpsatava akordioni loomiseks. See loob klõpsatava nupu, mis libiseva animatsiooniga akordioni avab ja sulgeb.
See algab muutuja "acc" deklareerimisega ja selle määramisega elementidele klassiga "akordion". Seejärel loob see tsükli, mis töötab muutuja "acc" pikkuse ulatuses.
Loopi sees lisab see "acc" muutuja igale üksusele "sündmuskuulaja". See sündmuste kuulaja käivitatakse nupul klõpsamisel.
Kui sellel klõpsate, lülitub "aktiivne" klass ja paneeli maxHeight väärtuseks seatakse kas paneeli scrollHeight või null.
Kui maxHeight on seatud paneeli kerimiskõrgusele, avaneb paneel. Kui see on null, suletakse paneel.*/