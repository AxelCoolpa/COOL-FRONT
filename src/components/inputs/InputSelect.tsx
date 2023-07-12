import React from 'react';

type InputSelectProps = {
  onSelectChange: (selectedLocation: string) => void;
};

const InputSelect: React.FC<InputSelectProps> = ({ onSelectChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocation = event.target.value;
    onSelectChange(selectedLocation);
  };

  return (
    <select onChange={handleSelectChange}>
      <option value="">All Locations</option>
      <option value="AR">Argentina</option>
      <option value="MX">México</option>
    </select>
  );
};

export default InputSelect;