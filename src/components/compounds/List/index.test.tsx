import { render, screen } from "@testing-library/react";
import { List } from "./index";

describe("List", () => {
  const data = [
    { id: 1, name: "João", age: 30 },
    { id: 2, name: "Maria", age: 25 },
    { id: 3, name: "Pedro", age: 40 },
  ];
  const headers = [
    { title: "Id", dataIndex: "id", key: "id" },
    { title: "Nome", dataIndex: "name", key: "name" },
    { title: "Idade", dataIndex: "age", key: "age" },
  ];

  it("should render the table correctly", () => {
    render(<List data={data} headers={headers} isLoading={false} />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    const tableHeadRow = screen.getByRole("row", { name: "Table Header" });
    expect(tableHeadRow).toBeInTheDocument();

    headers.forEach(({ title }) => {
      const tableHeader = screen.getByText(title);
      expect(tableHeader).toBeInTheDocument();
    });

    data.forEach(({ id, name, age }) => {
      const tableRow = screen.getByRole("row", { name: `Row ${id}` });
      expect(tableRow).toBeInTheDocument();

      expect(screen.getByText(id)).toBeInTheDocument();
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(age)).toBeInTheDocument();
    });
  });

  it("should show the loading spinner when isLoading is true", () => {
    render(<List data={data} headers={headers} isLoading={true} />);
    const loadingSpinner = screen.getByRole("progressbar");
    expect(loadingSpinner).toBeInTheDocument();
  });

  it("should show the empty message when data is empty", () => {
    render(<List data={[]} headers={headers} isLoading={false} />);
    const emptyMessage = screen.getByText("Nenhum item encontrado");
    expect(emptyMessage).toBeInTheDocument();
  });
});
