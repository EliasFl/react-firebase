import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default Home;