const apiKey = "c0be837d2dd80bb881003fccf749261f";
const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.results.slice(0, 4);
    const container = document.getElementsByClassName("movie-cards")[0];
    container.innerHTML = "";

    movies.forEach((movie) => {
      const posterUrl = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
      const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `
  <img src="${posterUrl}" alt="">
  <p>${movie.title}</p>
  <p><svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" id="star"><defs>
    <linearGradient id="b" x1="-1483.396" x2="-1155.767" y1="1056.787" y2="1056.787" 
    gradientUnits="userSpaceOnUse" xlink:href="#a"></linearGradient>
    <linearGradient id="a"><stop offset="0" stop-color="#fcd635">
    </stop><stop offset="1" stop-color="#f7a928"></stop></linearGradient>
  </defs><path fill="url(#b)"
   d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" 
   color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" style="marker:none"></path></svg> ${movie.vote_average}</p>
`;
      container.appendChild(card);
    });
  })
  .catch((error) => console.log(error));

const apiUrl2 = `https://api.themoviedb.org/3/movie/343611?api_key=${apiKey}`;
var movieData;
fetch(apiUrl2)
  .then((response) => response.json())
  .then((data) => {
    movieData = data; // store the JSON object data in a variable
    console.log(movieData); // log the variable to the console
    // do something with the data, such as display it on the page
  })
  .catch((error) => console.error(error)); // handle any errors
console.log(movieData);
const searchInput = document.getElementsByClassName("search")[0];

searchInput.addEventListener("keyup", async () => {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput.value}`;
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.results;
    const container = document.getElementsByClassName("movie-cards")[0];
    container.innerHTML = "";
    console.log(movies);
    movies.forEach((movie) => {
      const posterUrl = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
      const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `
  <img src="${posterUrl}" alt="">
  <p>${movie.title}</p>
  <p><svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" id="star"><defs>
    <linearGradient id="b" x1="-1483.396" x2="-1155.767" y1="1056.787" y2="1056.787" 
    gradientUnits="userSpaceOnUse" xlink:href="#a"></linearGradient>
    <linearGradient id="a"><stop offset="0" stop-color="#fcd635">
    </stop><stop offset="1" stop-color="#f7a928"></stop></linearGradient>
  </defs><path fill="url(#b)"
   d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" 
   color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" style="marker:none"></path></svg> ${movie.vote_average}</p>
`;
      container.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
});
