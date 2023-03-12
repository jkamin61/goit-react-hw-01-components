import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => (
  <div className={'transactions-container'}>
    <table className={'transaction-history'}>
      <thead className={'table-header'}>
      <tr className={'items-header'}>
        <th className={'table-header-item'}>Type</th>
        <th className={'table-header-item'}>Amount</th>
        <th className={'table-header-item'}>Currency</th>
      </tr>
      </thead>
      <tbody className={'table-body'}>
      {Object.values(transactions).map((element) => (
        <tr key={element.id} className={'table-row'}>
          <td className={'table-data'}>{element.type}</td>
          <td className={'table-data'}>{element.amount}</td>
          <td className={'table-data'}>{element.currency}</td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.any,
};
