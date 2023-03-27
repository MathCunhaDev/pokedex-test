import { ListProps } from "models/listProps";
import * as S from "./styles";

export const List = ({ data, headers, isLoading }: ListProps) => {
  return (
    <S.TableConfigs
      renderEmpty={() => <S.TableEmpty description="Nenhum item encontrado" />}
    >
      <S.List
        dataSource={data}
        columns={headers}
        loading={{
          indicator: <S.TableSpin size="large" />,
          spinning: isLoading,
        }}
        pagination={{
          defaultCurrent: 1,
          defaultPageSize: 20,
          pageSizeOptions: [20, 50, 100, 150],
          total: data.length,
          showTotal: (total: number) =>
            `Total de ${total} ${total > 1 ? "itens" : "item"}`,
          locale: { items_per_page: "itens em exibição" },
        }}
      />
    </S.TableConfigs>
  );
};
