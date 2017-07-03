var mots= ["sac"];
var ordi= mots [Math.trunc(Math.random() * mots.length)];
console.log(ordi);


var resultat = "";
for (var i = 0; i < ordi.length; i++) {
  resultat += "_";
}

function choixOrdi(){
document.getElementById("affichage").innerHTML= resultat;
}

function jouer() {

  var joueur=prompt("lettre");


  for(var j=0; j<ordi.length; j++){
  if(joueur == ordi[j]){

    resultat= resultat.split("");

    resultat[j]=ordi[j];

    resultat= resultat.join("");
    document.getElementById("affichage").innerHTML= resultat;

    }
  }
}
//
//,"bonjour", "salut", "hello","chaise", "bureau", "table"
//
//
