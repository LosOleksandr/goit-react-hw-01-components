import styled from '@emotion/styled';

export const StatsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  background-color: #f3f6f9;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  li {
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    gap: 8px;
    border-top: 2px #b8bcc0 solid;
    border-right: 2px #b8bcc0 solid;
    &:last-child {
      border-right: none;
    }
  }
`;
