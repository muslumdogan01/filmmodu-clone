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

filmList.forEach(function (films) {
  document.querySelector(
    "#filmTürleri"
  ).innerHTML += `<li class='liStyle'><a>${films}</a></li>`;
  filmTürleri.childNodes;
});
showFilmList.addEventListener("click", function () {
  navbarMenu.classList.toggle("show");
});
// closeButton.addEventListener('click',function(){
//     navbarMenu.classList.toggle('show');
// })

//  NavBar Alanı Sonu

// CONTENT SLİDER ALANI

/* .fetch */
/* res */
/* 
const myComponent = (movie) => {
  return `<div class="content_slider_left">
    <img class="content_slider_left_img" src="img/bmw.jpg" alt="Bmw" />
    <div class="content_slider_left_body">
      <span class="left_imdb">imdb ${movie.imdb}</span>
      <span class="left_pixel">1080p</span>
    </div>
    <div class="content_slider_left_footer">
      <i class="fas fa-chevron-left"></i>
    </div>
    <div class="content_slider_left_description">
      <h1 class="content_slider_left_name">${movie.name}</h1>
      <h2 class="content_slider_left_name2">${movie.desc}</h2>
    </div>
    </div>`;
};

querySelector().innerHtml(myComponent(movie)); */

let models = [
  {
    name: "Planet",
    description: "David Attenborough: A life on Our",
    imdb: "İMDB:6.4",
    pixel: "1080p",
    img: "/img/bmw.jpg",
  },
  {
    name: "Enola Holmes",
    description: "David Attenborough: A life on Our",
    imdb: "İMDB:7.4",
    pixel: "750p",
    img: "/img/honda.jpg",
  },
  {
    name: "The Tomorrow War",
    description: "Geleceğin Savaşı",
    imdb: "3.4",
    pixel: "1080p",
    img: "img/mazda.jpg",
  },
  {
    name: "Sherlock Holmes",
    description: "TheTomorrowWar",
    imdb: "8.4",
    pixel: "750p",
    img: "img/skoda.jpg",
  },
  {
    name: "The Ice Road",
    description: "The Ice Road",
    imdb: "9.8",
    pixel: "1080p",
    img: "img/volvo.jpg",
  },
  {
    name: "Army of the Dead",
    description: "Ölüler Ordusu",
    imdb: "7.4",
    pixel: "750p",
    img: "img/bmw.jpg",
  },
  {
    name: "Nobody",
    description: "Önemsiz Biri",
    imdb: "2.4",
    pixel: "1080p",
    img: "img/mazda.jpg",
  },
];

/* Paramaters and states */

const arrLength = models.length;
let selectedIndex = 1;
let startFrom = 0;
let toEnd = 2;
let arrLengthDivideTwo = Math.floor(arrLength / 2);

/* Functions */

const manageSliceState = (index) => {
  if (index == 0) {
    return [startFrom, toEnd];
  }
  if (index > 0) {
    startFrom += index * 2;
    toEnd += index * 2;
    return [startFrom, toEnd];
  }
};

/*  Object slice method */
const sliceMethodWithParams = (obj, from, to) => {
  const sliceMeth = obj.slice(from, to);
  return sliceMeth;
};

/* Get sliced object */

const getObjectSliced = () => {
  let sliceState = manageSliceState(selectedIndex);
  let slicedObject = sliceMethodWithParams(
    models,
    sliceState[0],
    sliceState[1]
  );
  return slicedObject;
};

/* Button click method functions */
const leftButton = (models) => {
  if (selectedIndex == 0) {
    return;
  }
  if (selectedIndex > 0) {
    return (selectedIndex -= 1);
  }
};
console.log("selam");
const rightButton = (models) => {
  if (selectedIndex < arrLengthDivideTwo) {
    return (selectedIndex += 1);
  } else {
    return;
  }
};

/* Javascript DOM Methods */

document.querySelector(".fa-chevron-left").addEventListener("click", () => {
  leftButton(models);
  document.querySelector(".left_imdb").textContent = getObjectSliced()[0].imdb;
});
document.querySelector(".fa-chevron-right").addEventListener("click", () => {
  rightButton(models);
  document.querySelector(".left_imdb").textContent = getObjectSliced()[0].imdb;
});

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "3436f23d3d1c7bcaf2e7ec1a1611dc52";

let GetPopularMoviesEndpoint = `${BASE_URL}movie/popular?api_key=${API_KEY}`;
let GetTopRatedMoviesEndpoint = `${BASE_URL}movie/top_rated?api_key=${API_KEY}`;
let GetImageEndpoint = `https://image.tmdb.org/t/p/original/`;
let client = document.querySelector("#client");

/* For images  */
/* 
  fetch(GetTopRatedMoviesEndpoint)
  .then((Response) => Response.json())
  .then((json) => {
    console.log("Top Rated", json);
  }); */
