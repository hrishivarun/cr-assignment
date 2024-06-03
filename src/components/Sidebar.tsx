import { Link } from "react-router-dom";

const Sidebar = () => {
    
    return (
        <div className="sidebar">
            <Link to="/">Wallets</Link>
            <Link to="/transactions">Transactions</Link>
        </div>
    )
}

export default Sidebar;