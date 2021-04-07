var km = prompt("Quanti chilometri vuoi percorrere?");
/* console.log(km); */
var età = prompt("Quanti anni hai?");
/* console.log(età); */
var dist_Km = 0.21;
/* console.log(dist_Km); */
var tot_Prezzo = 0;
/* console.log(tot_Prezzo); */
var output = "";
/* console.log(output); */


if (età < 18) {
  dist_Km = dist_Km - ((dist_Km * 20) / 100);
  tot_Prezzo = km * dist_Km;
  output = "Il costo del biglietto è di € " + tot_Prezzo.toFixed(2) + " applicando uno sconto minorenni del 20%.";
} else if (età > 65) {
  dist_Km = dist_Km - ((dist_Km * 40) / 100);
  tot_Prezzo = km * dist_Km;
  output = "Il costo del biglietto è di € " + tot_Prezzo.toFixed(2) + " applicando uno sconto over 65 del 40%.";
} else {
  tot_Prezzo = dist_Km * km;
  output = "Il costo del biglietto è di € " + tot_Prezzo + ".";
}


document.getElementById("km").innerHTML = km;
document.getElementById("età").innerHTML = età;
document.getElementById("costo-biglietto").innerHTML = output;
document.getElementById('thx').innerHTML = "Grazie per aver scelto la nostra compagnia! ";