import React, { useState } from 'react';
import { ImportWalletProp } from '../Models/ApiInterfaces';
import { Overlay, Modal } from '../Models/StyledComponents';

const ImportWalletModal: React.FC<ImportWalletProp> = ({ showModal, onWalletImport, onClose }) => {
  const [walletName, setWalletName] = useState('');
  const [mnemonic, setMnemonic] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onWalletImport(walletName);
    onClose();
  };

  if (!showModal) return null;

  return (
    <Overlay>
      <Modal>
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
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </Modal>
    </Overlay>
  );
};

export default ImportWalletModal;