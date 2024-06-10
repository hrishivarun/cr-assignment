import './App.css'
import Header from './components/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Wallets from './components/Wallets'
import Transactions from './components/Transactions'
import { blockcypherApi } from './Service/blockCypherApi'
import { useEffect, useState } from 'react'

export interface Transaction {
  "tx_hash": string,
  "block_height": number,
  "tx_input_n": number,
  "tx_output_n": number,
  "value": number,
  "ref_balance": number,
  "spent": number,
  "confirmations": number,
  "confirmed": string,
  "double_spend": boolean
}

export interface Address {
  walletName: string,
  address: string,
  balance: number,
  txs: Transaction[]
}
let walletsNames: string[] = [];


function App() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  useEffect(() => {
    blockcypherApi.getWallets()
    .then( wallets => {
        walletsNames = wallets;
        wallets.forEach((walletName: string) => {
          setTimeout(() => {
            blockcypherApi.getAddresses(walletName)
            .then( (addrs) => {
              const address: Address = {
                walletName: walletName,
                address: addrs,
                balance: 0,
                txs: []
              }
              
              addrs.forEach( (addr: string) => {
                setTimeout(()=> {
                  blockcypherApi.getBalance(addr)
                  .then( (balance) => {
                    address.balance = balance;
                  })
                }, 2000)
                setTimeout(() => {
                  blockcypherApi.getTransactions(addr)
                  .then( (txs) => {
                    address.txs = txs;
                  })
                }, 2000)
                
              }, 2000)
              addresses.push(address);
            })
          }, 2000)
      })
        console.log(addresses)
        setAddresses(addresses)
    })
  }, [addresses])

  const screenRouter = createBrowserRouter([
    {
        path: '/',
        element: <Wallets addrs = {addresses}/>
    },
    {
        path: '/transactions',
        element: <Transactions addrs = {addresses}/>
    }
  ]);

  return (
    <>
      <Header/>
      <RouterProvider router={screenRouter}/>
    </>
  )
}

export default App
