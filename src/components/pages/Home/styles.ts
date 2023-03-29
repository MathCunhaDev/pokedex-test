import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: block;
  max-width: 1330px;
`;

export const Wrapper = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .ant-select,
  .ant-input {
    width: 30% !important;
  }
`;
