import { Typography, useMediaQuery } from "@mui/material";
import PriceRangeSlider from "../../components/bookingbarfilter/PriceRangeSlider";
import Reviews from "../../components/bookingbarfilter/Reviews";
import BookingBar from "../../components/BookingBar";
import CategoriesContainer from "../../components/userFilter/CategoriesContainer";
import Carousel from "../../components/carousel/Carousel";

const BookingBarFilter: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const headerStyle: React.CSSProperties = {
    padding: "20px",
    textAlign: "center",
    fontSize: "2em",
    marginTop: "3vw",
  };
  const containerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr",
    gap: "20px",
    margin: "20px",
  };
  const gridStyle: React.CSSProperties = {
    margin: "3vw",
    border: " 1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    padding: "2vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "23vw",
  };
  const container: React.CSSProperties = {
    marginBottom: "3vw",
  };

  return (
    <>
      <div style={headerStyle}>
        <h1 style={{
            fontSize: '2em',
            marginBottom: '1vw',
            fontWeight: 'bold'
        }}
        >Search</h1>
        <BookingBar />
      </div>
      <div style={containerStyle}>
        <div style={gridStyle}>
          <div style={container}>
          <Typography
              style={{
                marginBottom: "0.5vw",
              }}
            >
              Price
            </Typography>
            <PriceRangeSlider />
          </div>
          <div style={container}>
            <Typography
              style={{
                marginBottom: "0.5vw",
              }}
            >
              Start Review
            </Typography>
            <Reviews />
          </div>
          <div>
              
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  );
};

export default BookingBarFilter;
