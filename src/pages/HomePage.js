import { Link } from "react-router-dom";

import ImageDisplay from "../components/ImageDisplay";


const HomePage = () => {


  return (
    <>
    <div className="home-container">
      <h1 className="title">Welcome to</h1>
      <h2 className="title-name">Åsas portfolio</h2>
      <ImageDisplay />
      <h3 className="home-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum.</h3>
        <Link to="/about"><button className="button">About Page</button></Link>
    </div>

    </>
  );
};

export default HomePage;