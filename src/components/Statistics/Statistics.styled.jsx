import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  max-width: 480px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  border: 2px #b8bcc0 solid;
  h2 {
    color: #7c8288;
    background-color: #fff;
    padding: 30px;
    border-bottom: 2px #b8bcc0 solid;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const setBgColor = props => {
  switch (props.labelName) {
    case '.docx':
      return '#4fc4f7';
    case '.pdf':
      return '#a33df3';
    case '.mp3':
      return '#e64c66';
    case '.psd':
      return '#20b8c5';
    default:
      return 'transparent';
  }
};

export const Item = styled.li`
  padding: 20px 30px;
  background-color: ${setBgColor};

  span {
    color: #fff;
    display: block;
    :first-of-type {
      margin-bottom: 8px;
    }
    :last-child {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
