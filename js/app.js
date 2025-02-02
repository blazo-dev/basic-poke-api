// app.js

import { handleSearch } from "./pokemons.js";
import { displayPokemon } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  displayPokemon();

  const searchButton = document.getElementById("search-btn");
  searchButton.addEventListener("click", handleSearch);
});
