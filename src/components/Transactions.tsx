import Sidebar from "./Sidebar";
import TableComponent from "./TableComponent";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TransactionsProps } from "../Models/ApiInterfaces";
import { TransactionDetails, Display, View, Head } from "../Models/StyledComponents";

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
        
        setTransactions(transactionsToSet)
        }, [addrs])

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