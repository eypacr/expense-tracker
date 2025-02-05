/* eslint-disable react/prop-types */
export default function IncomeExpense({ income, expense }) {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Gelir</h4>
        <p className="money plus">{income} ₺</p>
      </div>
      <div>
        <h4>Gider</h4>
        <p className="money minus">{expense} ₺</p>
      </div>
    </div>
  );
}