import { useState } from "react";
// import styled from "styled-components";

const Header = () => {
    const [status, setStatus] = useState<'syncing' | 'synced'>('syncing');
    // const Header = styled.div`
    //     width: 100vw
    //     display: flex
    //     justify-content: space-between`;
    
    function handleSyncStatus(){
        setStatus('synced');
    }
    return (
        <div className="header">
            <img src="" alt="CR"></img>
            <div className="sync">
                <div>{status}</div>
                <button onChange={handleSyncStatus}><img src="../assets/reload.png" alt="reload" /></button>
            </div>
        </div>
    )
}

export default Header;