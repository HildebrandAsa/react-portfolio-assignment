import computer from "../images/computer.jpg"
import blackboard from "../images/blackboard.png"

const AboutPage = () => {

  return (
    <>
    <div className="container">
      <div className="box-one">
        <img src={computer} alt="computer" height={250} width={350} />
        <h3 className="text">Jag har nyligen utbildat mig till Frontend-utvecklare på Sundsgårdens folkhögskola.
          Jag upptäckte att det var väldigt roligt att koda när jag tog en liten kurs under min föräldraledighet. 
          Då bestämde jag mig för att forsätta och jag siktar nu på att kunna arbeta med detta i framtiden.</h3>
      </div>
      <div className="box-one">
        <h3 className="text">Jag är i grunden utbildad till lärare och har arbetat i grundskolan sedan 2013. Jag 
          älskar att undervisa och saknar det men jag var sugen på att prova något nytt i livet och gå vidare. Men 
          vem vet, jag kanske kan kombinera programmering och läraryrket framöver?</h3>
        <img src={blackboard} alt="teaching" height={250} width={350} />
      </div>
    </div>
    </>
  );
};

export default AboutPage;