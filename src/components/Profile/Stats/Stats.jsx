import { StatsList } from './Stats.styled';
import PropTypes from 'prop-types';

export default function Stats({ stats }) {
  return (
    <StatsList>
      {Object.entries(stats).map(([title, value]) => (
        <li key={title}>
          <span>{title}</span>
          <span>{value}</span>
        </li>
      ))}
    </StatsList>
  );
}

Stats.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number),
};
