//calcoli per la app sul BMI
function calcola(){
//identificare i dati del form
var peso=document.forms.BMI.peso.valueAsNumber;
var altezza=document.forms.BMI.altezza.valueAsNumber;
var sesso=document.forms.BMI.sesso.value;
//i dati non possono essere vuoti-->required
//verifico se l'utenete è maschio o femmina
if(sesso='m'){
	//applico la forma bmi per maschi
	var totale=peso/(altezza*altezza);
	//Math.pow(base,esponente)
	//Math.pow(altezza,2)
	document.getElementById('calcola').innerHTML="BMI"+totale;
	}
	else if(sesso="f"){
	//se no applico le forma bmi per femmine
	var totale=(peso/(altezza*altezza))*0.9;
		document.getElementById('calcola').innerHTML="BMI ="+totale;
	}
}
function annulla(){
	document.getElementById("calcola").innerHTML="";
}
