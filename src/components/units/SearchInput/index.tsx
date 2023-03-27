import { SearchInputProps } from "models/searchInputProps";
import { filterSearch } from "utils/filterSearch";
import * as S from "./styles";

export const SearchInput = ({
  data,
  setData,
  inputValue,
  setInputValue,
  placeholder,
}: SearchInputProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setData(filterSearch(data, event.target.value));
  };

  return (
    <S.SearchInput
      value={inputValue}
      placeholder={placeholder}
      onChange={(event) => handleOnChange(event)}
    />
  );
};
