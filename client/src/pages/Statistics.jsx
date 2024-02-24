import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from "../context/authContext";

const Statistics = () => {
    const [statistics, setStatistics] = useState([]);
    const { currentUser, logout } = useContext(AuthContext);
    const id = currentUser?.id;

    useEffect(() => {
        const fetchData = async () => {
            let queryParams = {
                param1: id,
              };
          try {
            const res = await axios.get(`/test/statistics`, { params: queryParams });
            setStatistics(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);

    return (
        <div className="statistics">
          {currentUser? (
           <>
            <div className="statistics-container">
                <h3>{statistics.username}</h3>
                <p className="highscore">Current High Score: {statistics.highscore}</p>
                <p className="contributions">Total Contributions: {statistics.contributions}</p>
                <div className="more-stats">More interesting statistics to be added... :)</div>
            </div>
           </>
          ) : (
            <p>You are not logged in! <Link to="/">Log in</Link> or <Link to="/register">register</Link> to view interesting statistics!</p>
          )}
        </div>
    )
}

export default Statistics