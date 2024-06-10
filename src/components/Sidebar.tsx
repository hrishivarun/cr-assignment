import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faExchangeAlt, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #1e1e1e;
  color: white;
  height: 604px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuItem = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
    &:hover {
        background-color: #333;
    }
`;

const MenuIcon = styled.div`
  margin-right: 10px;
`;

const SupportButton = styled.div`
    background-color: #4B3C2B;
    padding: 15px 0;
    border-radius: 0 0 20px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
    background-color: #333;
    }
`

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <div style={{padding: "15px"}}>
        <MenuItem to="/">
          <MenuIcon>
            <FontAwesomeIcon icon={faWallet} />
          </MenuIcon>
          Wallets
        </MenuItem>
        <MenuItem to="/transactions">
          <MenuIcon>
            <FontAwesomeIcon icon={faExchangeAlt} />
          </MenuIcon>
          Last Transactions
        </MenuItem>
      </div>
      <SupportButton>
        <MenuIcon>
          <FontAwesomeIcon icon={faLifeRing} />
        </MenuIcon>
        Support
      </SupportButton>
    </SidebarContainer>
  );
};

export default Sidebar;