import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import TableComponent from './TableComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import ImportWalletModal from './ImportWallet';
import { blockcypherApi } from '../Service/blockCypherApi';
import { Display, View, ImportW } from '../Models/StyledComponents';
import { WalletsProps } from '../Models/ApiInterfaces';
  
const Wallets: React.FC<WalletsProps> = ({addrs}) => {
  const headers = ['Coin', 'Holding', 'Actions'];
  const [wallets, setWallets] = useState<(string | number)[][]>([]);
  const [showImportWallet, setShowImportWallet] = useState(false)

  const handleShowImportWallet = () =>  setShowImportWallet(true);
  const closeModal = () => setShowImportWallet(false);

  const handleImportedWallet = (hdWallet: string) => {
    blockcypherApi.getHdWalletAddrsChains(hdWallet)
    .then((chains) => {
      const walletsToSet = wallets;
      if(chains.length !== 0)
        chains.forEach(chain => {
          chain.chain_addresses.forEach(chainAddress => {
            const addrs = chainAddress.address;
            setTimeout(()=> {
              blockcypherApi.getBalance(addrs)
                .then((balance) => {
                  walletsToSet.push(["BITCOIN", balance]);
                })
              }, 2000)
          })
        })
      setWallets(walletsToSet);
    })
  }

  useEffect(() => {
    const walletsToSet: React.SetStateAction<(string | number)[][]> = []

    addrs.forEach((addr) => {
        walletsToSet.push(["BITCOIN", addr.balance])  
    })
    setWallets(walletsToSet)
  }, [addrs])

  return (
    <Display>
      <Sidebar />
      <View>
        <ImportW onClick={handleShowImportWallet}>
            <FontAwesomeIcon icon={faPlusCircle} />
            <span style={{margin:"0 5px", fontSize: "20px"}}>Import Wallet</span>
        </ImportW>
        <ImportWalletModal showModal={showImportWallet} onWalletImport = {handleImportedWallet} onClose={closeModal}></ImportWalletModal>
        <div style={{ marginTop: '20px', padding: '5px 20px' }}>Total Coins: {wallets.length}</div>
        <TableComponent headers={headers} rows={wallets} />
      </View>
    </Display>
  );
};

export default Wallets;
