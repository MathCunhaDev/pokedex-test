import { pokedexTableHeaders } from "constants/pokedexTableHeaders";
import { selectByFilterType } from "utils/selectByFilterType";
import { useHomeContext } from "hooks/useHomeContext";
import { dataTable } from "utils/dataTable";
import { Select } from "antd";
import * as Compounds from "components/compounds/";
import * as Units from "components/units/";
import * as S from "./styles";

export const Home = () => {
  const {
    pokemonsData,
    filteredPokemons,
    setFilteredPokemons,
    pokemonsTypesFilter,
    setPokemonsTypesFilter,
    loading,
    inputValue,
    setInputValue,
  } = useHomeContext();

  const handleChange = (value: string) => {
    setPokemonsTypesFilter([...value]);
  };

  return (
    <S.Container>
      <Compounds.Header />
      <S.Wrapper>
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Filtrar por tipo"
          onChange={handleChange}
          options={selectByFilterType(filteredPokemons)}
        />
        <Units.SearchInput
          data={pokemonsData}
          setData={setFilteredPokemons}
          inputValue={inputValue}
          setInputValue={setInputValue}
          placeholder="Procure por nome ou registro"
        />
      </S.Wrapper>
      <Compounds.List
        data={dataTable(filteredPokemons, pokemonsTypesFilter)}
        isLoading={loading}
        headers={pokedexTableHeaders}
      />
    </S.Container>
  );
};
