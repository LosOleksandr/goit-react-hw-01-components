import styled from '@emotion/styled';

export const Table = styled.table`
  width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  white-space: nowrap;
  background-color: #fff;
  & > thead {
    background-color: #00bcd5;
  }
  & > tbody {
    text-transform: capitalize;
    & > tr:nth-of-type(even) {
      background-color: #ecf1f3;
    }
  }
`;
