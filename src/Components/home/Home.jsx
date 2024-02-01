import React from 'react'
import "./home.css"
const Home = () => {
  return(
  <div className="home d-flex  justfy-content-center align-items-center">
    <div className="container d-flex  justfy-content-center align-items-center flex-column">
        <h1> Organize your
            <br />
        work and life finally.
        </h1>
        <p>Become focused, organized, and calm with <br />
            note app. the world's #1 task maneger app
        </p>
        <button className="home-btn p-2">Make Note List</button>
        </div>
  </div>
  );
};

export default Home;
