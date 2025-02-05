/* eslint-disable react/prop-types */

export default function TransactionForm({ addTransaction, text, setText, amount, setAmount }) {
  return (
    <div>
      <h3>Yeni İşlem Ekle</h3>
      <form onSubmit={addTransaction}>
        <div className="form-control">
          <label htmlFor="text">Açıklama</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Açıklama giriniz..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Tutar <br />
            (Negatif - gider, Pozitif - gelir)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Tutarı giriniz..."
          />
        </div>
        <button type="submit" className="btn">İşlem Ekle</button>
      </form>
    </div>
  );
}