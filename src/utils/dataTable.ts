import { FormatedPokemonProps } from "models/homeContextProps";

export const dataTable = (
  filteredData: FormatedPokemonProps[],
  checkedData: string[]
) => {
  let checkSelect = filteredData;

  if (checkedData.length > 0) {
    checkSelect = checkSelect.filter((rest) => {
      for (const item of rest.types) {
        for (const data of checkedData) {
          if (item === data) return rest;
        }
      }
    });
  }
  return checkSelect;
};
