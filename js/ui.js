import { createPokemonCard } from "./pokemons.js";

// Get the input value for Pokémon search
export function getPokemonInput() {
  return document.getElementById("pokemon-input").value.trim().toLowerCase();
}

// Display Pokémon or default card
export function displayPokemon(pokemon = null) {
  const pokemonInfo = document.getElementById("pokemon-info");
  const card = createPokemonCard(pokemon);

  // Clear the container and append the new Pokémon card
  pokemonInfo.innerHTML = "";
  pokemonInfo.appendChild(card);
}

// Display an error message
export function displayError(message) {
  alert(message);
}
