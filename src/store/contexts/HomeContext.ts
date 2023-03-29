import { createContext } from "react";
import { HomeContextProps } from "models/homeContextProps";

const HomeContextIntialValues: HomeContextProps = {
  pokemonsData: [],
  setPokemonsData: () => {
    throw new Error("not implemented");
  },
  filteredPokemons: [],
  setFilteredPokemons: () => {
    throw new Error("not implemented");
  },
  favoritePokemons: [],
  setFavoritePokemons: () => {
    throw new Error("not implemented");
  },
  pokemonsTypesFilter: [],
  setPokemonsTypesFilter() {
    throw new Error("not implemented");
  },
  inputValue: "",
  setInputValue: () => {
    throw new Error("not implemented");
  },
  loading: true,
  setLoading: () => {
    throw new Error("not implemented");
  },
};

export const HomeContext = createContext<HomeContextProps>(
  HomeContextIntialValues
);
