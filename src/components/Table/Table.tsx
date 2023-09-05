import { useState } from 'react';
import { PropTypes } from '../Table/Table.types';

const Table: React.FC<PropTypes> = (props) => {
  const { records } = props;

  const [searchTerm, setSearchTerm] = useState<string>('');

  if (!records.length) return <p>There are no records in this records!</p>;

  const columnNames = Object.keys(records[0]);

  const filteredRecords = records.filter(
    (record) =>
      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        name="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '0.5rem' }}
        type="text"
      />
      <table style={{ width: '100%', border: '1px solid black' }}>
        <thead>
          <tr>
            {columnNames?.map((column) => (
              <th key={column}>{column.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredRecords?.map((record, index) => (
            <tr key={index}>
              {columnNames?.map((property) => (
                <td style={{ border: '1px solid black' }} key={property}>
                  {record[property] === true
                    ? 'Sí'
                    : record[property] === false
                    ? 'No'
                    : record[property]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
