export interface HomeContextProps {
  pokemonsData: FormatedPokemonProps[];
  setPokemonsData: (array: FormatedPokemonProps[]) => void;
  filteredPokemons: FormatedPokemonProps[];
  setFilteredPokemons: (array: FormatedPokemonProps[]) => void;
  favoritePokemons: string[];
  setFavoritePokemons: (array: string[]) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export interface PokemonDataProps {
  national_number: string;
  evolution: null | { name: string };
  sprites: { normal: string; large: string; animated: string };
  name: string;
  type: [string, string];
  total: number;
  hp: number;
  attack: number;
  defense: number;
  sp_atk: number;
  sp_def: number;
  speed: number;
}

export interface FormatedPokemonProps {
  key: string;
  image: React.ReactElement;
  name: string;
  registry: string;
  types: string;
  favorite: React.ReactElement;
}
