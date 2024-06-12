import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { TableComponentProps } from '../Models/ApiInterfaces';
import { Table, Thead, Tr, Th, Tbody, Td } from '../Models/StyledComponents';

const TableComponent: React.FC<TableComponentProps> = ({ headers, rows }) => {
    const [tableRows, setRows] = useState<(string | number | JSX.Element)[][]>(rows)
    const handleDelete = (index: number) => {
        setRows(tableRows.filter((_, i) => i !== index));
    }

    useEffect(() => {
        setRows(rows);
    }, [rows])
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
        {tableRows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td key={cellIndex}>
                {cell}
              </Td>
            ))}
            {(headers.length==3) && <Td><FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDelete(rowIndex)} /></Td>}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableComponent;