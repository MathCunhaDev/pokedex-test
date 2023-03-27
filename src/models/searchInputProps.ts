import { FormatedPokemonProps } from "./homeContextProps";

export interface SearchInputProps {
  data: FormatedPokemonProps[] | any[];
  setData: (value: []) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  placeholder: string;
}
