import { Card, CardBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import DestinationCard from "../../components/listings/DestinationCard";
import { Destination } from "../../components/sections/AddActivity";

const DestinationSection: React.FC<{ destinations?: Destination[]}> = ({ destinations }) => {
    const [randomDestination, setRandomDestination] = useState<Destination | null>(null);
    useEffect(() => {
      if (destinations) {
        const randomIndex = Math.floor(Math.random() * destinations.length);
        setRandomDestination(destinations[randomIndex]);
      }
    }, [destinations]);
  
    return (
      <Card className="mt-20 gap-3 lg:mx-3">
        <Card>
          <CardBody>
            <div className="flex px-5">
                <div className="grid grid-cols-1 min-[950px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1440px]:grid-cols-4 min-[1540px]:grid-cols-5 min-[1640px]:grid-cols-6 gap-1">
                  {randomDestination && (
                    <DestinationCard key={randomDestination._id} data={randomDestination} />
                  )}
                </div>
            </div>
          </CardBody>
        </Card>
      </Card>
    )
  }

export default DestinationSection