import { useEffect, useState } from "react";
import { Home } from "../pages/Home";
import { HomeContext } from "store/contexts/HomeContext";
import { getPokemons } from "store/services/getPokemons";
import { FormatedPokemonProps } from "models/homeContextProps";
import { pokemonsListMapper } from "store/mappers/pokemonsListMapper";

export const HomeContainer = () => {
  const [pokemonsData, setPokemonsData] = useState<Array<FormatedPokemonProps>>(
    []
  );
  const [filteredPokemons, setFilteredPokemons] = useState<
    Array<FormatedPokemonProps>
  >([]);
  const [favoritePokemons, setFavoritePokemons] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");

  const loadData = async () => {
    const result = await getPokemons();
    const formatedData = await pokemonsListMapper(
      result.data.results,
      favoritePokemons,
      setFavoritePokemons
    );

    console.log(formatedData);
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
