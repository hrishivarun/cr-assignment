import './App.css'
import Header from './components/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Wallets from './components/Wallets'
import Transactions from './components/Transactions'
import { blockcypherApi } from './Service/blockCypherApi'
import { useEffect, useState } from 'react'
import { Address } from './Models/ApiInterfaces'


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
