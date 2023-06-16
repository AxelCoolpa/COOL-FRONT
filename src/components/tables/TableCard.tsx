import React from 'react';

interface TableProps {
  rows: Row[];
}

interface Row {
  id: number;
  name: string;
  age: number;
}

const TableCard: React.FC<TableProps> = ({ rows }) => {
  return (

    <div
  className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded
    "bg-lightBlue-900 text-white"`}
>
    <table className="items-center w-full bg-transparent border-collapse">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">ID</th>
          <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">Name</th>
          <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">Age</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{row.id}</td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{row.name}</td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
  );
};

export default TableCard;