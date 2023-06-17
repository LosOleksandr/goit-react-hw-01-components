import TransactionItem from './TransactionItem/TransactionItem';
import PropTypes from 'prop-types';
import { Table } from './TransactionHistory.styled';

export default function TransactionHistory({ transactionsInfo }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactionsInfo.map(({ id, ...transaction }) => (
          <TransactionItem key={id} transaction={transaction} />
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactionsInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};
