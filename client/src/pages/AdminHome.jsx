import React, { useState } from 'react'
import axios from "axios";

const AdminHome = () => {
  const [err, setError] = useState(null);
  const [buttonPressed, setButtonPressed] = useState(false);
  
  const [inputs, setInputs] = useState({
    question: "",
    answer_a: "",
    answer_b: "",
    answer_c: "",
    answer_d: "",
    correct_answer: "",
    category: "",
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
      const res = await axios.post("https://quattro-api.onrender.com/api/admin/post", inputs);
      setError(res.data);
      window.location.reload();
    } catch (err) {
      setError(err.response.data);
    }
    setButtonPressed(true);
  };

    return (
        <div class="adminhome"> 
             <div className="ad">
      <h2>Create a New Question:</h2>
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
    </div>
    )
}

export default AdminHome
