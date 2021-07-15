let filmTürleri = document.querySelector("#filmTürleri");
let showFilmList = document.querySelector("#showFilmList");
let navbarMenu = document.querySelector(".navbar_menü");
//  NavBar Alanı
let filmList = [
  "4K",
  "Aile",
  "Aksiyon",
  "Animasyon",
  "Belgesel",
  "bilim-kurgu",
  "Dram",
  "Fantastik",
  "Gerilim",
  "Gizem",
  "Hint Filmleri",
  "Hint Filmleri",
  "Kısa film",
  "Komedi",
  "Korku",
  "Kült Filmleri",
  "Macera",
  "Müzik",
  "Romantik",
  "Savaş",
  "Stand Up",
  "Stand Up",
  "Oscar Ödüllü Fimler",
  "Suç",
  "Tarih",
  "Tavsiye Fimler",
  "Tv Film",
  "Vahşi Batı",
];
/* 
showFilmList.addEventListener("click", function () {
  navbarMenu.classList.toggle("show");
});
*/

filmList.forEach(function (films) {
  document.querySelector(
    "#filmTürleri"
  ).innerHTML += `<li class='liStyle'><a>${films}</a></li>`;
  filmTürleri.childNodes;
});
showFilmList.addEventListener("click", function () {
  navbarMenu.classList.toggle("show");
});
