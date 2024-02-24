import { db } from "../db.js";

export const postQuestion = (req, res) => {
    //CHECK EXISTING QUESTION
  const q = "SELECT * FROM questions WHERE title = ?";

  db.query(q, [req.body.question], (err, data) => {
    if (err) return res.status(500).json("Internal System issue! Try again later.");
    if (data.length) return res.status(409).json("Question already exists!");
    
      const q = "INSERT INTO questions(`title`,`answer_a`, `answer_b`, `answer_c`, `answer_d`, `correct_answer`, `category`) VALUES (?)";
      const values = [req.body.question, req.body.answer_a, req.body.answer_b, req.body.answer_c, req.body.answer_d, req.body.correct_answer, req.body.category];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json("Internal System issue! Try again later.");
        return res.status(200).json("Question has been created!");
      });
    }); 
  };