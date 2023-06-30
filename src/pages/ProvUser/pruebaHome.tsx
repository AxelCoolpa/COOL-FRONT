import { Card, CardBody } from "@material-tailwind/react";
import PruebaBookingBar from '../../components/pruebaBookingBar'

const PruebaHome = () => {
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
                
            </div>
            <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">

            </div>
            <div className="px-4 pb-4">

            </div>
        </CardBody>
      </Card>
      </Card>
    </>
  );
};

export default PruebaHome;
