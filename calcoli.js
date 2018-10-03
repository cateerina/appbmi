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
		if(totale<20.1){
		document.getElementById('spiegazione').innerHTML="sottopeso";
		}
		else if(totale<20.5){
		document.getElementById('spiegazione').innerHTML="peso ottimale";
		}
		else if(totale<29.9){
		document.getElementById('spiegazione').innerHTML="sovrappeso";
		}
		else if(totale<35){
		document.getElementById('spiegazione').innerHTML="obesità di I grado";
		}
		else if(totale<40){
		document.getElementById('spiegazione').innerHTML="obesità di II grado";
		}
		else{
		document.getElementById('spiegazione').innerHTML="obesità di alto grado";
		}		
	}
	else if(sesso="f"){
	//se no applico le forma bmi per femmine
	var totale=(peso/(altezza*altezza))*0.9;
	document.getElementById('calcola').innerHTML="BMI ="+totale;
		if(totale<18.7){
		document.getElementById('spiegazione').innerHTML="sottopeso";
		}
		else if(totale<23.8){
		document.getElementById('spiegazione').innerHTML="peso ottimale";
		}
		else if(totale<28.6){
		document.getElementById('spiegazione').innerHTML="sovrappeso";
		}
		else if(totale<35){
		document.getElementById('spiegazione').innerHTML="obesità di I grado";
		}
		else if(totale<40){
		document.getElementById('spiegazione').innerHTML="obesità di II grado";
		}
		else{
		document.getElementById('spiegazione').innerHTML="obesità di alto grado";
		}
	}
}
function annulla(){
	document.getElementById("calcola").innerHTML="";
	document.getElementById("spiegazione").innerHTML="";
}



































