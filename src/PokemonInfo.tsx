import React, { useEffect, useState } from 'react';

// Define TypeScript interfaces for the data structures.
interface PokemonSummary {
  name: string;
  url: string;
}

interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}

const pokemonCardStyle = {
  
}

const PokemonInfo: React.FC = () => {
  // State for storing the list of Pokémon fetched from the API.
  const [pokemonList, setPokemonList] = useState<PokemonSummary[]>([]);
  const [listLoading, setListLoading] = useState<boolean>(true);
  const [listError, setListError] = useState<string | null>(null);

  // State for storing the detailed info of a selected Pokémon.
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(null);
  const [detailLoading, setDetailLoading] = useState<boolean>(false);
  const [detailError, setDetailError] = useState<string | null>(null);

  return (
    <div>
      <h1>Pokémon Cards</h1>
      {/* Display loading or error state for the group of Pokémon */}
      {listLoading && <p>Loading Pokémon list...</p>}
      {listError && <p>Error: {listError}</p>}
      {/* Display the list of Pokémon fetched from the API */}
      

      {/* Display loading or error state for the selected Pokemon */}
      {detailLoading && <p>Loading Pokémon details...</p>}
      {detailError && <p>Error: {detailError}</p>}
      {/* Display detailed info for the selected Pokémon */}
      
    </div>
  );
};

export default PokemonInfo;