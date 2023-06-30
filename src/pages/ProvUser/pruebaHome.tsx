import { Card, CardBody, Switch, Typography } from "@material-tailwind/react";
import PruebaBookingBar from "../../components/pruebaBookingBar";
import ListingCardnew from "../../components/listings/ListingCardnew";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinationsStart, selectDestinations, selectError, selectLoading } from "../../features/destinationSlice";
import { useEffect, useState } from "react";

const PruebaHome = () => {
  const destinations = useSelector(selectDestinations);
  const discover = destinations[Math.floor(Math.random() * destinations.length)];
  const [checkboxValues, setCheckboxValues] = useState([]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDestinationsStart());
  }, [dispatch]);

  if (loading) {
    return <div>Cargando destinos...</div>;
  }
  if (error) {
    return <div>Error al cargar destinos: {error} </div>;
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
  return (
    <>
      <Card className="mt-6 gap-6 lg:mx-3">
        <div className="relative mt-12 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
          <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
        </div>
        <Card className="xl:flex justify-between items-center -mt-8 mb-6 lg:mx-3">
          <PruebaBookingBar />
        </Card>

        <Card className="mt-10 gap-6 lg:mx-3">
          <CardBody>
            <div className="flex items-center gap-6">

              <div className="px-5 pt-10">
                {!loading && !error && (
                  <div className="pt-10 px-8 grid grid-cols-1 min-[950px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1440px]:grid-cols-4 gap-11">
                    {filteredDestinations.map((listing) => (
                      <ListingCardnew key={listing._id} data={listing} />
                    ))}
                  </div>
                )}
              </div>

            </div>
            <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography>
              {/* <ul className="flex flex-col gap-6">
                {conversationsData.map((props) => (
                  <MessageCard
                    key={props.name}
                    {...props}
                    action={
                      <Button variant="text" size="sm">
                        reply
                      </Button>
                    }
                  />
                ))}
              </ul> */}
            </div>
            </div>
            <div className="px-4 pb-4"></div>
          </CardBody>
        </Card>
      </Card>
    </>
  );
};

export default PruebaHome;
