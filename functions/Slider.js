console.log("hey");

/* State area for this function */
let arrLength;
let selectedIndex = 0;
let startFrom = 0;
let toEnd = 2;
let arrLengthDivideTwo = Math.floor(arrLength / 2);
/* State area for REST API */
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=3436f23d3d1c7bcaf2e7ec1a1611dc52";
const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/original/`;

const queryForPopularMovies = "movie/popular";
const queryForTopRatedMovies = "movie/top_rated";

let GetPopularMoviesEndpoint = `${BASE_URL}${queryForPopularMovies}${API_KEY}`;
let GetTopRatedMoviesEndpoint = `${BASE_URL}${queryForTopRatedMovies}${API_KEY}`;

/* Fetch data */
const fetchMyTopRatedMovies = async (a) => {
  let fetchVariable = await fetch(a);
  let toJson = await fetchVariable.json();
  let response = await toJson.results;
  return response;
};

fetchMyTopRatedMovies(GetTopRatedMoviesEndpoint)
  .then((response) => {
    let data = response;
    console.log(data);
    return data;
  })
  .catch((err) => console.log(err));

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
const leftButton = (movies) => {
  if (selectedIndex == 0) {
    return;
  }
  if (selectedIndex > 0) {
    return (selectedIndex -= 1);
  }
};
const rightButton = (movies) => {
  if (selectedIndex < arrLengthDivideTwo) {
    return (selectedIndex += 1);
  } else {
    return;
  }
};

/* Javascript DOM Methods */

document.querySelector(".fa-chevron-left").addEventListener("click", () => {
  console.log("I am left");
});
document.querySelector(".fa-chevron-right").addEventListener("click", () => {
  console.log("I am right");
});
