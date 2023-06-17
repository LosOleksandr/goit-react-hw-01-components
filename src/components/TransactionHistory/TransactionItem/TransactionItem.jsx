import PropTypes from 'prop-types';

export default function TransactionItem({ transaction }) {
  const { type, amount, currency } = transaction;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  transaction: PropTypes.objectOf(PropTypes.string).isRequired,
};
