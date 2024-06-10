import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 701px;
  border-spacing: 0 20px;
`;

const Thead = styled.thead`
  background-color: #333;
  color: white;
`;

const Th = styled.th`
  text-align: start;
  padding: 10px;
  background-color: #000;
  border-top: 1px solid #444;
`;

const Tbody = styled.tbody`
  background-color: #222;
  color: white;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #2a2a2a;
  }
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #444;
  text-align: center;
`;

interface TableComponentProps {
  headers: string[];
  rows: (string | JSX.Element | number)[][];
}

const TableComponent: React.FC<TableComponentProps> = ({ headers, rows }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          {headers.map((header, index) => (
            <Th key={index}>{header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td key={cellIndex}>
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableComponent;