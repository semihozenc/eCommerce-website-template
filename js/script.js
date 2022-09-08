function uyeol() {
    var rakamlar = "0123456789";
    var shb = true;
    var bayrak = true;
    var mesaj = "";
    var parola = document.getElementById("psw");
    var isimsoyisim = document.getElementById("isimsoyisim");
    var eposta = document.getElementById("eposta");
    var hata = document.getElementById("hata");
    if (isimsoyisim.value == null || isimsoyisim.value == "") {
        mesaj += "İsim Soyisim boş olarak geçemezsiniz." + "<br>";
        bayrak = false;
    }
    if (eposta.value == null || eposta.value == "") {
        mesaj += "E-posta boş olarak geçemezsiniz." + "<br>";
        bayrak = false;
    }
    if (parola.value == null || parola.value == "") {
        mesaj += "Parola boş olarak geçemezsiniz." + "<br>";
        bayrak = false;
    }
    if (parola.value.length < 8) {
        bayrak = false;
        mesaj += "Parola en az 8 karakter olmalıdır." + "<br>";
    }
    for (var i = 0; i < parola.value.length; i++) {
        var karakter = parola.value.charAt(i);
        var s = rakamlar.indexOf(karakter);
        if (s >= 0) {
            shb = false;
        }
    }

    if (shb) {
        bayrak = false;
        mesaj += "En az bir sayı girmelisiniz." + "<br>";
    }
    hata.innerHTML = mesaj;
    return bayrak;
}

function giris() {
    var rakamlar = "0123456789";
    var shb = true;
    var bayrak = true;
    var mesaj = "";
    var parola = document.getElementById("psw");
    var eposta = document.getElementById("eposta");
    var hata = document.getElementById("hata");
    if (eposta.value == null || eposta.value == "") {
        mesaj += "E-posta boş olarak geçemezsiniz." + "<br>";
        bayrak = false;
    }
    if (parola.value == null || parola.value == "") {
        mesaj += "Parola boş olarak geçemezsiniz." + "<br>";
        bayrak = false;
    }
    if (parola.value.length < 8) {
        bayrak = false;
        mesaj += "Parola en az 8 karakter olmalıdır." + "<br>";
    }
    for (var i = 0; i < parola.value.length; i++) {
        var karakter = parola.value.charAt(i);
        var s = rakamlar.indexOf(karakter);
        if (s >= 0) {
            shb = false;
        }
    }
    if (shb) {
        bayrak = false;
        mesaj += "En az bir sayı girmelisiniz." + "<br>";
    }
    hata.innerHTML = mesaj;
    return bayrak;
}