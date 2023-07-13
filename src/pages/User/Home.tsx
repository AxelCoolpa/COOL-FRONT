import { Card, CardBody } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../features/destinationSlice";
import { useEffect, useState } from "react";
import HeaderSection from "../../components/sections/HeaderSection";
import { useDestinations } from "../../hooks/useDestination";
import ActivityCard from "../../components/listings/ActivityCard";
import { Destination } from "../../components/sections/AddActivity";
import InputSelect from "../../components/inputs/InputSelect";
import { useAllActivities } from "../../hooks/useActivities";
import { useGetDestByIdQuery, useGetDestQuery } from "../../api/getDestinations";

const Home: React.FC = () => {
/*   const { data } = useGetDestByIdQuery({ _id })
  console.log(data?._id) */
  const { destinos } = useDestinations();
  const activities = destinos?.map((dest) => dest.activities);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [selectedLocation, setSelectedLocation] = useState<string>();
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
    
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  const filteredActivities = activitiesArray.filter(
        (activity) => activity.location.toLowerCase() === selectedLocation?.toLowerCase()
      )

  if (loading) {
    return <div>Cargando destinos...</div>;
  }
  if (error) {
    return <div>Error al cargar destinos: {error} </div>;
  }

  const randomDestination = destinos
    ? destinos[Math.floor(Math.random() * destinos.length)]
    : null;

  return (
    <>
      <div className="mt-20 gap-3 lg:mx-3">
        <HeaderSection
          title="CHOOSE YOUR OWN ADVENTURE!"
          subtitle="Explore the best destinations in the world"
          image={randomDestination?.galleryImage}
        />
        <div>
        {/* <select value={selectedLocation} onChange={handleSelectChange}>
          <option value="">All Destinations</option>
          <option value="AR">Argentina</option>
          <option value="MX">Mexico</option>
        </select> */}
      </div>
        <ActivitySection destinations={activitiesArray} />
      </div>
    </>
  );
};

const ActivitySection: React.FC<{ destinations?: Destination[] }> = ({
  destinations,
}) => {
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
  );
};

export default Home;
