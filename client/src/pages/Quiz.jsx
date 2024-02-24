import React, { useState } from 'react'
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";



const Quiz = () => {

   const location = useLocation();
   const navigate = useNavigate();
   const rankings = location.state.rankings;
   const selectedCategories = location.state.selectedCategories;

   const parsedObject1 = JSON.parse(JSON.stringify(selectedCategories));
   const parsedObject2 = JSON.parse(JSON.stringify(rankings));

   let quesID = location.pathname.split("/")[2] - 1;

   for(let i = 0; i<4; i++){
    selectedCategories[i] = parsedObject1.selectedCategories[i];
    rankings[i] = parsedObject2.rankings[i];
   }

  
  let categories_help = [1,1,1,1]
  
  const rankHelp =['1st', '2nd', '3rd', '4th' ];
  
    const categories_ranked = Object.keys(selectedCategories).map((key, index) => ({ value: selectedCategories[key], rank: rankings.rankings[index] }));

    categories_ranked.sort((a, b) => {
      const rankOrder = { 'first': 1, 'second': 2, 'third': 3, 'fourth': 4 };
      return rankOrder[a.rank] - rankOrder[b.rank];
    });

    categories_help = categories_ranked.map(item => item.value);
    const [categories, setCategories] = useState(categories_help);

    const [question, setQuestion] = useState([1,1,1,1]);
    const [given_answer, setGivenAnswer] = useState("");
 //   const [correct_answer, setCorrectAnswer] = useState({});
    const [progress, setProgress] = useState(0);
    let excellent = false;

  
    useEffect(() => {
      if (quesID === 0) {
          let queryParams = {
            param1: categories[0],
          };
          const fetchData = async () => {
              try {
                  const res = await axios.get(`https://quattro-api.onrender.com/api/test`, { params: queryParams });
                  setQuestion(res.data);
              } catch (err) {
                  console.log(err);
              }
          };
          fetchData();
      }
      if (quesID === 4) {
        let queryParams = {
          param1: categories[1],
        };
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://quattro-api.onrender.com/api/test`, { params: queryParams });
                setQuestion(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }
    if (quesID === 8) {
      let queryParams = {
        param1: categories[2],
      };
      const fetchData = async () => {
          try {
              const res = await axios.get(`https://quattro-api.onrender.com/api/test`, { params: queryParams });
              setQuestion(res.data);
          } catch (err) {
              console.log(err);
          }
      };
      fetchData();
  }
  if (quesID === 12) {
    let queryParams = {
      param1: categories[3],
    };
    const fetchData = async () => {
        try {
            const res = await axios.get(`https://quattro-api.onrender.com/api/test`, { params: queryParams });
            setQuestion(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    fetchData();
}
  }, [quesID, selectedCategories, categories]);

  const handleRadio = (e) => {
    const { value } = e.target
    setGivenAnswer(value);
  };


  const handleClick = (e) => {
     const selectedOption = document.querySelector('input[name="option"]:checked');

      if (selectedOption) {
 
        if((question[quesID%4].correct_answer)===given_answer){
            let helper = (100 * (quesID + 1))/16;
            setProgress(helper);
            if(quesID<15)
              navigate(`/quiz/${quesID + 2}`, {state: { rankings: {rankings}, selectedCategories: {selectedCategories} }});
            else{
              excellent = true;
              let correct_letter = question[quesID%4].correct_answer;
              let correct_title = '';
            if(correct_letter === 'a')
              correct_title = question[quesID%4].answer_a;
            else if(correct_letter === 'b')
              correct_title = question[quesID%4].answer_b;
            else if(correct_letter === 'c')
              correct_title = question[quesID%4].answer_c;
            else if(correct_letter === 'd')
              correct_title = question[quesID%4].answer_d;
            quesID += 1;
            navigate('/endquiz', { state: { correct_letter: {correct_letter}, correct_title: {correct_title}, quesID: {quesID}, excellent: {excellent} } });
            }
          }
          else{
            let correct_letter = question[quesID%4].correct_answer;
            let correct_title = '';
            if(correct_letter === 'a')
              correct_title = question[quesID%4].answer_a;
            else if(correct_letter === 'b')
              correct_title = question[quesID%4].answer_b;
            else if(correct_letter === 'c')
              correct_title = question[quesID%4].answer_c;
            else if(correct_letter === 'd')
              correct_title = question[quesID%4].answer_d;

            navigate('/endquiz', { state: { correct_letter: {correct_letter}, correct_title: {correct_title}, quesID: {quesID}, excellent: {excellent} } });
          }
     }
    };
    
    return (
      
        <div className="quiz">
          <br></br>

          <div className="category_title"> {rankHelp[Math.floor(quesID/4)]} Category : {categories[Math.floor(quesID/4)]}</div>
            <div className="square">
            
                <h2>Question {quesID + 1} : {question[quesID%4].title}</h2>
                <div className="answers">
                  <form>
                  <ul class="options">
                    <li class="option">
                      <input type="radio" id="optionA" name="option" value="a" onChange={handleRadio}/>
                      <label for="optionA">a) {question[quesID%4].answer_a}</label>
                    </li>
                    <li class="option">
                      <input type="radio" id="optionB" name="option" value="b" onChange={handleRadio}/>
                      <label for="optionB">b) {question[quesID%4].answer_b}</label>
                    </li>
                    <li class="option">
                      <input type="radio" id="optionC" name="option" value="c" onChange={handleRadio}/>
                      <label for="optionC">c) {question[quesID%4].answer_c}</label>
                    </li>
                    <li class="option">
                      <input type="radio" id="optionD" name="option" value="d" onChange={handleRadio}/>
                      <label for="optionD">d) {question[quesID%4].answer_d}</label>
                    </li>
                  </ul>
                </form>

                </div>
            </div>
            <br></br>
            <p id="remain">Questions remaining : {16 - quesID}</p>
          <ProgressBar striped variant="success" now={progress} />
            
            <button onClick={handleClick} className="submit">
                Submit answer
            </button>
            

        </div>
    )
}

export default Quiz
