import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";

const Approve = () => {
    const [prop_questions, setProp_questions] = useState([]);
    const [err, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`https://quattro-api.onrender.com/api/test/proposed`);
          setProp_questions(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);

    const handleApprove = async (e, id, uid) => {
        e.preventDefault();
    
        try {
          const res = await axios.post("https://quattro-api.onrender.com/api/test/approved", {id, uid});
       //   window.location.reload();
       setProp_questions(prevQuestions => prevQuestions.filter(question => question.id !== id));
        } catch (err) {
            console.log(err);
        }
      };

      const handleReject = async (e, id, uid) => {
        e.preventDefault();
    
        try {
          const res = await axios.post("https://quattro-api.onrender.com/api/test/rejected", {id, uid});
          //   window.location.reload();
          setProp_questions(prevQuestions => prevQuestions.filter(question => question.id !== id));
        } catch (err) {
            console.log(err);
        }
      };

    return (
        <div className="approve">
        <div className="questions">
            {(prop_questions.length === 0) ? (
                <div>No proposed questions to approve!</div>
            ):( 
            <>
                {prop_questions.map((ques) => (
                    <div className="question">
                        <b>Proposed by : {ques.username}</b><br></br><br></br>
                        <p><b>Question:</b> {ques.title}</p><br></br>
                        <b>Possible Answers: </b>
                        <p>a. {ques.answer_a}</p>
                        <p>b. {ques.answer_b}</p>
                        <p>c. {ques.answer_c}</p>
                        <p>d. {ques.answer_d}</p><br></br>
                        <p><u>Correct Answer : {ques.correct_answer}</u></p>
                        <p>Category : {ques.category}</p>
                        <div className="buttons">
                        <button className="approve" onClick={(e) => handleApprove(e, ques.id, ques.uid)}>Approve</button>
                        <button className="reject" onClick={(e) => handleReject(e, ques.id, ques.uid)}>Reject</button>
                        </div>
                    </div>
                  ))}
            </>
            )}
        </div>
      </div>
    )
}

export default Approve
