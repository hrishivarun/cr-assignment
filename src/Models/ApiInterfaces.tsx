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

export interface ChainAddress {
  address: string,
  path: string 
}

export interface ChainAddresses {
  chain_address: ChainAddress[]
}

export interface Address {
  walletName: string,
  address: string,
  balance: number,
  txs: Transaction[]
}

export interface ImportWalletProp {
  showModal: boolean;
  onClose: () => void;
  onWalletImport: (hdWallet: string) => void;
}

export interface TableComponentProps {
  headers: string[];
  rows: (string | JSX.Element | number)[][];
}

export interface TransactionsProps {
  addrs: Address[];
}

export interface WalletsProps {
  addrs: Address[];
}