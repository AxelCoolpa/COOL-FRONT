//   Marto !

import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/buttons/Button";
import GridColumns from "../../components/sections/GridColumns";
import BookingCard from "../../components/details/BookingCard";
import ListingCard from "../../components/listings/ListingCard";
import { listings } from "../../mocks/listingsCards";

const ShowDiscover = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-wrap">
          <Button
            label="Add adventure"
            onClick={() => navigate("/proveedor-admin/create")}
          />
          <GridColumns>
            {listings.map((data) => (
              <ListingCard key={data.id} data={data} />
            ))}
          </GridColumns>
      </div>
    </>
  );
};

export default ShowDiscover;
