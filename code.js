var kAd="admin";
var sifre="123";

function girisKontrolu(gelenKad,gelenSifre){
    if(gelenKad === kAd && gelenSifre === sifre) { 
        alert("Giriş başarılı");
        return true;
    }
    else if(gelenKad !== kAd && gelenSifre === sifre){
        alert("Kullanıcı adı yanlış");
    }
    else if(gelenKad === kAd && gelenSifre !== sifre){
        alert("Sifre adı yanlış");
    }
    else{
        alert("Kullanıcı Adı ve Şifre Yanlış!");
    }

    return false;
}