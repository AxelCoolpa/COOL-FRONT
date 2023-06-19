//   Marto !
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../../state/actions/destinationActions";
import { selectDestinations } from "../../state/selectors/destinationSelectors";

import Button from "../../components/buttons/Button";
import GridColumns from "../../components/sections/GridColumns";
import ListingCard from "../../components/listings/ListingCard";
import { listings } from "../../mocks/listingsCards";
import { EnumData } from "../../types";




const ShowDiscover: React.FC = () => {
  const dispatch = useDispatch();
  const destinations = useSelector(selectDestinations)
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-wrap">
          <Button
            label="Add adventure"
            onClick={() => navigate("/proveedor-admin/create")}
          />
          <GridColumns>
          {destinations.map((destination: EnumData) => {
						<ListingCard key={destination.id} data={destination} />
					})}
          </GridColumns>
      </div>
    </>
  );
};

export default ShowDiscover;
