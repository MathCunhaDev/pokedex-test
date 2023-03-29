import { Tag } from "antd";

export const pokedexTableHeaders = [
  {
    title: "Imagem",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
    sortDirections: ["ascend", "descend"],
    sorter: (a: { name: string }, b: { name: string }) => a.name > b.name,
  },
  {
    title: "Registro nacional",
    dataIndex: "registry",
    key: "registry",
    sorter: (a: { registry: number }, b: { registry: number }) =>
      a.registry - b.registry,
  },
  {
    title: "Tipo",
    dataIndex: "types",
    key: "types",
    render: (_: any, { types }: any) => (
      <>
        {types.map((tag: any) => {
          let color = "geekblue";
          switch (tag.toLowerCase()) {
            case "fire":
              color = "volcano";
              break;
            case "bug":
              color = "magenta";
              break;
            case "grass":
              color = "green";
              break;
            case "poison":
              color = "purple";
              break;
            case "ice":
              color = "cyan";
              break;
            case "ground":
              color = "orange";
              break;
            case "fairy":
              color = "pink";
              break;
            case "dragon":
              color = "red";
              break;
            default:
              break;
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Favoritar",
    dataIndex: "favorite",
    key: "favorite",
  },
];
