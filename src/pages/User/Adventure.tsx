import { useSelector } from "react-redux";
import { useDestinations } from "../../hooks/useDestination";
import { selectError, selectLoading } from "../../features/destinationSlice";
import HeaderSection from "../../components/sections/HeaderSection";
import { Card, CardBody } from "@material-tailwind/react";
import ActivityCard from "../../components/listings/ActivityCard";
import { Destination } from "../../components/sections/AddActivity";

const Discover = () => {
  const { destinos } = useDestinations();
  const activities = destinos?.map((dest) => dest.activities);
  console.log(activities);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  if (loading) {
    return <div>Cargando destinos...</div>;
  }
  if (error) {
    return <div>Error al cargar destinos: {error} </div>;
  }
  const randomDestination = destinos
    ? destinos[Math.floor(Math.random() * destinos.length)]
    : null;
  let activitiesArray: any[] = [];

  if (activities) {
    activities?.forEach((activities) => {
      if (Array.isArray(activities)) {
        activities.forEach((activity) => {
          if (typeof activity === "object" && activity !== null) {
            activitiesArray.push({
              title: activity.title,
              _id: activity._id,
              description: activity.description,
              location: activity.location,
              galleryImage: activity.galleryImage,
            });
          }
        });
      }
    });
  }
  return (
		<>
      <div className="mt-20 gap-3 lg:mx-3">
	  <div className='flex flex-col gap-4 items-center pb-8'>
				<h3 className='text-5xl font-bold'>Discover</h3>
				<h3 className='text-2xl'>Choose your favorite experience</h3>
			</div>	

      <HeaderSection
				title={randomDestination?.title}
				subtitle={randomDestination?.location}
        image={randomDestination?.galleryImage}        
				 />	
      <ActivitySection destinations={activitiesArray} />
      </div>
    </>
  )
};

const ActivitySection: React.FC<{ destinations?: Destination[] }> = ({ destinations }) => {
	return (
	  <Card className="mt-20">
		<CardBody>
		  <div>
			<div className="flex px-5">
			  <div className="grid grid-cols-1 min-[950px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1440px]:grid-cols-4 min-[1540px]:grid-cols-5 min-[1640px]:grid-cols-6 gap-1">
				{destinations?.map((activity) => (
				  <ActivityCard key={activity._id} data={activity} />
				))}
			  </div>
			</div>
		  </div>
		</CardBody>
	  </Card>
	)
  }

export default Discover;
