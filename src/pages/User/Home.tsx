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
import {
  useGetDestByIdQuery,
  useGetDestQuery,
} from "../../api/getDestinations";
import MainCard from "../../components/listings/Card";
import BookingBar from "../../components/BookingBar";

const Home: React.FC = () => {
  /*   const { data } = useGetDestByIdQuery({ _id })
  console.log(data?._id) */
  const { destinos } = useDestinations();
  const activities = destinos?.map((dest) => dest.activities);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [selectedLocation, setSelectedLocation] = useState<string>();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>();
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
    const selectedId = event.target.value;
    console.log('se selecciono: ', selectedId)

    const selectedCountry =
      destinos?.find((c) => c?._id === selectedId) || null;
      const activitiesSelected = selectedCountry?.activities 
      //console.log('resultado: ',activitiesSelected)
      setSelectedCountry(activitiesSelected);
  };

  const filteredActivities = activitiesArray.filter(
    (activity) =>
      activity.location.toLowerCase() === selectedLocation?.toLowerCase()
  );

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
        <div className="relative flex items-center justify-center w-full xl:h-[350px] 2xl:h-[400px] transition">
          <HeaderSection
            title="CHOOSE YOUR OWN ADVENTURE!"
            subtitle="Explore the best destinations in the world"
            image={randomDestination?.galleryImage}
          />

          <div className="absolute hidden xl:flex justify-between items-center w-11/12 p-5 bg-white shadow-black/10 shadow-lg -bottom-16 rounded-lg px-10">
            <div className="flex flex-col  justify-center gap-2">
              <span className="font-bold">Location</span>
			  <select onChange={handleSelectChange}>
              {destinos?.map((country) => (
                <option key={country._id} value={country._id}>
                  {country.title}
                </option>
              ))}
            </select>
            </div>
            <div className="flex flex-col  justify-center gap-2">
              <span className="font-bold">Start date</span>
				<input type="date" />
            </div>
            <div className="flex flex-col  justify-center gap-2">
              <span className="font-bold">Ending date</span>
				<input type="date" />
            </div>
            <div className="flex flex-col  justify-center  gap-2">
              <span className="font-bold">Peoples</span>
				<input type="number" />
            </div>
            <div className="bg-[#CE452A] hover:bg-[#CE451b] shadow-md hover:shadow-lg w-[147px] gap-2 text-white rounded-lg text-center cursor-pointer">
              <button className="font-bold p-4 " onClick={() => alert("Search")}>
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* <select value={selectedLocation} onChange={handleSelectChange}>
          <option value="">All Destinations</option>
          <option value="AR">Argentina</option>
          <option value="MX">Mexico</option>
        </select> */}
        </div>
        <ActivitySection destinations={selectedCountry ? selectedCountry : activitiesArray} />
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
                <MainCard key={activity._id} data={activity} />
              ))}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Home;
