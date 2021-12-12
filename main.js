//variable pour le bouton fight et la div action
let fight = document.getElementById("fight");
let fight2 = document.getElementById("fight2");
let fight3 = document.getElementById("fight3");
let fight4 = document.getElementById("fight4");
let action = document.getElementById("action");
let action2 = document.getElementById("action2");
let action3 = document.getElementById("action3");
let action4 = document.getElementById("action4");

//variable des personnage
let chevalier = document.getElementById("Chevalier");
let chaman = document.getElementById("chaman");
let forgeron = document.getElementById("forgeron");
let valkyrie = document.getElementById("valkyrie");

//variable pour la div attaque 
let attaque = document.getElementById("attaque");
let attaque2 = document.getElementById("attaque2");
let attaque3 = document.getElementById("attaque3");
let attaque4 = document.getElementById("attaque4");
let retour = document.getElementById("retour");
let retour2 = document.getElementById("retour2");
let retour3 = document.getElementById("retour3");
let retour4 = document.getElementById("retour4");

//variable pour les bouton attaquer et defendre 
let attaquer = document.getElementById("attaquer");
let attaquer2 = document.getElementById("attaquer2");
let attaquer3 = document.getElementById("attaquer3");
let attaquer4 = document.getElementById("attaquer4");
let defendrechevalier = document.getElementById("defendre");
let defendrechaman = document.getElementById("defendre2");
let defendreforgeron = document.getElementById("defendre3");
let defendrevalkyrie = document.getElementById("defendre4");

//variable degat et pv de l'ennemi
var pvhtml = document.getElementById("pv");
var pvennemi = 1000

//variable pour la vie et la defense des allier 
var pvchevalierhtml = document.getElementById("viechevalier");
var pvchamanhtml = document.getElementById("viechaman");
var pvforgeronhtml = document.getElementById("vieforgeron");
var pvvalkyriehtml = document.getElementById("vievalkyrie");
var defchevalierhtml = document.getElementById("defensechevalier");
var defchamanhtml = document.getElementById("defensechaman");
var defforgeronhtml = document.getElementById("defenseforgeron");
var defvalkyriehtml = document.getElementById("defensevalkyrie");


//variable pour les bouton attaque et defense 
var attaquerhtml = document.getElementById("attaquer");
var attaquer2html = document.getElementById("attaquer2");
var attaquer3html = document.getElementById("attaquer3");
var attaquer4html = document.getElementById("attaquer4");
var defendrehtml = document.getElementById("defendre");
var defendre2html = document.getElementById("defendre2");
var defendre3html = document.getElementById("defendre3");
var defendre4html = document.getElementById("defendre4");

//variable pour les tour 
var tour = 0

//variable pour afficher la deuxième parti du boss et cacher son ancienne forme
var ennemiPart1 = document.getElementsByClassName("ennemi1");
var ennemiPart2 = document.getElementsByClassName("ennemiPartie2");
var vieEnnemiPart1 = document.getElementsByClassName("vieennemi");
var vieEnnemiPart2 = document.getElementsByClassName("vieEnnemiPartie2");

// dégat personnage et ennemi 
function dégatennemi(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min))+min;

}

function dégatchevalier(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min))+min;

}

function dégatchaman(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min))+min;

}

function dégatforgeron(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min))+min;

}

function dégatvalkyrie(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min))+min;

}

function defense(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min)+min)
}


// afficher la selection pour  attaquer et defendre
fight.addEventListener("click", () => {
    if(action.style.visibility = "hidden"){
      
        action.style.visibility = "visible";
    }
})

fight2.addEventListener("click", () => {
    if(action2.style.visibility = "hidden"){
      
        action2.style.visibility = "visible";
    }
})

fight3.addEventListener("click", () => {
    if(action3.style.visibility = "hidden"){
      
        action3.style.visibility = "visible";
    }
})

fight4.addEventListener("click", () => {
    if(action4.style.visibility = "hidden"){
      
        action4.style.visibility = "visible";
    }
})

// bouton retour tout les perso
retour.addEventListener("click", () => {
    if(action.style.visibility = "visible"){
      
        action.style.visibility = "hidden";
    }
})

retour2.addEventListener("click", () => {
    if(action2.style.visibility = "visible"){
      
        action2.style.visibility = "hidden";
    }
})

retour3.addEventListener("click", () => {
    if(action3.style.visibility = "visible"){
      
        action3.style.visibility = "hidden";
    }
})

retour4.addEventListener("click", () => {
    if(action4.style.visibility = "visible"){
      
        action4.style.visibility = "hidden";
    }
})

// ferme toute les div pour le perso 
chevalier.addEventListener("click", () => {
    if(action.style.visibility == "visible"){
        action.style.visibility = "hidden";
    }


})

forgeron.addEventListener("click", () => {
    if(action3.style.visibility == "visible"){
        action3.style.visibility = "hidden";
    }


})

chaman.addEventListener("click", () => {
    if(action2.style.visibility == "visible"){
        action2.style.visibility = "hidden";
    }


})

valkyrie.addEventListener("click", () => {
    if(action4.style.visibility == "visible"){
        action4.style.visibility = "hidden";
    }


})

//affiche la div de selection 
chevalier.addEventListener("click", () => {
    if(attaque.style.visibility != "visible"){
        infos.innerHTML = "chevalier est entrain de réfléchir"
        attaque.style.visibility = "visible";
    }else{
        
        attaque.style.visibility = "hidden";
    }
})

forgeron.addEventListener("click", () => {
    if(attaque3.style.visibility != "visible"){
        infos.innerHTML = "forgeron est entrain de réfléchir"
        attaque3.style.visibility = "visible";
    }else{
        
        attaque3.style.visibility = "hidden";
    }
})

forgeron.addEventListener("click", () => {
    if(action3.style.visibility = "visible"){
      
        action3.style.visibility = "hidden";
    }
})


chaman.addEventListener("click", () => {
    if(attaque2.style.visibility != "visible"){
        infos.innerHTML = "chaman est entrain de réfléchir"
        attaque2.style.visibility = "visible";
    }else{
        
        attaque2.style.visibility = "hidden";
    }
})

chaman.addEventListener("click", () => {
    if(action2.style.visibility = "visible"){
      
        action2.style.visibility = "hidden";
    }
})

valkyrie.addEventListener("click", () => {
    if(action4.style.visibility = "visible"){
      
        action4.style.visibility = "hidden";
    }
})

valkyrie.addEventListener("click", () => {
    if(attaque4.style.visibility != "visible"){
        infos.innerHTML = "valkyrie est entrain de réfléchir"
        attaque4.style.visibility = "visible";
    }else{
        
        attaque4.style.visibility = "hidden";
    }
})

//affiche cache les autres bouton quand tu selection un perso
chevalier.addEventListener("click", () => {
    if(chaman.style.visibility != "visible"){

        chaman.style.visibility = "hidden";
    }
})

chevalier.addEventListener("click", () => {
    if(forgeron.style.visibility != "visible"){

        forgeron.style.visibility = "hidden";
    }
})

chevalier.addEventListener("click", () => {
    if(valkyrie.style.visibility != "visible"){

        valkyrie.style.visibility = "hidden";
    }
})

chaman.addEventListener("click", () => {
    if(chevalier.style.visibility != "visible"){

        chevalier.style.visibility = "hidden";
    }
})

chaman.addEventListener("click", () => {
    if(forgeron.style.visibility != "visible"){

        forgeron.style.visibility = "hidden";
    }
})

chaman.addEventListener("click", () => {
    if(valkyrie.style.visibility != "visible"){

        valkyrie.style.visibility = "hidden";
    }
})

forgeron.addEventListener("click", () => {
    if(valkyrie.style.visibility != "visible"){

        valkyrie.style.visibility = "hidden";
    }
})

forgeron.addEventListener("click", () => {
    if(chaman.style.visibility != "visible"){

        chaman.style.visibility = "hidden";
    }
})

forgeron.addEventListener("click", () => {
    if(chevalier.style.visibility != "visible"){

        chevalier.style.visibility = "hidden";
    }
})

valkyrie.addEventListener("click", () => {
    if(chevalier.style.visibility != "visible"){

        chevalier.style.visibility = "hidden";
    }
})

valkyrie.addEventListener("click", () => {
    if(chaman.style.visibility != "visible"){

        chaman.style.visibility = "hidden";
    }
})

valkyrie.addEventListener("click", () => {
    if(forgeron.style.visibility != "visible"){

        forgeron.style.visibility = "hidden";
    }
})

attaquer.addEventListener("click", () => {
    if(chevalier.style.visibility != "hidden"){

        chevalier.style.visibility = "hidden";
    }
})

attaquer.addEventListener("click", () => {
    if(attaque.style.visibility != "hidden"){

        attaque.style.visibility = "hidden";
    }
})

attaquer.addEventListener("click", () => {
    if(action.style.visibility != "hidden"){

        action.style.visibility = "hidden";
    }
})

attaquer.addEventListener("click", () => {
    if(chaman.style.visibility != "visible"){

        chaman.style.visibility = "visible";
    }
})

attaquer2.addEventListener("click", () => {
    if(chaman.style.visibility != "hidden"){

        chaman.style.visibility = "hidden";
    }
})

defendrechevalier.addEventListener("click", () => {
    if(chevalier.style.visibility != "hidden"){

        chevalier.style.visibility = "hidden";
    }
})

defendrechevalier.addEventListener("click", () => {
    if(attaque.style.visibility != "hidden"){

        attaque.style.visibility = "hidden";
    }
})

defendrechevalier.addEventListener("click", () => {
    if(action.style.visibility != "hidden"){

        action.style.visibility = "hidden";
    }
})

defendrechevalier.addEventListener("click", () => {
    if(chaman.style.visibility != "visible"){

        chaman.style.visibility = "visible";
    }
})

attaquer2.addEventListener("click", () => {
    if(chaman.style.visibility != "hidden"){

        chaman.style.visibility = "hidden";
    }
})

attaquer2.addEventListener("click", () => {
    if(attaque2.style.visibility != "hidden"){

        attaque2.style.visibility = "hidden";
    }
})

attaquer2.addEventListener("click", () => {
    if(action2.style.visibility != "hidden"){

        action2.style.visibility = "hidden";
    }
})

attaquer2.addEventListener("click", () => {
    if(forgeron.style.visibility != "visible"){

        forgeron.style.visibility = "visible";
    }
})

defendrechaman.addEventListener("click", () => {
    if(chaman.style.visibility != "hidden"){

        chaman.style.visibility = "hidden";
    }
})

defendrechaman.addEventListener("click", () => {
    if(attaque2.style.visibility != "hidden"){

        attaque2.style.visibility = "hidden";
    }
})

defendrechaman.addEventListener("click", () => {
    if(action2.style.visibility != "hidden"){

        action2.style.visibility = "hidden";
    }
})

defendrechaman.addEventListener("click", () => {
    if(forgeron.style.visibility != "visible"){

        forgeron.style.visibility = "visible";
    }
})

attaquer3.addEventListener("click", () => {
    if(forgeron.style.visibility != "hidden"){

        forgeron.style.visibility = "hidden";
    }
})

attaquer3.addEventListener("click", () => {
    if(attaque3.style.visibility != "hidden"){

        attaque3.style.visibility = "hidden";
    }
})

attaquer3.addEventListener("click", () => {
    if(action3.style.visibility != "hidden"){

        action3.style.visibility = "hidden";
    }
})

attaquer3.addEventListener("click", () => {
    if(valkyrie.style.visibility != "visible"){

        valkyrie.style.visibility = "visible";
    }
})

defendreforgeron.addEventListener("click", () => {
    if(forgeron.style.visibility != "hidden"){

        forgeron.style.visibility = "hidden";
    }
})

defendreforgeron.addEventListener("click", () => {
    if(attaque3.style.visibility != "hidden"){

        attaque3.style.visibility = "hidden";
    }
})

defendreforgeron.addEventListener("click", () => {
    if(action3.style.visibility != "hidden"){

        action3.style.visibility = "hidden";
    }
})

defendreforgeron.addEventListener("click", () => {
    if(valkyrie.style.visibility != "visible"){

        valkyrie.style.visibility = "visible";
    }
})

attaquer4.addEventListener("click", () => {
    if(valkyrie.style.visibility != "hidden"){

        valkyrie.style.visibility = "hidden";
    }
})

attaquer4.addEventListener("click", () => {
    if(attaque4.style.visibility != "hidden"){

        attaque4.style.visibility = "hidden";
    }
})

attaquer4.addEventListener("click", () => {
    if(action4.style.visibility != "hidden"){

        action4.style.visibility = "hidden";
    }
})

attaquer4.addEventListener("click", () => {
    if(chevalier.style.visibility != "visible"){

        chevalier.style.visibility = "visible";
    }
})

defendrevalkyrie.addEventListener("click", () => {
    if(valkyrie.style.visibility != "hidden"){

        valkyrie.style.visibility = "hidden";
    }
})

defendrevalkyrie.addEventListener("click", () => {
    if(attaque4.style.visibility != "hidden"){

        attaque4.style.visibility = "hidden";
    }
})

defendrevalkyrie.addEventListener("click", () => {
    if(action4.style.visibility != "hidden"){

        action4.style.visibility = "hidden";
    }
})

defendrevalkyrie.addEventListener("click", () => {
    if(chevalier.style.visibility != "visible"){

        chevalier.style.visibility = "visible";
    }
})

// personnage qui attaque l'ennemi
    attaquerhtml.onclick = function(){
        var degatchevalier = dégatchevalier(10,200)
    pvhtml.innerHTML = pvhtml.innerHTML - degatchevalier
    infos.innerHTML = "chevalier viens d'infliger : "+degatchevalier+"à l'ennemi"
    if (pvhtml.innerHTML < 0){pvhtml.innerHTML = 0}
    tour = tour + 1  
    }

    attaquer2html.onclick = function(){
        var degatchaman = dégatchaman(10,200)
    pvhtml.innerHTML = pvhtml.innerHTML - degatchaman
    infos.innerHTML = "chaman viens d'infliger : "+degatchaman+"à l'ennemi"
    if (pvhtml.innerHTML < 0){pvhtml.innerHTML = 0}
    tour = tour + 1 
    }  

    attaquer3html.onclick = function(){
        var degatforgeron = dégatforgeron(10,200)
    pvhtml.innerHTML = pvhtml.innerHTML - degatforgeron
    infos.innerHTML = "forgeron viens d'infliger : "+degatforgeron+"à l'ennemi"
    if (pvhtml.innerHTML < 0){pvhtml.innerHTML = 0} 
    tour = tour + 1
    }   


    attaquer4html.onclick = function(){
        var degatvalkyrie = dégatvalkyrie(10,200)
    pvhtml.innerHTML = pvhtml.innerHTML - degatvalkyrie
    infos.innerHTML = "valkyrie viens d'infliger : "+degatvalkyrie+"à l'ennemi"
    if (pvhtml.innerHTML < 0){pvhtml.innerHTML = 0}
    tour = tour + 1 
    }

//personnage qui se defend 
    defendrehtml.onclick = function(){
        var defendre = defense(50,300)
    defchevalierhtml.innerHTML = defchevalierhtml.innerHTML + defendre
    infos.innerHTML = "chevalier viens de se protégé de " + defendre + " bouclier" 
    tour = tour + 1
    }

    defendre2html.onclick = function(){
        var defendre = defense(50,300)
    defchamanhtml.innerHTML = defchamanhtml.innerHTML + defendre
    infos.innerHTML = "chaman viens de se protégé de " + defendre + " bouclier"
    tour = tour + 1 
    }

defendre3html.onclick = function(){
    var defendre = defense(50,300)
    defforgeronhtml.innerHTML = defforgeronhtml.innerHTML + defendre
    infos.innerHTML = "forgeron viens de se protégé de " + defendre + " bouclier"
    tour = tour + 1
}

defendre4html.onclick = function(){
    var defendre = defense(50,300)
    defvalkyriehtml.innerHTML = defvalkyriehtml.innerHTML + defendre
    infos.innerHTML = "valkyrie viens de se protégé de " + defendre + " bouclier"
    tour = tour + 1
}

// l'ennemi attaque (marche pas)
if (tour === 4){
    var degatennemi = dégatennemi(10,100)
    pvchevalierhtml.innerHTML = pvchevalierhtml.innerHTML - degatennemi
    tour = 0
}

//partie 2 de l'ennemi (marche pas)
if (pvhtml.innerHTML <= 500){
    ennemiPart1.style.visibility = "hidden"
    vieEnnemiPart1.style.visibility = "hidden"
    vieEnnemiPart2.style.visibility = "visible"
    ennemiPart2.style.visibility = "visible"
    infos.innerHTML = "le boss viens de passer a sa phase deux"
}