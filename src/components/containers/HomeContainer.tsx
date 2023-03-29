import { useEffect, useState } from "react";
import { Home } from "../pages/Home";
import { HomeContext } from "store/contexts/HomeContext";
import { getPokemons } from "store/services/getPokemons";
import { FormatedPokemonProps } from "models/homeContextProps";
import { pokemonsListMapper } from "store/mappers/pokemonsListMapper";

export const HomeContainer = () => {
  const [pokemonsData, setPokemonsData] = useState<FormatedPokemonProps[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<
    FormatedPokemonProps[]
  >([]);
  const [favoritePokemons, setFavoritePokemons] = useState<string[]>([]);
  const [pokemonsTypesFilter, setPokemonsTypesFilter] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");

  const handleFavoritePokemons = (id: string) => {
    setFavoritePokemons((oldArray: string[]) => [...oldArray, id]);
  };

  const loadData = async () => {
    const result = await getPokemons();
    const formatedData = await pokemonsListMapper(
      result.data.results,
      handleFavoritePokemons
    );

    setPokemonsData(formatedData);
    setFilteredPokemons(formatedData);
    setLoading(false);
  };

  console.log(favoritePokemons);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <HomeContext.Provider
      value={{
        pokemonsData,
        setPokemonsData,
        filteredPokemons,
        setFilteredPokemons,
        favoritePokemons,
        setFavoritePokemons,
        pokemonsTypesFilter,
        setPokemonsTypesFilter,
        loading,
        setLoading,
        inputValue,
        setInputValue,
      }}
    >
      <Home />
    </HomeContext.Provider>
  );
};
