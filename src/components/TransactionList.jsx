/* eslint-disable react/prop-types */
export default function TransactionList({ transactions, removeTransaction }) {
  return (
    <div>
      <h3>Geçmiş İşlemler</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          const sign = transaction.amount < 0 ? '-' : '+';
          return (
            <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
              {transaction.text} <span>{sign}{Math.abs(transaction.amount)}</span>
              <button className="delete-btn" onClick={() => removeTransaction(transaction.id)}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}