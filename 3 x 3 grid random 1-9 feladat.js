const szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let szetszedett = [...szamok];
function Kiirasa() {
    let szetszedett = [...szamok];
    for (i = 1; i <= 9;i++){
        let szamstring = "" + i
        let osszefuzott = "value" + szamstring;                                     //value1
        let kivalasztott = Math.floor(Math.random() * (szetszedett.length));        //pl: 7     --INDEX
        let leszedesre = szetszedett[kivalasztott];                                 //pl: 6     --KIVALASZTOTT     
        szetszedett.splice(kivalasztott, 1);                                        //kiszedi a tömbből amit használtunk
        document.getElementById(osszefuzott).innerHTML = leszedesre;                //beirja az értéket az elsőbe
}
}