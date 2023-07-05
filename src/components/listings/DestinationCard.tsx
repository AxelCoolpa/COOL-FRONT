import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { deleteAdventure } from "../../features/deleteAdventureSlice";

import { useLocation, useNavigate } from "react-router";
import { motion, useAnimation } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

import { EnumData } from "../../types";

// import Dropdown from '../dropdown/index'
// import HeartButton from '../buttons/HeartButton'
// import MoreOptionsButton from '../buttons/MoreOptionsButon'
// import EditButon from '../buttons/EditButton'
// import DeleteButton from '../buttons/DeleteButton'
// import { toast } from 'react-hot-toast'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import HeartButton from "../buttons/HeartButton";

interface ListingCardProps {
  data: EnumData | undefined;
}

const ListingCardnew: React.FC<ListingCardProps> = ({ data }) => {
  const headingControls = useAnimation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const averageRating = data?.rating
    .reduce((a, b) => a + b / data?.rating.length, 0)
    .toString()
    .slice(0, 3);

  useEffect(() => {
    const startAnimation = async () => {
      await headingControls.start({
        x: 0,
        transition: { duration: 0.4, delay: 0.5 },
      });
    };
    startAnimation();
  }, [headingControls]);

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 2 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="mx-3 my-4" color="transparent" shadow={false}>
        <CardHeader
          floated={false}
          color="gray"
          className="mx-0 mt-0 mb-4 h-64 xl:h-40"
        >
          <div className="absolute top-3 right-3">
            <HeartButton size={25} />
          </div>
          <img
            src={data?.gallery[0]}
            alt={data?.title}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="py-0 px-1">
          <Typography
            variant="small"
            className="font-normal text-blue-gray-500"
          >
            {data?.location}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mt-1 mb-2">
            {data?.title}
          </Typography>
          {data?.activities ||
          data?.starterPack ||
          data?.startTime ||
          data?.endTime ? (
            <ul className="flex flex-col justify-center px-3 py-1 text-xs gap-1 text-[#00000080]">
              {data?.activities && (
                <li>
                  <div className="flex items-center">
                    <BsDot size={20} />
                    {data?.activities}
                  </div>
                </li>
              )}
              {/* {data?.starterPack && (
                <li>
                  <div className="flex items-center gap-1">
                    <BsDot size={20} />
                    {data?.starterPack}
                  </div>
                </li>
              )}
              {data?.startTime && (
                <li>
                  <div className="flex items-center gap-1">
                    <BsDot size={20} />
                    {data?.startTime}{" "}
                    {data?.endTime ? `to ${data?.endTime}` : null}
                  </div>
                </li>
              )} */}
            </ul>
          ) : null}
        </CardBody>
        <CardFooter className="mt-3 flex items-center justify-between py-0 px-1">
          <a>
            <Button onClick={() => navigate(`/details/${data?._id}`)} variant="outlined" size="sm">
              view
            </Button>
          </a>
          <div>
            {/* <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="xs"
                              variant="circular"
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          </Tooltip> */}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ListingCardnew;
