import React, { useState } from 'react'
import {Link, useNavigate } from "react-router-dom";

const Home = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [buttonPressed, setButtonPressed] = useState(false);

    const navigate = useNavigate()

    const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((category) => category !== value)
      );
    }
    console.log(selectedCategories[0]);
  };

  const canProceed = selectedCategories.length === 4;

  const handleButtonClick = () => {
    if (canProceed) {
         navigate("/ranking");
    }
    else{
      
    }
    setButtonPressed(true);
  };


  console.log("buttonPressed:", buttonPressed);
console.log("canProceed:", canProceed);

    return (
        <div className="home">
        <div className="pick">
            <h2>Pick 4 categories:</h2>
            {buttonPressed && !canProceed && (
              <div className="hidden_message">
                You have to choose 4 categories so as to proceed!
             </div>
            )}
        </div>
        <div className='e-btn-group'>
          <div className='container'>
          <input type="checkbox" id="checkPolitics" value="Politics" onChange={handleCheckboxChange}/>
          <label className="e-btn" htmlFor="checkPolitics">Politics</label>
          <input type="checkbox" id="checkScience" value="Science" onChange={handleCheckboxChange}/>
          <label className="e-btn" htmlFor="checkScience">Science</label>
          <input type="checkbox" id="checkHistory" value="History" onChange={handleCheckboxChange}/>
          <label className="e-btn" htmlFor="checkHistory">History</label>
          <input type="checkbox" id="checkGeography" value="Geography" onChange={handleCheckboxChange}/>
          <label className="e-btn" htmlFor="checkGeography">Geography</label>
          <input type="checkbox" id="checkTechnology" value="Technology" onChange={handleCheckboxChange}/>
          <label className="e-btn" htmlFor="checkTechnology">Technology</label>
          <input type="checkbox" id="checkMusic" value="Music" onChange={handleCheckboxChange}/>
          <label className="e-btn" htmlFor="checkMusic">Music</label>
          <input type="checkbox" id="checkCinema" value="Cinema" onChange={handleCheckboxChange}/>
          <label className="e-btn" htmlFor="checkCinema">Cinema</label>
          <input type="checkbox" id="checkArt" value="Art&Literature" onChange={handleCheckboxChange}/>
          <label className="e-btn" htmlFor="checkArt">Art&Literature</label>
      </div>
      <Link state={selectedCategories}>
            <button onClick={handleButtonClick} className="submit">Submit</button>
      </Link>
      </div>
      </div>
    )
}

export default Home