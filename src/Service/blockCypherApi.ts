import axios from 'axios';
import axiosRetry from 'axios-retry';
import { ChainAddresses, Transaction } from '../Models/ApiInterfaces';

export const REACT_APP_BLOCKCYPHER_API_KEY="45b631418494462aab776764abf095a1";

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
  getHdWalletAddrsChains: (walletName: string) => {
    const hdWalletAddrsChain: Promise<ChainAddresses[]> = api.get(`/wallets/hd/${walletName}?token=${REACT_APP_BLOCKCYPHER_API_KEY}`)
    .then(res => res.data.chains)
    return hdWalletAddrsChain;
    },
  getAddresses: (walletName: string) => {
    const addrs = api.get(`/wallets/${walletName}/addresses?token=${REACT_APP_BLOCKCYPHER_API_KEY}`)
    .then( res => res.data.addresses)
    return addrs;
    },
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
  generateHDWallet: (walletName: string, mnemonic: string) => {
    const hdWallet = api.post(`/wallets/hd?token=${REACT_APP_BLOCKCYPHER_API_KEY}`,
      { name: walletName, extended_public_key: mnemonic });
    return hdWallet;
    },
};