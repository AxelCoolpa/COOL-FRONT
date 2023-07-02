import { Card, CardBody, Switch, Typography } from "@material-tailwind/react";
import PruebaBookingBar from "../../components/pruebaBookingBar";
import DestinationCard from "../../components/listings/DestinationCard";
import ListingCardnew from "../../components/listings/ListingCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDestinationsStart,
  selectDestinations,
  selectError,
  selectLoading,
} from "../../features/destinationSlice";
import { useEffect, useState } from "react";
import HeaderSection from "../../components/sections/HeaderSection";
import Loading from "../../components/loadings/Loading";

const PruebaHome = () => {
  const destinations = useSelector(selectDestinations);
  const [checkboxValues, setCheckboxValues] = useState([]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDestinationsStart());
  }, [dispatch]);
  if (loading) {
    return (
      <div className="justify-items-center top-10">
        <Loading />
      </div>
      ) 
  }
  const filteredDestinations = destinations.filter((destination) => {
    if (checkboxValues.length === 0) {
      console.log("ninguna seleccionada");
      return true;
    } else {
      return checkboxValues.some((category) =>
        destination.categories.includes(category)
      );
    }
  });
  const discover =
    filteredDestinations[Math.floor(Math.random() * destinations.length)];
  if (error) {
    return <div>Error al cargar destinos: {error} </div>;
  }

  return (
    <>
      <Card className="mt-6 gap-1 lg:mx-3">
        <div className="relative mt-12 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
          <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
        </div>
        <Card className="xl:flex justify-between items-center -mt-8 mb-20 lg:mx-1">
          <PruebaBookingBar />
        </Card>

        <Card>
          <CardBody>
            <div className="flex px-5">
              {!loading && !error && (
                <div className=" grid grid-cols-1 min-[950px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1440px]:grid-cols-4 min-[1540px]:grid-cols-5 min-[1640px]:grid-cols-6 gap-1">
                  {filteredDestinations.map((listing) => (
                    <DestinationCard key={listing._id} data={listing} />
                  ))}
                </div>
              )}
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <ul className="flex px-9 flex-col gap-6">
              <ListingCardnew data={discover} />
            </ul>
          </CardBody>
        </Card>
        <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3"></div>
        <div className="px-4 pb-4"></div>
      </Card>
    </>
  );
};

export default PruebaHome;
