"use strict";

//déclaration de l'objet etudiants , comme dans le slide 39
const tabEtudiants=[{
        matricule : '1000',
        nom : 'JOHN',
        prenom : 'DOE',
        note : 14,
},

{                                //déclaration du tableau  etudiants ,comme dans le slide 38
        matricule : '2000',
        nom : 'BOB',
        prenom : 'CARLTON',
        note : 7.1 ,
},

{
        matricule : '3000',
        nom : 'RAYANE',
        prenom : 'SMITH',
        note : 13.3,
}]

//déclaration de B, comme dans le slide 45
function B(note){
        if (note >=10){ //utilisation du if , comment dans le slide 42
            console.log("ADMIS");
        }     
   
        else {
            console.log("AJOURNE");
        }
}
//déclaration de A avec un callback , comme dans le slide 47
function A(callback){
    for (let i=0; i<tabEtudiants.length; i++){ //utilisation du for,  comme dans le slide 44
       console.log(tabEtudiants[i].matricule);
       callback(tabEtudiants[i].note );
    }
   
}
