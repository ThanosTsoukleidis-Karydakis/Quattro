import { db } from "../db.js";

export const showQuestion = (req,res)=>{
    const q = "SELECT * from questions WHERE category=? ORDER BY RAND() LIMIT 4"

    db.query(q, [req.query.param1],(err,data)=>{
        if(err) return res.send(err)

        return res.status(200).json(data);
    })
};


export const updateHighScore = (req, res) => {
    const q = "SELECT highscore FROM users WHERE id = ?";
  
    db.query(q, [req.body.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (!data.length) return res.status(409).json("You are not logged in! Log in or register to view your highscore and other interesting statistics!");
      let highscore = data[0].highscore;

      if(data[0].highscore<req.body.score){
        highscore = req.body.score;
      }
  
      const q = "UPDATE users SET highscore = ? WHERE id=?";
  
      db.query(q, [highscore, req.body.id], (err, data) => {
        if (err) return res.status(500).json("AAAAAAAAAAAAAAAA");
        return res.status(200).json({ highscore: highscore });
      }); 
    }); 
  };

  export const suggestion = (req, res) => {
    //CHECK EXISTING QUESTION
  const q = "SELECT * FROM temporary_questions WHERE title = ?";

  db.query(q, [req.body.question], (err, data) => {
    if (err) return res.status(500).json("Internal System issue! Try again later.");
    if (data.length) return res.status(409).json("Question already exists!");
    
      const q = "INSERT INTO temporary_questions(`title`,`answer_a`, `answer_b`, `answer_c`, `answer_d`, `correct_answer`, `category`, `uid`, `username`) VALUES (?)";
      const values = [req.body.question, req.body.answer_a, req.body.answer_b, req.body.answer_c, req.body.answer_d, req.body.correct_answer, req.body.category, req.body.id, req.body.username];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json("Internal System issue! Try again later.");
        return res.status(200).json("Question has been created!");
      });
    }); 
  };

  export const proposed = (req, res) => {
    const q = "SELECT * FROM temporary_questions";
  
    db.query(q, (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
  };

  export const approved = (req, res) => {

  const q = "SELECT * FROM temporary_questions WHERE id = ?";
  db.query(q, [req.body.id], (err, data) => {
    if (err) return res.status(500).json("Internal System issue! Try again later.");

    if (data.length === 0) {
      return res.status(404).json("Question not found");
    }

      const tuple = data[0]; 
    
      const { title, answer_a, answer_b, answer_c, answer_d, correct_answer, category } = tuple;

      const values = [title, answer_a, answer_b, answer_c, answer_d, correct_answer, category];
    
      const q = "INSERT INTO questions(`title`,`answer_a`, `answer_b`, `answer_c`, `answer_d`, `correct_answer`, `category`) VALUES (?)";
  
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json("Internal System issue! Try again later.");
        
        const deleteQuery = "DELETE FROM temporary_questions WHERE id = ?";
      
        db.query(deleteQuery, [req.body.id], (deleteErr, deleteResult) => {
        if (deleteErr) {
          return res.status(500).json("Internal System issue! Try again later.");
        }

        const q = "SELECT contributions FROM users WHERE id = ?";
      
        db.query(q, [req.body.uid], (err, data) => {
          if (err) return res.status(500).json(err);
          if (!data.length) return res.status(409).json("You are not logged in! Log in or register to view your highscore and other interesting statistics!");
          let new_contributions = data[0].contributions + 1;
      
          const q = "UPDATE users SET contributions = ? WHERE id=?";
      
          db.query(q, [new_contributions, req.body.uid], (err, data) => {
            if (err) return res.status(500).json("AAAAAAAAAAAAAAAA");
            return res.status(200).json("Question has been approved!");
          }); 
        }); 
       });
      });
    }); 
  };

  export const statistics = (req, res) => {
    const q = "SELECT `username`, `highscore`, `contributions` FROM users WHERE id=?";
  
    db.query(q, [req.query.param1], (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data[0]);
    });
  };

  export const rejected = (req, res) => {
    const deleteQuery = "DELETE FROM temporary_questions WHERE id = ?";
  
    db.query(deleteQuery, [req.body.id], (deleteErr, deleteResult) => {
      if (deleteErr) {
        return res.status(500).json("Internal System issue! Try again later.");
      }
      return res.status(200).json("Question has been rejected!");

    });
  };


