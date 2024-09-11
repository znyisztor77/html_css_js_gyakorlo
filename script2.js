function szovegbetolt() {
    let tablazatAdatok = document.getElementById('tablazatAdatok').value; // Beolvasás a textarea mezőből    
    let elemek = tablazatAdatok.split('\t'); // A szöveg felosztása tabulátor mentén

    
    elemek.forEach((part, index) => {
        //Megrendelő adatai
        document.getElementById('mnev').value = elemek[2];
        document.getElementById('mcnev').value = elemek[3];
        document.getElementById('mcim').value = elemek[4];
        document.getElementById('mtel').value = elemek[5];
        document.getElementById('memail').value = elemek[6];
        document.getElementById('mcsz').value = elemek[7];
        document.getElementById('masz').value = elemek[8];
        //Hirdetés adatai
        document.getElementById('mhdatum').value = elemek[1];
        document.getElementById('mhldatum').value = elemek[1];
        document.getElementById('mhnev').value = elemek[9];
        document.getElementById('mhcim').value = elemek[10];
        document.getElementById('mhtel').value = elemek[11];
        document.getElementById('mhemail').value = elemek[12];
        document.getElementById('mhweb').value = elemek[13];
        document.getElementById('mhsz').value = elemek[14];
        document.getElementById('mhter').value = elemek[15];
        document.getElementById('mhhelyi').value = elemek[16];
        document.getElementById('mhkat').value = elemek[17];
        document.getElementById('mhtip').value = elemek[18];
        document.getElementById('mhav').value = elemek[19];
        document.getElementById('mhaszf').value = elemek[20];
        document.getElementById('mhazon').value = elemek[0];

    });
}
document.getElementById('mentes').addEventListener('click', function () {
    //Megrendelő
    document.getElementById('nev').innerHTML = document.getElementById('mnev').value.trim();
    document.getElementById('cnev').innerHTML = document.getElementById('mcnev').value.trim();
    document.getElementById('cim').innerHTML = document.getElementById('mcim').value.trim();
    document.getElementById('tel').innerHTML = document.getElementById('mtel').value.trim();
    document.getElementById('email').innerHTML = document.getElementById('memail').value.trim();
    document.getElementById('csz').innerHTML = document.getElementById('mcsz').value.trim();
    document.getElementById('asz').innerHTML = document.getElementById('masz').value.trim();
    //Hirdetés
    document.getElementById('hdatum').innerHTML = document.getElementById('mhdatum').value.trim();
    document.getElementById('hkeltdatum').innerHTML = document.getElementById('mhdatum').value.trim();
    document.getElementById('hldatum').innerHTML = document.getElementById('mhldatum').value.trim();
    document.getElementById('hnev').innerHTML = document.getElementById('mhnev').value.trim();
    document.getElementById('hcim').innerHTML = document.getElementById('mhcim').value.trim();
    document.getElementById('htel').innerHTML = document.getElementById('mhtel').value.trim();
    document.getElementById('hemail').innerHTML = document.getElementById('mhemail').value.trim();
    document.getElementById('hweb').innerHTML = document.getElementById('mhweb').value.trim();
    document.getElementById('hsz').innerHTML = document.getElementById('mhsz').value.trim();
    document.getElementById('hter').innerHTML = document.getElementById('mhter').value.trim();
    document.getElementById('hhelyi').innerHTML = document.getElementById('mhhelyi').value.trim();
    document.getElementById('hkat').innerHTML = document.getElementById('mhkat').value.trim();
    document.getElementById('htip').innerHTML = document.getElementById('mhtip').value.trim();
    document.getElementById('hav').innerHTML = document.getElementById('mhav').value.trim();
    document.getElementById('haszf').innerHTML = document.getElementById('mhaszf').value.trim();
    document.getElementById('hazon').innerHTML = document.getElementById('mhazon').value.trim();

})