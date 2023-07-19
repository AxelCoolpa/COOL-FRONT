import { Rating } from "@mui/material";
import { useState } from "react";

const Reviews: React.FC = () => {
    const [value, setValue] = useState<number | null>(null);
  return (
    <>
      
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </>
  );
};

export default Reviews;