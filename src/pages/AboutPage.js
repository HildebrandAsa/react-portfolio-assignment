import computer from "../images/computer.jpg"
import blackboard from "../images/blackboard.png"

const AboutPage = () => {

  return (
    <>
    <div className="container">
      <div className="box-one">
        <img src={computer} alt="image of computer" height={250} width={350} />
        <h3 className="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. </h3>
      </div>
      <div className="box-one">
        <h3 className="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. </h3>
        <img src={blackboard} alt="image of computer" height={250} width={350} />
      </div>
    </div>
    </>
  );
};

export default AboutPage;