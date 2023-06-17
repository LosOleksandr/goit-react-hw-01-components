import { StatisticsSection, List, Item } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Statistics({ uploadData, title }) {
  return (
    <StatisticsSection>
      <h2>{title}</h2>
      <List>
        {uploadData.map(({ id, label, percentage }) => (
          <Item key={id} labelName={label}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </Item>
        ))}
      </List>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  uploadData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
