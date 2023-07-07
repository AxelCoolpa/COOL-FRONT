import HomeMainSection from "../../components/sections/HomeMainSection";
import {
  Card,
  CardHeader,
  CardBody,
  Switch,
  Typography,
} from "@material-tailwind/react";
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
import { useDestinations } from "../../hooks/useDestination";
import { useAllActivities } from "../../hooks/useActivities";
import { all } from "axios";
import { activities } from "../../features/activitiesSlice";
import { AiFillCalculator } from "react-icons/ai";
import ActivityCard from "../../components/listings/ActivityCard";

const Home = () => {
  const { destinos } = useDestinations();
  const destino = destinos?.map((dest) => dest);
  const { allActivities } = useAllActivities();
  const activities = destinos?.map((dest) => dest.activities);
	console.log(activities)
  
	let activitiesArray = []
	
	if (activities) {
		activities?.forEach((activities) => {
			activities.forEach((activity) => {

				activitiesArray.push({ title: activity.title, _id: activity._id, description: activity.description, location: activity.location, galleryImage: activity.galleryImage })

			});
		})
  }

  const [checkboxValues, setCheckboxValues] = useState([]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  /* const dispatch = useDispatch(); */

  if (loading) {
    return <div>Cargando destinos...</div>;
  }
  if (error) {
    return <div>Error al cargar destinos: {error} </div>;
  }
  /* useEffect(() => {
		dispatch(fetchDestinationsStart());
}, [dispatch]); */
  /* 
const validDestinations = destinations.filter(
	(destination) => destination !== undefined && destination !== null
)
const discover = destinos?[Math.floor(Math.random() * destinations.length)]
 */
  const filteredDestinations = destino?.filter((destination) => {
    if (checkboxValues.length === 0) {
      console.log("ninguna categoría seleccionada");
      return true;
    } else {
      return checkboxValues.some((category) =>
        destination.categories.includes(category)
      );
    }
  });


  return (
    <>
      <div className="mt-12 gap-3 lg:mx-3">
        {/* <HeaderSection
				title='THE PLACE OF YOUR DREAMS'
				subtitle='Explore the best destinations in the world'
				image={discover?.} />	
 */}
        <Card className="mt-12 gap-3 lg:mx-3">
          <Card>
            <CardBody>
              <div className="flex px-5">
                {!loading && !error && (
                  <div className=" grid grid-cols-1 min-[950px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1440px]:grid-cols-4 min-[1540px]:grid-cols-5 min-[1640px]:grid-cols-6 gap-1">
                    {destino?.map((destination) => (
                      <DestinationCard
                        key={destination._id}
                        data={destination}
                      />
                    ))}
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div>
			   {
				activitiesArray &&
				activitiesArray?.map((i) => (
					<ActivityCard
					key={i._id}
					data={i}
				  />
				))
			   }
					 
              </div>
            </CardBody>
          </Card>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3"></div>
          <div className="px-4 pb-4"></div>
        </Card>
      </div>
    </>
  );
};

export default Home;