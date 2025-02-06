/*for(i = 10; i<20;i++){
    if(i%2){
        console.log(i)
    }
}
 let szam1 = 10;
 let szam2 = 13;
 let osztas = szam2%szam1
 console.log(`Az osztas maradék értéke: ${osztas}`)
 console.log(osztas);
 let szam = Math.floor((Math.random()*100)+1);
 console.log(`Egy véletlen szám 1-100 között:`,szam);
 //console.log(nev);*/

 let szam3 = "35.1";
 let szam4 ="2";
 console.log(typeof szam3)
 /*console.log(+szam3);*/
 console.log(typeof +szam3);
 console.log(+szam3 + +szam4)
/*
 let lista = ['aaa', 'bbb', 'cccc'];
 
lista.forEach(csinal);
 
function csinal(content, index) {
	console.log(content, index);
}
console.log("foreach cucc.")
lista.forEach((element, index) => {
	console.log(element, index);
});

let almak = '3';
let korte = '5';
console.log(+almak + +korte);

console.log(('ba' + + + 'a').toLowerCase());
 
 /*function nevBeker(){
    let nev = prompt('Neved?: ');
    document.getElementById("beker").innerHTML = "Ezt írtad: "+nev;
 }*/
 console.log(null==undefined)

 /*(()=>{console.log(".");})();
 (() => {console.log(".");})();*/
 
 console.log("Itt van");
 (function() {
    console.log("működik"); 
  })();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    for (let i = 0; i < 5; i++) {
        console.log(`Waiting ${i} seconds...`);
        await sleep(i * 1000);
    }
    console.log('Done');
}

demo();

document.addEventListener("DOMContentLoaded", function() {
    // Megkeressük a <p> elemet az id alapján
    const p = document.getElementById("text");
    // Eltároljuk a teljes szöveget
    const fullText = p.textContent;

    // Kezdetben töröljük a <p> elem szövegét
    p.textContent = "";
    // Meghatározzuk a jelenlegi indexet
    let index = 0;

    // Függvény, amely egyetlen karaktert ad hozzá a <p> elemhez
    function addCharacter() {
        if (index < fullText.length) {
            p.textContent += fullText[index];
            index++;
            // Újabb hívás 100 ms múlva
            setTimeout(addCharacter, 27); //A kiírás sebessége itt változtatható
        }
        else{
            setTimeout(() => {
                p.textContent ="";
                index = 0;
                addCharacter();
            },1000);
        }
    }

    // Elindítjuk az első hívást
    addCharacter();
});
const URL_Citatum = "https://www.citatum.hu/napiidezet.php";
var container = document.getElementById("citatum"); 
container.innerHTML = 'A nagy szeretet mindig ki tudja fejezni magát áldozattal és önfeláldozással.(Jack London)';
