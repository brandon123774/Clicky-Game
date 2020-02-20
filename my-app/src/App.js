import React, {Component} from 'react';
import './App.css';
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";


class App extends Component {
  constructor() {
    super();
    this.state = {
      isCorrect: true,
      panels: panels,
      score: 0,
      maxScore: 12,
      highScore: 0,
      message: "Click on an image to start"
    };
  };

  // click handler function
  handleSaveClick = id => {
    // Variable to hold the panels
    const panel = this.state.panels;
    // Search through character panels to find the one that matches the clicked id.
    const panelsClicked = panel.filter(panel => panel.id === id);

    // If panel isn't clicked
    if (!panelsClicked[0].clicked) {
      
      panelsClicked[0].clicked = true;
      // register the correct guess
      this.handleCorrectClick();
      // animation for correct guess
      this.toggleAnimation(true);

      // randomize character panels
      this.randomizeCharacters(panels);

      this.setState({ panels });
    } else {
      this.handleIncorrectClick();
      this.toggleAnimation(false);
    }
  };

  // randomize the characters
  randomizeCharacters = characters => {
    characters.sort((a, b) => {
      return 0.5 - Math.random();
    });
  };

  // Handler for correct guesses
  handleCorrectClick = () => {
    this.setState({ isCorrect: true });
    if (this.state.score + 1 > this.state.highScore) {
      this.setState({ topScore: this.state.highScore + 1 });
    }
    if (this.state.score + 1 >= this.state.maxScore) {
      this.setState({
        score: this.state.score + 1,
        message: "Winner!",
        messageClass: "correct"
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        message: "Correct!",
        messageClass: "correct"
      });
    }
  };

  // Handler for incorrect guesses
  handleIncorrectClick = () => {
    this.setState({
      message: "Wrong!",
      isCorrect: false
    });
    // this.toggleIncorrectAnimation();
    this.resetGame();
  };

  // Resets the game
  resetGame = id => {
    const panels = this.state.panels;
    for (let i = 0; i < panels.length; i++) {
      panels[i].clicked = false;
    }
    this.setState({ score: 0 });
  };

  // Render the App
  render() {
    const { message, score, panels, highScore } = this.state;
    return (
      <div className="fluid-container">
        <Navbar
          className="row"
          score={score}
          highScore={highScore}
          message={message}
        />
        <Header className="bg-header row" />

        <div className="content-center ">
          {panels.map(({ id, name, image, clicked }) => (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              clicked={clicked}
              clickHandler={this.handleSaveClick}
            />
          ))}
        </div>

        <Footer className="footer-mgn row" />
      </div>
    );
  }
}

export default App;
