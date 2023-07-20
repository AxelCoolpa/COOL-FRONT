import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { deleteAdventure } from "../../features/deleteAdventureSlice";

import { useLocation, useNavigate } from "react-router";
import { motion, useAnimation } from "framer-motion";

import { EnumData } from "../../types";

import HeartButton from "../buttons/HeartButton";
import { useMediaQuery } from "@mui/material";

import ShortText from "../bookingbarfilter/ShortText";
import { Button } from "@material-tailwind/react";

interface ListingCardProps {
  data: EnumData | undefined;
}

const ListingCardnew: React.FC<ListingCardProps> = ({ data }) => {
  const headingControls = useAnimation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const onDelete = async () => {
    await dispatch(deleteAdventure(data?._id));

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    const startAnimation = async () => {
      await headingControls.start({
        x: 0,
        transition: { duration: 0.4, delay: 0.5 },
      });
    };
    startAnimation();
  }, [headingControls]);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const containerStyle: React.CSSProperties = {
    display: "flex",
    gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr",
    margin: "1px",
    justifyContent: "space-between",
    position: "relative", // Agregar posición relativa
  };
  
  const imageContainerStyle: React.CSSProperties = {
    margin: "-1vw",
    borderRadius: "10px",
    display: "flex",
    position: "relative",
    width: "30%"
  };
  /* const gridStyleRight: React.CSSProperties = {
    flexDirection: "column",
    top: "1px",
    left: "2vw",
    position: "relative",
    marginRight: "3vw",
  }; */
  const gridStyleRight: React.CSSProperties = {
    marginTop: "-1vw",
    marginRight: "0",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    width: "34vw",
  }
  const heartStyle: React.CSSProperties = {
    top: "-15px", // Ajustar posición desde la parte superior
    right: "-15px", // Ajustar posición desde la parte derecha
    display: "grid",
    position: "absolute",
    justifyContent: "space-between",
  };
  const priceStyle: React.CSSProperties = {
    bottom: "-25px", // Ajustar posición desde la parte superior
    right: "-20px", // Ajustar posición desde la parte derecha
    display: "flex",
    position: "absolute",
    justifyContent: "space-between",
    gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr",
    margin: "10px",
  };

  const imageStyle: React.CSSProperties = {
    borderRadius: "10px",
  };
  const gridStyle: React.CSSProperties = {
    width: "20vw",
  };
  /* const heartStyle: React.CSSProperties = {
    marginRight: "1px",
    marginTop: "1px",
    display: "flex",
    position: "relative",
  }; */

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 2 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <img src={data?.galleryImage} style={imageStyle} />
        </div>

        <div style={gridStyleRight}>
            <h4 className="grid justify-between text-base ml-5 mt-3 font-semibold">
              {data?.title}
            </h4>
          <div className="ml-5">
            <ShortText text={data?.description} maxLength={60} />
          </div>
        </div>

        <div style={heartStyle}>
          <HeartButton size={25} />
        </div>

        <div style={priceStyle}>
          <Button
            className="shadow-md hover:shadow-lg"
            onClick={() => navigate(`/details/activity/${data?._id}`)}
            variant="outlined"
            size="sm"
          >
            view
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingCardnew;
