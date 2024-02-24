import React, { useState } from 'react'
import axios from "axios";
import { useContext } from 'react'
import { AuthContext } from "../context/authContext";

const Contribute = () => {

    const [err, setError] = useState(null);
    const [buttonPressed, setButtonPressed] = useState(false);
    const { currentUser, logout } = useContext(AuthContext);

    const id = currentUser.id;
    const username = currentUser.username;

    const [inputs, setInputs] = useState({
        question: "",
        answer_a: "",
        answer_b: "",
        answer_c: "",
        answer_d: "",
        correct_answer: "",
        category: "",
        id: id,
        username: username,

      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!inputs.correct_answer || !inputs.category || !inputs.question || !inputs.answer_a || !inputs.answer_b || !inputs.answer_c || !inputs.answer_d) {
          setError("Please fill in all fields of the form before submitting the question!");
          setButtonPressed(true);
          return;
        }
    
        try {
          const res = await axios.post("https://quattro-api.onrender.com/api/test/suggestion", inputs);
          setError(res.data);
          window.location.reload();
        } catch (err) {
          setError(err.response.data);
        }
        setButtonPressed(true);
      };
  
      return (
        <div className="contribute">
           <div className="contribute-message">
                <p>Do you want to contribute to the website? Propose your own questions below and if they get approved by the administrator they
                    will be included in the quiz! Make sure to fill in all the fields below for the question proposal to be valid. 
                </p>
            </div>
        <form className="questionForm">
        <input
          required
          type="text"
          placeholder="Question Title"
          name="question"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Possible Answer A"
          name="answer_a"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Possible Answer B"
          name="answer_b"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Possible Answer C"
          name="answer_c"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Possible Answer D"
          name="answer_d"
          onChange={handleChange}
        />      
      <select name="correct_answer" onChange={handleChange}>
        <option value="">Select the Correct Answer</option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
        <option value="d">D</option>
      </select>

      <select name="category" onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
        <option value="Politics">Politics</option>
        <option value="Geography">Geography</option>
        <option value="Music">Music</option>
        <option value="Cinema">Cinema</option>
        <option value="Art&Literature">Art&Literature</option>
        <option value="Technology">Technology</option>
      </select> 
         <button onClick={handleSubmit}>Submit Question</button>
      </form>

      {buttonPressed && (
            <div className="hidden_message">
              {err}
            </div>
      )}
        
        </div>
      )
  }
  
  export default Contribute
