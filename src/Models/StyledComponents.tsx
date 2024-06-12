import { Link } from "react-router-dom";
import styled from "styled-components"

export const TopHeader = styled.div`
    color: white;
    font-size: x-large;
    padding: 10px;
    margin: 10px;
    border-bottom: solid red;
    display: flex;
    justify-content: space-between;
    align-items: start;
`

export const Button = styled.button`
    font-size: large;
    padding: 10px;
    color: white;
    background-color: black;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: #2c2c2c; /* Match the dark background color */
  padding: 20px;
  border-radius: 8px;
  width: 545px;
  height: 383px;
  max-width: 90%;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  
  h2 {
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
  }

  .form-group {
    margin-bottom: 20px;

    label {
      color: #b0b0b0; /* Lighter color for labels */
      display: block;
      margin-bottom: 5px;
    }

    input,
    textarea {
      width: 95%;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #444; /* Darker border */
      background: #1c1c1c; /* Dark input background */
      color: #fff; /* Light text color */
      margin-top: 5px;
    }

    textarea {
      height: 100px;
    }
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #d8a24a; /* Button color matching the image */
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #bf8d3c; /* Slightly darker on hover */
    }
  }
`;

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #1e1e1e;
  color: white;
  height: 604px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuItem = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
    &:hover {
        background-color: #333;
    }
`;

export const MenuIcon = styled.div`
  margin-right: 10px;
`;

export const SupportButton = styled.div`
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

export const Table = styled.table`
  width: 701px;
  border-spacing: 0 20px;
`;

export const Thead = styled.thead`
  background-color: #333;
  color: white;
`;

export const Th = styled.th`
  text-align: start;
  padding: 10px;
  background-color: #000;
  border-top: 1px solid #444;
`;

export const Tbody = styled.tbody`
  background-color: #222;
  color: white;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #2a2a2a;
  }
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid #444;
  text-align: center;
`;

export const Head = styled.header`
    margin: 20px;
    font-size: 32px;
    font-weight: 900;
    color: orange
`
export const TransactionDetails = styled.div`
    color: #800080;
    font-weight: 900;
`

export const Display = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: space-around;  
`;

export const View = styled.div`
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const ImportW = styled.button`
    align-self: flex-end;
    margin: 20px;
    font-size: x-large;
    color: white;
    padding: 15px;
    border-radius: 10px;
    background-color: #222;
`;