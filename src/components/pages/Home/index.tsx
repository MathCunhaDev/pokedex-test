import { List } from "components/compounds/List";
import { useHomeContext } from "hooks/useHomeContext";
import { pokedexTableHeaders } from "constants/pokedexTableHeaders";
import { SearchInput } from "components/units/SearchInput";

export const Home = () => {
  const {
    pokemonsData,
    filteredPokemons,
    setFilteredPokemons,
    loading,
    inputValue,
    setInputValue,
  } = useHomeContext();

  return (
    <>
      <SearchInput
        data={pokemonsData}
        setData={setFilteredPokemons}
        inputValue={inputValue}
        setInputValue={setInputValue}
        placeholder="Procure por nome ou registro"
      />
      <List
        data={filteredPokemons}
        isLoading={loading}
        headers={pokedexTableHeaders}
      />
    </>
  );
};
