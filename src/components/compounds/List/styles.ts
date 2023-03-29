import { ConfigProvider, Empty, Input, Spin, Table } from "antd";
import styled from "styled-components";

export const List = styled(Table)`
  .ant-table-cell:last-of-type {
    svg {
      cursor: pointer;
      color: #e2e2e2;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: #f11818 !important;
      }
    }
  }
`;

export const SearchInput = styled(Input)``;

export const TableConfigs = styled(ConfigProvider)``;
export const TableEmpty = styled(Empty)``;
export const TableSpin = styled(Spin)``;
