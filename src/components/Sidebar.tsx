import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faExchangeAlt, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import { SidebarContainer, MenuItem, MenuIcon, SupportButton } from '../Models/StyledComponents';

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