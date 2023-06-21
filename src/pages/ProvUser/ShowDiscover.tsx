//   Marto !
import React from "react";
import Slider from 'react-slick'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectDestinations,
  selectError,
  selectLoading,
} from "../../features/destinationSlice";
import "../../styles/slick/slick.css"
import "../../styles/slick/slick-theme.css"

import GridColumns from "../../components/sections/GridColumns";
import ListingCard from "../../components/listings/ListingCard";

const ShowDiscover: React.FC = () => {
  const destinations = useSelector(selectDestinations);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const navigate = useNavigate();

  if (loading) {
    return <div>Cargando destinos...</div>;
  }
  if (error) {
    return <div>Error al cargar destinos: {error} </div>;
  }

  const validDestinations = destinations.filter(
    (destination) => destination !== undefined && destination !== null
  );

  return (
    <>
      <div className="flex flex-wrap">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between pt-3 mt-3 mb-3 pb-3">
            <h6 className="text-gray-600 text-md uppercase font-bold">
              Active adventures
            </h6>
            <button
              className="bg-red-500 text-white active:bg-red-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md mr-1 ease-linear transition-all duration-150"
              onClick={() => navigate("/proveedor-admin/create")}
            >
              Add Adventure
            </button>
          </div>

          <div className="flex-auto px-3 lg:px-0 py-10 pt-0">
            <GridColumns>
			<Slider
              dots={true}
              infinite={true}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >

              {validDestinations.map((destination) => (
				  <ListingCard key={destination._id} data={destination} />
				  ))}
				  </Slider>
            </GridColumns>
          </div>
        </div>
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between pt-3 mt-3 mb-3 pb-3">
            <h6 className="text-gray-600 text-md uppercase font-bold">
              Inactive adventures
            </h6>
          </div>

          <div className="flex-auto px-3 lg:px-0 py-10 pt-0">
            <GridColumns>
              {validDestinations.map((destination) => (
                <ListingCard key={destination._id} data={destination} />
              ))}
            </GridColumns>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDiscover;
