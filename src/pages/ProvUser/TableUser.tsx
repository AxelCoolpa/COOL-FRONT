//   Marto !

import { useNavigate } from "react-router-dom";

import Button from "../../components/buttons/Button";
import TableCard from "../../components/tables/TableCard";
import HeaderStats from "../../components/headers/HeaderStats";
import TableTrafic from "../../components/tables/TableTrafic";

const rows = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Bob Johnson", age: 40 },
  { id: 4, name: "John Doe", age: 30 },
  { id: 5, name: "Jane Smith", age: 25 },
  { id: 6, name: "Bob Johnson", age: 40 },
];

const ShowDiscover = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderStats />
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <TableCard rows={rows} />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <TableTrafic />
        </div>
        <div className=" mb-12 px-4">
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
