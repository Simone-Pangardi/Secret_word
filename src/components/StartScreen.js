import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <div contentEditable="true" className="texto">
        <h1>Secret Word</h1>
      </div>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={startGame}>Jogar</button>
    </div>
  );
};

export default StartScreen;
