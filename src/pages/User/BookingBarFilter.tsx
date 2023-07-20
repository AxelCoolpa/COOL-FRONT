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
import { useAllActivities } from "../../hooks/useActivities";
import { activities } from "../../features/activitiesSlice";

interface Country {
  _id: string;
  title: string;
}

const BookingBarFilter: React.FC = () => {
	const { activitiesArray } = useAllActivities();
	const { destinos } = useDestinations();
	const title = destinos?.map((dest) => dest.title);
	const destino = destinos?.map((dest) => dest);
	const activities = destinos?.map((dest) => dest.activities);
	const [selectedCountry, setSelectedCountry] = useState<Country | null>();
	console.log(selectedCountry);
	const [formData, setFormData] = useState<{ category: string[] }>({
	  category: [],
	});
	//console.log("todos los activities", activitiesArray);
  
	/* let activitiesArray: any[] = [];
	console.log(destino);
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
	} */
  
	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
	  const selectedId = event.target.value;
	  console.log("se selecciono: ", selectedId);
	  const selectedCountry =
		destinos?.find((c) => c?._id === selectedId) || null;
	  const activitiesSelected = selectedCountry?.activities;
	  //console.log('resultado: ',activitiesSelected)
	  setSelectedCountry(activitiesSelected);
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
  
	//settings del slider
	const settings = {
	  dots: true,
	  infinite: true,
	  speed: 500,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	};
  
	//estilos
	const isSmallScreen = useMediaQuery("(max-width: 600px)");
	const headerStyle: React.CSSProperties = {
	  padding: "20px",
	  textAlign: "center",
	  position: 'relative',
	  display: 'flex',
	  justifyContent: 'center',
	  marginTop: "1vw",
	  marginBottom: '1.5vw'
	};
	const containerStyle: React.CSSProperties = {
	  display: "grid",
	  gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr",
	  gap: "20px",
	  margin: "20px",
	  marginTop: '1vw'
	};
	const gridStyle: React.CSSProperties = {
	  marginTop: "4vw",
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
	  marginTop: "1vw",
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
  
			  <select onChange={handleSelectChange}>
				{destinos?.map((country) => (
				  <option key={country._id} value={country._id}>
					{country.title}
				  </option>
				))}
			  </select>
			</div>
  
		  </div>
		  <div>
  
  
  
				<div
				  style={{
					marginTop: "3vw",
					marginRight: "3vw",
				  }}
				>
				  <table>
					<tbody>
					  {selectedCountry
						? selectedCountry.map((activity) => (
							<tr style={gridStyleTable} key={activity._id}>
							  <td>
								<ListingCardnew data={activity} />
							  </td>
							</tr>
						  ))
						: activitiesArray.map((activity) => (
							<tr style={gridStyleTable} key={activity._id}>
							  <td>
								<ListingCardnew data={activity} />
							  </td>
							</tr>
						  ))}
					</tbody>
				  </table>
				</div>
  
		  </div>
		</div>
	  </>
	);
  };
  
  export default BookingBarFilter;