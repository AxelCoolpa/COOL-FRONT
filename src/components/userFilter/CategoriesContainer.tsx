import { useState } from "react";
import { categories } from "../categories/categories";
import CategoryInput from "../bookingbarfilter/CategoryInput";
import { useMediaQuery } from "@mui/material";

const CategoriesContainer: React.FC = () => {
  const [formData, setFormData] = useState<{ category: string[] }>({
    category: [],
  });
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
  }; const isMidScreen = useMediaQuery('(max-width: 3000px)');
  const isSmallScreen = useMediaQuery('(max-width: 1600px)');

  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px',
    fontSize: '2em',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '2vw',
    marginRight: '1vw',
    padding: '3vw',
    overflow: 'hidden',
  };
  return (
    <>
      <div
      >
        <div style={containerStyle}>
          {categories.map((item) => (
            <ul key={item.label}>
              <CategoryInput
                handleChange={handleCheckboxChange}
                label={item.label}
                icon={item.icon}
                id={item.label}
                name={item.label}
                value={item.label}
              />
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesContainer;
