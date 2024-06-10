import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import TableComponent from './TableComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Address } from '../App';
// import { blockcypherApi } from '../Service/blockCypherApi';

const Display = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: space-around;  
`;

const View = styled.div`
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ImportW = styled.button`
    align-self: flex-end;
    margin: 20px;
    font-size: x-large;
    color: white;
    padding: 15px;
    border-radius: 10px;
    background-color: #222;
`;

interface WalletsProps {
    addrs: Address[];
  }
  
const Wallets: React.FC<WalletsProps> = ({addrs}) => {
  const headers = ['Coin', 'Holding', 'Actions'];
  const [wallets, setWallets] = useState<(string | JSX.Element | number)[][]>([]);
//   console.log(wallets)
  
//   const handleDelete = (index: number) => {
//     setWallets(wallets.filter((_, i) => i !== index));
//   };
  
  useEffect(() => {
    const walletsToSet: React.SetStateAction<(string | number | JSX.Element)[][]> = []
    console.log(addrs)
    addrs.forEach((addr,index) => {
        walletsToSet.push(["BITCOIN", addr.balance, <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDelete(index)} />])  
        console.log(addr, walletsToSet, index)
    })
    // console.log(addrs, walletsToSet)
    setWallets(walletsToSet)
  }, [])

  return (
    <Display>
      <Sidebar />
      <View>
        <ImportW>
            <FontAwesomeIcon icon={faPlusCircle} />
            <span style={{margin:"0 5px", fontSize: "20px"}}>Import Wallet</span>
        </ImportW>
        <div style={{ marginTop: '20px', padding: '5px 20px' }}>Total Coins: {wallets.length}</div>
        <TableComponent headers={headers} rows={wallets} />
      </View>
    </Display>
  );
};

export default Wallets;