import HomeMainSection from '../../components/sections/HomeMainSection'
import { Card, CardHeader, CardBody, Switch, Typography } from "@material-tailwind/react";
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
const Home = () => {
	const destinations = useSelector(selectDestinations);
	const [checkboxValues, setCheckboxValues] = useState([]);
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);
	const dispatch = useDispatch();
  
	useEffect(() => {
		dispatch(fetchDestinationsStart());
}, [dispatch]);

const validDestinations = destinations.filter(
	(destination) => destination !== undefined && destination !== null
)

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
	
	if (loading) {
		return (
			<div className="justify-items-center top-10">
		  <Loading />
		</div>
		) 
	}
	if (error) {
	  return <div>Error al cargar destinos: {error} </div>;
	}
	
	return (
		<>
		<HeaderSection
				title='THE PLACE OF YOUR DREAMS'
				subtitle='Explore the best destinations in the world'
				image={discover?.gallery[0]}
				/>

      <Card className="mt-12 gap-3 lg:mx-3">
        <Card>
          <CardBody>
            <div className="flex px-5">
              {/* {!loading && !error && ( */}
                <div className=" grid grid-cols-1 min-[950px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1440px]:grid-cols-4 min-[1540px]:grid-cols-5 min-[1640px]:grid-cols-6 gap-1">
                  {validDestinations.map((destination) => (
                    <DestinationCard key={destination._id} data={destination} />
                  ))}
                </div>
              {/* )} */}
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
	)
}

export default Home
