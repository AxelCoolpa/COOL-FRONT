import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRangeSlider: React.FC = () => {
  const [range, setRange] = useState<[number, number]>([400, 40000]);

  const handleSliderChange = (values: [number, number]) => {
    setRange(values);
  };

  return (
    <div>
      <p style={{
                marginBottom: '1vw'
            }}
      >Selected Range
      <a style={{
        color:'green',
      }}>
         : ${range[0]} - ${range[1]}
        </a> 
      </p>
      <Slider
        min={400}
        max={40000}
        step={100}
        range
        allowCross={false}
        value={range}
        onChange={handleSliderChange as any}
      />
    </div>
  );
};

export default PriceRangeSlider;