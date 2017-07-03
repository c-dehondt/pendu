var mots= ["sac"];
var ordi= mots [Math.trunc(Math.random() * mots.length)];
var lettre=[];
var scoreJ=0;
var nbEssai=0;
var ok=0;


var resultat = "";
for (var i = 0; i < ordi.length; i++) {
  resultat += "-";
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
    ok++;
    document.getElementById("affichage").innerHTML= resultat;
  }
 }

  if(ok <1){
    lettre.push(joueur);
    document.getElementById("null").innerHTML= lettre;
    nbEssai++
    document.getElementById("essai").innerHTML= nbEssai;
    ok=0;
}else {
  lettre.push(joueur);
  document.getElementById("null").innerHTML= lettre;
  ok=0;
}

    if (resultat == ordi) {
      alert("tu as gagné, bravo!!")
      reset();

    }else if(nbEssai >= 10){
      alert("tu as perdu" + "  le mot"+ "   " + ordi)
      reset();
    }document.getElementById("essai").innerHTML= nbEssai;
}

    function reset() {
      nbEssai =0;
      window.location.reload();
    }
