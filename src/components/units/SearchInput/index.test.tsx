import { render, fireEvent } from "@testing-library/react";
import { SearchInput } from "./index";

describe("SearchInput", () => {
  const data = [
    { id: 1, name: "Joao", age: 30 },
    { id: 2, name: "Maria", age: 25 },
    { id: 3, name: "Pedro", age: 40 },
  ];

  it("should update the data when the input value changes", () => {
    const setData = jest.fn();
    const setInputValue = jest.fn();
    const inputValue = "Joao";
    const placeholder = "Search...";
    const { getByPlaceholderText } = render(
      <SearchInput
        data={data}
        setData={setData}
        inputValue={inputValue}
        setInputValue={setInputValue}
        placeholder={placeholder}
      />
    );

    const input = getByPlaceholderText(placeholder);
    fireEvent.change(input, { target: { value: "Pedro" } });

    expect(setInputValue).toHaveBeenCalledWith("Pedro");
    expect(setData).toHaveBeenCalledWith([{ id: 3, name: "Pedro", age: 40 }]);
  });
});
