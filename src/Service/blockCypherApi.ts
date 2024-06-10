import axios from 'axios';
import { Transaction } from '../App';
import axiosRetry from 'axios-retry';

export const REACT_APP_BLOCKCYPHER_API_KEY="45cfc995bcd844d197978c1e306adb1a";

axiosRetry(axios, { retries: 3, retryDelay: (retryCount) => {
    console.log(`Retry attempt: ${retryCount}`);
    return retryCount * 2000; // 2 seconds delay between retries
  }});
  
const api = axios.create({
  baseURL: `https://api.blockcypher.com/v1/bcy/test`,
});

export const blockcypherApi = {
  getWallets: () => {
    const wallets = api.get(`/wallets?token=${REACT_APP_BLOCKCYPHER_API_KEY}`)
    .then(res => res.data.wallet_names)
    return wallets;
    },
  getAddresses: (walletName: string) => {
    const addrs = api.get(`/wallets/${walletName}/addresses?token=${REACT_APP_BLOCKCYPHER_API_KEY}`)
    .then( res => res.data.addresses)
    return addrs;
    },
  importWallet: (mnemonic: string, walletName: string) => api.post('/wallets', { mnemonic, walletName }),
  getBalance: (address: string) => {
    const balance = api.get(`/addrs/${address}/balance`)
    .then(res => res.data.balance)
    return balance;
    },
  getTransactions: (address: string) => {
    const txs: Promise<Transaction[]> = 
        api.get(`/addrs/${address}?token=${REACT_APP_BLOCKCYPHER_API_KEY}`)
        .then(res => res.data.txrefs)
    return txs;
    },
};