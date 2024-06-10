import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const TopHeader = styled.div`
    color: white;
    font-size: x-large;
    padding: 10px;
    margin: 10px;
    border-bottom: solid red;
    display: flex;
    justify-content: space-between;
    align-items: start;
`;

const Button = styled.button`
    font-size: large;
    padding: 10px;
    color: orange;
    background-color: black;
`

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