import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table";

export interface WalletList {
    wallet_names: string[]
}

const Wallets = () => {
    const walletUrl = 'https://api.blockcypher.com/v1/btc/main/wallets?token=45b631418494462aab776764abf095a1';

    const [walletList, setWalletList] = useState<WalletList>();
    useEffect(() => {
        axios.get(walletUrl).then((response) => {
            console.log(response.data.wallet_names);    
            setWalletList(response.data.wallet_names);
        });
      }, []);
    return (
        <Table walletList={walletList}/>
    )
}

export default Wallets;