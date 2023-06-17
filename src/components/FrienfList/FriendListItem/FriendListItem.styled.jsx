import styled from '@emotion/styled';

export const Item = styled.li`
  max-width: 100%;
  padding: 10px;
  background-color: #fff;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.status ? '#4ab04b' : '#fa5748')};
`;
