import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Ranking = () => {
  const location = useLocation();

  const selectedCategories = location.state;

  const navigate = useNavigate()

  const [buttonPressed, setButtonPressed] = useState(false);

  const [rankings, setRankings] = useState([]);

  const numRows = 4;
  const numCols = 4;

  const initialGrid = Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, () => 0)
  );

  const [grid, setGrid] = useState(initialGrid);

  const updateCell = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  const updateRanking = (value, pos) => {
    const newRanking = [...rankings];
    newRanking[pos] = value;
    setRankings(newRanking);
  };

  const onChangeRadio = (e, row, col) => {
    const { name } = e.target
    const { value } = e.target
    console.log('clicked  ==>', name)
        
        for (let i = 0; i < numCols; i++) {
            if (i !== col) {
                updateCell(row, i, 0);
            }
        }
    
        for (let i = 0; i < numRows; i++) {
            if (i !== row) {
                updateCell(i,col,0);
            }
        }
        updateCell(row,col, 1);
        updateRanking(value,row);
  }

  const RadioButton = ({ name, id, value, onChange, checked, text }) => {
    return (
      <label htmlFor={id} className="radio-label">
        <input
          className="radio-input"
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <span className="custom-radio" />
        {text}
      </label>
    )
  }

  const handleSubmitClick = () => {
    const result = [];
  for (let i = 0; i < numRows; i++) {
    let rowSum = 0;
    for (let j = 0; j < numCols; j++) {
      rowSum += grid[i][j];
    }
    result.push(rowSum);
  }

  let totalSum = 0;
  for(let k = 0; k < numRows; k++) {
    totalSum += result[k];
  }

    if (totalSum===4) {

      navigate("/quiz/1", { state: { rankings: {rankings}, selectedCategories: {selectedCategories} } });
    }
    else{
      
    }
    setButtonPressed(true);
  };

    return (
        
        <div className="ranking">
            <div>
                <h2>Choose the order of the categories:</h2>
            </div>
           <div className="container">
            <div className="category">
            <div className="element">
                {selectedCategories[0]}
            </div>
            <div className="radio">  
                <RadioButton
                    name="cat1"
                    id="cat1_first"
                    value="first"
                    text="1st"
                    onChange={(e) => onChangeRadio(e, 0, 0)}
                    checked={grid[0][0]}
                />
                    <RadioButton
                    name="cat1"
                    id="cat1_second"
                    value="second"
                    text="2nd"
                    onChange={(e) => onChangeRadio(e, 0, 1)}
                    checked={grid[0][1]}
                />
                <RadioButton
                    name="cat1"
                    id="cat1_third"
                    value="third"
                    text="3rd"
                    onChange={(e) => onChangeRadio(e, 0, 2)}
                    checked={grid[0][2]}
                />
                    <RadioButton
                    name="cat1"
                    id="cat1_fourth"
                    value="fourth"
                    text="4th"
                    onChange={(e) => onChangeRadio(e, 0, 3)}
                    checked={grid[0][3]}
                />
            </div>
            </div>
            <div className="category">
            <div className="element">
                {selectedCategories[1]}
            </div>
            <div className="radio">
                <RadioButton
                    name="cat2"
                    id="cat2_first"
                    value="first"
                    text="1st"
                    onChange={(e) => onChangeRadio(e, 1, 0)}
                    checked={grid[1][0]}
                />
                    <RadioButton
                    name="cat2"
                    id="cat2_second"
                    value="second"
                    text="2nd"
                    onChange={(e) => onChangeRadio(e, 1, 1)}
                    checked={grid[1][1]}
                />
                <RadioButton
                    name="cat2"
                    id="cat2_third"
                    value="third"
                    text="3rd"
                    onChange={(e) => onChangeRadio(e, 1, 2)}
                    checked={grid[1][2]}
                />
                    <RadioButton
                    name="cat2"
                    id="cat2_first"
                    value="fourth"
                    text="4th"
                    onChange={(e) => onChangeRadio(e, 1, 3)}
                    checked={grid[1][3]}
                />
            </div>
            </div>
            <div className="category">
            <div className="element">
                {selectedCategories[2]}
            </div>
            <div className="radio">
                <RadioButton
                    name="cat3"
                    id="first"
                    value="first"
                    text="1st"
                    onChange={(e) => onChangeRadio(e, 2, 0)}
                    checked={grid[2][0]}
                />
                    <RadioButton
                    name="cat3"
                    id="second"
                    value="second"
                    text="2nd"
                    onChange={(e) => onChangeRadio(e, 2, 1)}
                    checked={grid[2][1]}
                />
                <RadioButton
                    name="cat3"
                    id="third"
                    value="third"
                    text="3rd"
                    onChange={(e) => onChangeRadio(e, 2, 2)}
                    checked={grid[2][2]}
                />
                    <RadioButton
                    name="cat3"
                    id="fourth"
                    value="fourth"
                    text="4th"
                    onChange={(e) => onChangeRadio(e, 2, 3)}
                    checked={grid[2][3]}
                />
            </div>
            </div>
            <div className="category">
            <div className="element">
                {selectedCategories[3]}
            </div>
            <div className="radio">
                <RadioButton
                    name="cat4"
                    id="first"
                    value="first"
                    text="1st"
                    onChange={(e) => onChangeRadio(e, 3, 0)}
                    checked={grid[3][0]}
                />
                <RadioButton
                    name="cat4"
                    id="second"
                    value="second"
                    text="2nd"
                    onChange={(e) => onChangeRadio(e, 3, 1)}
                    checked={grid[3][1]}
                />
                <RadioButton
                    name="cat4"
                    id="third"
                    value="third"
                    text="3rd"
                    onChange={(e) => onChangeRadio(e, 3, 2)}
                    checked={grid[3][2]}
                />
                <RadioButton
                    name="cat4"
                    id="fourth"
                    value="fourth"
                    text="4th"
                    onChange={(e) => onChangeRadio(e, 3, 3)}
                    checked={grid[3][3]}
                />
            </div>
            </div>
            </div>

            
                <button className="submit" onClick={handleSubmitClick}>Start the Quiz!</button><br></br><br></br>
          

            {buttonPressed && (
              <div className="hidden_message">
                You have to rank all 4 categories so as to proceed!
             </div>
            )}

        </div>
    )
}

export default Ranking

// <Link state = {{ rankings: {rankings}, selectedCategories: {selectedCategories} }}>