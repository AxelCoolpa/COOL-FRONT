//   Marto !

import { useNavigate } from "react-router-dom";

import Button from "../../components/buttons/Button";
import TableCard from "../../components/tables/TableCard";

const rows = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Bob Johnson", age: 40 },
];

const ShowDiscover = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <TableCard rows={rows} />
        </div>
        <div className="w-full mb-12 px-4">
          <Button
            label="Add adventure"
            onClick={() => navigate("/proveedor-admin/create")}
          />
        </div>
      </div>
    </>
  );
};

export default ShowDiscover;
