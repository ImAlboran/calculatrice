///////////////////////////////////////////////////////////////////////////////

function addition(x, y){
    return x+y;
}

function multiplication(x, y){
    return x*y;
}

function soustraction(x, y){
    return x-y;
}

function division(x, y){
    if (y == 0) {
        throw new Error("Impossible de diviser par 0");
    }
    return x/y;
}

function nombreX(){
    return parseInt(prompt("Entrez un premier nombre"));
}

function nombreY(){
    return parseInt(prompt("Entrez un second nombre"));
}

////////////////////////////////////////////////////////////////////////////
var reponses = [1,2,3,4];
var operation = ["Addition", "Multpiplication", "Soustraction", "Division"];
var choix= 0;

do {
    choix = parseInt(prompt("Que souhaitez vous faire ? \n\n 1 - Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - Division \n"));
} while (choix == "" || choix == null || !reponses.includes(choix));

alert("Vous avez choisi l'operation : " + operation[choix-1]);

switch (choix) {
    case 1: //Addition
        alert("Voici le resultat : " + addition(nombreX(), nombreY()))
        break;
    case 2: //Multpiplication
        alert("Voici le resultat : " + multiplication(nombreX(), nombreY()));
        break;
    case 3: //Soustraction
        alert("Voici le resultat : " + soustraction(nombreX(), nombreY()));
        break;
    case 4: //Division
        try{
            alert("Voici le resultat : " + division(nombreX(), nombreY()));
        } catch(e){
            alert(e);
        }
        break; 
    default:
        alert("Rien");
        break;
}

