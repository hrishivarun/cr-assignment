import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { TopHeader, Button } from "../Models/StyledComponents";

const Header = () => {
    const [status, setStatus] = useState<'Syncing' | 'Synced'>('Syncing');

    function handleSyncStatus(){
        setStatus('Synced');
    }
    
    return (
        <TopHeader>
            <img src="" alt="CySync"></img>
            <Button onClick={handleSyncStatus}>
                <FontAwesomeIcon icon={faRefresh}/>
                <span style={{margin:"5px"}}>{status}</span>
            </Button>
        </TopHeader>
    )
}

export default Header;