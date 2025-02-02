import { displayError, displayPokemon, getPokemonInput } from "./ui.js";

// Fetch Pokémon data
export async function fetchPokemonData(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  if (!response.ok) {
    throw new Error("Pokemon not found");
  }
  return response.json();
}

// Create a Pokémon card element
export function createPokemonCard(pokemon = null) {
  const template = document
    .getElementById("pokemon-card-template")
    .content.cloneNode(true);

  if (pokemon) {
    template.querySelector("h2").textContent = pokemon.name;
    template.querySelector("img").src = pokemon.sprites.front_default;
    template.querySelector("p").textContent = `Type: ${pokemon.types
      .map((type) => type.type.name)
      .join(", ")}`;
  } else {
    template.querySelector("h2").textContent = "Who's that Pokémon?";
    template.querySelector("img").src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
    template.querySelector("img").classList.add("black");
    template.querySelector("p").textContent = "Type: Unknown";
  }

  return template;
}

// Handle search logic
export async function handleSearch() {
  const pokemonInput = getPokemonInput();
  if (!pokemonInput) {
    displayError("Please enter a Pokemon name or ID");
    return;
  }

  try {
    const data = await fetchPokemonData(pokemonInput);
    displayPokemon(data);
  } catch (error) {
    displayPokemon();
  }
}
