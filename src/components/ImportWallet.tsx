import React, { useState } from 'react';
import './ImportWallet.css';

const ImportWallet = () => {
  const [walletName, setWalletName] = useState('');
  const [mnemonic, setMnemonic] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log('Wallet Name:', walletName);
    console.log('Mnemonic:', mnemonic);
  };

  return (
    <div className="import-wallet-container">
      <div className="import-wallet">
        <h2>Import Wallet</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Enter your wallet name :</label>
            <input
              type="text"
              value={walletName}
              onChange={(e) => setWalletName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Enter your Mnemonic :</label>
            <textarea
              value={mnemonic}
              onChange={(e) => setMnemonic(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ImportWallet;