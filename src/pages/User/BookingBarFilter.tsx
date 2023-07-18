import { Select, Typography, useMediaQuery } from "@mui/material";
import PriceRangeSlider from "../../components/bookingbarfilter/PriceRangeSlider";
import Reviews from "../../components/bookingbarfilter/Reviews";
import { categories } from "../../components/categories/categories";
import BookingBar from "../../components/bookingbarfilter/BookingBar";
import CategoryInput from "../../components/bookingbarfilter/CategoryInput";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListingCardnew from "../../components/listings/ListingCardnew";
import { useDestinations } from "../../hooks/useDestination";
import { Card, CardBody } from "@material-tailwind/react";

const BookingBarFilter: React.FC = () => {
  const { destinos } = useDestinations();
  const activities = destinos?.map((dest) => dest.activities);
  const [formData, setFormData] = useState<{ category: string[] }>({
    category: [],
  });

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
    marginTop: "3vw",
    marginLeft: "3vw",
    border: " 1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    padding: "2vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "29vw",
  };
  
  const gridInput: React.CSSProperties = {
    marginTop: "1.5vw",
    marginLeft: "3vw",
    border: " 1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    padding: "2vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "29vw",
  };
  const gridStyleRight: React.CSSProperties = {
    marginTop: "3vw",
    marginLeft: "-4vw",
    border: " 1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    padding: "2vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "34vw",
  };
  const gridStyleTable: React.CSSProperties = {
    marginBottom: "1vw",
    marginLeft: "-4vw",
    border: " 1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    padding: "2vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "34vw",
  };
  const categoryGrid: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
  };
  const container: React.CSSProperties = {
    marginBottom: "3vw",
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        category: [...formData.category, value],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        category: formData.category.filter((val) => val !== value),
      }));
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <div style={headerStyle}>
        <h1
          style={{
            fontSize: "2em",
            marginBottom: "1vw",
            fontWeight: "bold",
          }}
        >
          Search
        </h1>
        <BookingBar />
      </div>
      <div style={containerStyle}>
        <div>
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
            {/* {'AQUI'} */}
            <div>
              <Typography
                style={{
                  marginBottom: "0.5vw",
                }}
              >
                Where is your favorite place to explore?
              </Typography>
              <Slider {...settings}>
                {categories.map((item) => (
                  <CategoryInput
                    handleChange={handleCheckboxChange}
                    label={item.label}
                    icon={item.icon}
                    id={item.label}
                    name={item.label}
                    value={item.label}
                  />
                ))}
              </Slider>
            </div>
          </div>
          <div style={gridInput}>
            <Typography
              style={{
                marginBottom: "0.5vw",
              }}
            >
              Select Province
            </Typography>
            <Select type="select">
              <option selected hidden>
                Choose a province
              </option>
            </Select>
          </div>
        </div>
        <div>
          <Card>
            <CardBody>
              <div>
_                    <table>
                      <tbody>
                        {activitiesArray?.map((activity) => (
                          <tr style={gridStyleTable}>
                            <td>
                              <ListingCardnew
                                key={activity._id}
                                data={activity}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
_              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BookingBarFilter;
