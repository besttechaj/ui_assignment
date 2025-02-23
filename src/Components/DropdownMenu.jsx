import React, { useState } from 'react';
import dropdown from '../assets/Vector.png';
const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(''); // Store selected value

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor='options'>Choose an option:</label>
      <select id='options' value={selectedOption} onChange={handleChange}>
        <option value=''>
          <img src={dropdown} alt='vector_img' />
        </option>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </select>
      <p>Selected: {selectedOption}</p>
    </div>
  );
};

export default Dropdown;
