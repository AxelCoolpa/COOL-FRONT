//   Marto !
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations, selectDestinations, selectError, selectLoading } from "../../features/destinationSlice";


import Button from "../../components/buttons/Button";
import GridColumns from "../../components/sections/GridColumns";
import ListingCard from "../../components/listings/ListingCard";
import { EnumData } from "../../types";




const ShowDiscover: React.FC = () => {
  const dispatch = useDispatch();
  const destinations = useSelector(selectDestinations)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  if (loading) {
    return <div>Cargando destinos...</div>
  }
  if (error) {
    return <div>Error al cargar destinos: {error} </div>
  }

  const validDestinations = destinations.filter(destination => destination !== undefined && destination !== null);

  return (
    <>
      <div className="flex flex-wrap">
          <Button
            label="Add adventure"
            onClick={() => navigate("/proveedor-admin/create")}
          />
          <GridColumns>
          {validDestinations.map((destination) => {
						<ListingCard key={destination.id} data={destination.title} />
					})}
          </GridColumns>
      </div>
    </>
  );
};

export default ShowDiscover;
