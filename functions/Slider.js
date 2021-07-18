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
    topRatedMoviesArray,
    sliceState[0],
    sliceState[1]
  );
  return slicedObject;
};

/* Button click method functions */
const leftButton = (click) => {
  click.preventDefault();
  if (selectedIndex == 0) {
    fetchMyTopRatedMovies(GetTopRatedMoviesEndpoint)
      .then((response) => {
        topRatedMoviesArray = response;
        if (selectedIndex == 0) {
          const myFirstTwoObject = getObjectSliced();
          document.querySelector(".content_slider").remove();
          const myNewSlide = ` <div class="content_slider">
        <div class="content_slider_left">
          <img class="content_slider_left_img" src="img/bmw.jpg" alt="Bmw" />
          <div class="content_slider_left_body">
            <span class="left_imdb">imdb ${myFirstTwoObject[0].vote_average}</span>
            <span class="left_pixel">1080p</span>
          </div>
          <div class="content_slider_left_footer">
            <i class="fas fa-chevron-left"></i>
          </div>
          <div class="content_slider_left_description">
            <h1 class="content_slider_left_name">${myFirstTwoObject[0].title}</h1>
            <h2 class="content_slider_left_name2">${myFirstTwoObject[0].original_title}</h2>
          </div>
        </div>
        <div class="content_slider_right">
          <img
            class="content_slider_right_img"
            src="img/mazda.jpg"
            alt="Bmw"
          />
          <div class="content_slider_right_body">
            <span class="imdb">imdb ${myFirstTwoObject[1].vote_average}</span>
            <span class="pixel">1080p</span>
          </div>
          <div class="content_slider_right_footer">
            <i class="fas fa-chevron-right"></i>
          </div>
          <div class="content_slider_right_description">
            <h1 class="content_slider_right_name">${myFirstTwoObject[1].title}</h1>
            <h2 class="content_slider_right_name2">${myFirstTwoObject[1].original_title}</h2>
          </div>
        </div>
      </div>`;
          document.querySelector(".content").innerHTML = myNewSlide;
          fetch(`${IMAGE_BASE_URL}${myFirstTwoObject[0].backdrop_path}`).then(
            (res) => {
              document.querySelector(".content_slider_left_img").src = res.url;
            }
          );
          fetch(`${IMAGE_BASE_URL}${myFirstTwoObject[1].backdrop_path}`).then(
            (res) => {
              document.querySelector(".content_slider_right_img").src = res.url;
            }
          );
        }
      })
      .catch((err) => console.log(err));

    return;
  }
  if (selectedIndex > 0) {
    console.log(selectedIndex);
    return (selectedIndex -= 1);
  }
};
const rightButton = (movies) => {
  if (selectedIndex < arrLengthDivideTwo) {
    console.log("müslüm delirdi");
    return (selectedIndex += 1);
  } else {
    return;
  }
};

/* Javascript DOM Methods */

document
  .querySelector(".fa-chevron-left")
  .addEventListener("click", (click) => {
    console.log("I am left");
    leftButton(click);
  });
document.querySelector(".fa-chevron-right").addEventListener("click", () => {
  rightButton();
});

/* State area for this file */
let arrLength;
let arrLengthDivideTwo;

let selectedIndex = 1;
let startFrom = 0;
let toEnd = 2;
/* State area for REST API */
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=3436f23d3d1c7bcaf2e7ec1a1611dc52";
const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/original`;

const queryForPopularMovies = "movie/popular";
const queryForTopRatedMovies = "movie/top_rated";

let GetPopularMoviesEndpoint = `${BASE_URL}${queryForPopularMovies}${API_KEY}`;
let GetTopRatedMoviesEndpoint = `${BASE_URL}${queryForTopRatedMovies}${API_KEY}`;

let topRatedMoviesArray = [];
/* Fetch data */
const fetchMyTopRatedMovies = async (a) => {
  let fetchVariable = await fetch(a);
  let toJson = await fetchVariable.json();
  let response = await toJson.results;
  return response;
};

fetchMyTopRatedMovies(GetTopRatedMoviesEndpoint)
  .then((response) => {
    topRatedMoviesArray = response;
    arrLength = response.length;
    arrLengthDivideTwo = Math.floor(arrLength / 2);
    if (selectedIndex == 0) {
      const myFirstTwoObject = getObjectSliced();
      document.querySelector(".content_slider").remove();
      const myNewSlide = ` <div class="content_slider">
      <div class="content_slider_left">
        <img class="content_slider_left_img" src="img/bmw.jpg" alt="Bmw" />
        <div class="content_slider_left_body">
          <span class="left_imdb">imdb ${myFirstTwoObject[0].vote_average}</span>
          <span class="left_pixel">1080p</span>
        </div>
        <div class="content_slider_left_footer">
          <i class="fas fa-chevron-left"></i>
        </div>
        <div class="content_slider_left_description">
          <h1 class="content_slider_left_name">${myFirstTwoObject[0].title}</h1>
          <h2 class="content_slider_left_name2">${myFirstTwoObject[0].original_title}</h2>
        </div>
      </div>
      <div class="content_slider_right">
        <img
          class="content_slider_right_img"
          src="img/mazda.jpg"
          alt="Bmw"
        />
        <div class="content_slider_right_body">
          <span class="imdb">imdb ${myFirstTwoObject[1].vote_average}</span>
          <span class="pixel">1080p</span>
        </div>
        <div class="content_slider_right_footer">
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="content_slider_right_description">
          <h1 class="content_slider_right_name">${myFirstTwoObject[1].title}</h1>
          <h2 class="content_slider_right_name2">${myFirstTwoObject[1].original_title}</h2>
        </div>
      </div>
    </div>`;
      document.querySelector(".content").innerHTML = myNewSlide;
      fetch(`${IMAGE_BASE_URL}${myFirstTwoObject[0].backdrop_path}`).then(
        (res) => {
          document.querySelector(".content_slider_left_img").src = res.url;
        }
      );
      fetch(`${IMAGE_BASE_URL}${myFirstTwoObject[1].backdrop_path}`).then(
        (res) => {
          document.querySelector(".content_slider_right_img").src = res.url;
        }
      );
    }
  })
  .catch((err) => console.log(err));
