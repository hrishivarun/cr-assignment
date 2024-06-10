import Sidebar from "./Sidebar";
import styled from "styled-components";
import TableComponent from "./TableComponent";
import { useEffect, useState } from "react";
import { Address } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Display = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: space-around;   
`
const View = styled.div`
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Head = styled.header`
    margin: 20px;
    font-size: 32px;
    font-weight: 900;
    color: orange
`
const TransactionDetails = styled.div`
    color: #800080;
    font-weight: 900;
`

interface TransactionsProps {
    addrs: Address[];
}

const Transactions: React.FC<TransactionsProps> = ({addrs}) => {
    
  const [transactions, setTransactions] = useState<(string | JSX.Element | number)[][]>([]);
    const headers = ['Coin', 'Wallet', 'Amount', 'Result', 'Status'];

    useEffect(() => {
        const transactionsToSet: React.SetStateAction<(string | JSX.Element | number)[][]> = []
        addrs.forEach((addr) => {
            addr.txs.forEach( tx => {
                transactionsToSet.push(
                    [tx.confirmed, addr.walletName, tx.value, 
                    (tx.spent ? <TransactionDetails><FontAwesomeIcon icon={faArrowRight}/>"SPENT"</TransactionDetails> : <TransactionDetails><FontAwesomeIcon icon={faArrowLeft}/>"RECEIVED"</TransactionDetails>), <TransactionDetails>"SUCCESS"</TransactionDetails>])

            })
        })
        // console.log(addrs, walletsToSet)
        setTransactions(transactionsToSet)
        }, [])

    return (
        <Display>
            <Sidebar/>
            <View>
                <Head>Transactions</Head>
                <div style={{marginTop: '20px', padding: '5px 20px'}}>Total Trasactions: {transactions.length}</div>
                <TableComponent headers={headers} rows={transactions}/>
            </View>       
        </Display>
    )
};

export default Transactions;