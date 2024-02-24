import React, { useState } from 'react'
import { useEffect } from "react";
import { useContext } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { AuthContext } from "../context/authContext";
import axios from "axios";


const EndQuiz = () => {
    const location = useLocation();
    const correct_letter = location.state.correct_letter;
    const correct_title = location.state.correct_title;
    const quesID = location.state.quesID;
    const excellent = location.state.excellent;
    const { currentUser, logout } = useContext(AuthContext);
    const [high, setHigh] = useState(0);
    const [err, setError] = useState(null);

    const inputs = {
        id : currentUser?.id,
        score : quesID.quesID
    }

    console.log("inputs", inputs);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.post('/test/score', inputs);
              setHigh(response.data.highscore);
           //   console.log(response.data);
            } catch (error) {
              setError(error.response.data)
             // console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
    }, []);

    return (
        <div className="endquiz"> 
            {!(excellent.excellent) ? ( 
            <>
                <p>Your answer was wrong!</p>
                <p className="correct-answer">The correct answer was: {correct_letter.correct_letter}) {correct_title.correct_title}</p>

                <p className="questions-answered">You answered correctly {quesID.quesID} questions</p>
            </>
            ) : (
            <>
                <p className = "congrats">CONGRATULATIONS!</p>
                <p className = "mes">You answered all 16 questions correctly!</p>
            </>
            )}

        <div className="highscore">
            {!(err) ? (
             <div class="highscore-container">
               <p class="highscore-text">Your current High Score is: <span class="highscore-value">{high}</span></p>
             </div>
             
            ) : (
                <p>You are not logged in! <Link to="/">Log in</Link> or <Link to="/register">register</Link> to view your highscore and other interesting statistics!</p>
            )}
        
        </div>
        </div>
    )
}

export default EndQuiz