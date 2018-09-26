import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";







class App extends Component {

    state = {
      images: [
      {clicked: false,
       src: "img/1.png"},
        {clicked: false,
          src: "img/2.png"},
          {clicked: false,
            src: "img/3.png"},
            {clicked: false,
              src: "img/4.png"},
              {clicked: false,
                src: "img/5.png"},
                {clicked: false,
                  src: "img/6.png"},
                  {clicked: false,
                    src: "img/7.png"},
                    {clicked: false,
                      src: "img/8.png"},
                      {clicked: false,
                        src: "img/9.png"},
                        {clicked: false,
                          src: "img/10.png"},
                          {clicked: false,
                            src: "img/11.png"},
                            {clicked: false,
                              src: "img/12.png"},

      ],
      score: 0,
      topScore: 0, 
      result: "Click an Image to Start"
    };

    renderImages() {
      return this.state.images.map(({ src }, index) => (
        <div className="col-md-3">        
        <Image src={src} index={index} handleClick={this.handleClick} />
        </div>
      ));
    }


  handleClick = event => {
    console.log(event.target);
    const { id } = event.target.dataset;
    let images = [...this.state.images];
    const image = images[id];

    if (image.clicked) {
      // Reset the game - unclick images and set score to 0
      // Take current score and make that the top score if it is greater
      // Set score to 0
      // Reset images to clicked: false
      const topScore = Math.max(this.state.topScore, this.state.score);
      images.forEach(img => (img.clicked = false));
      this.setState(
        {
          images: this.shuffleImages(images),
          topScore,
          score: 0, 
          result: "Oh you clicked on it Twice!"
        },
        () => alert("Game over!")
      );
    } else {
      // Increment score by 1 and set image as clicked
      image.clicked = true;
      this.setState({
        images: this.shuffleImages(images),
        score: this.state.score + 1, 
        result: "Good Memory, Keep Going!"
      });
    }
  };


  shuffleImages(prevImages = []) {
    const newImages = [];
    let count = prevImages.length;
    let item;

    while (count) {
      item = Math.floor(Math.random() * prevImages.length);

      if (item in prevImages) {
        newImages.push(prevImages[item]);
        delete prevImages[item];
        count--;
      }
    }

    return newImages;
  }
  

  render() {

    console.log(this.state);

    return (
      <div>
        <Navbar>
        <a className="nav-item" id="guessResult"> {this.state.result}</a>
        <a className="nav-item" id="Score">Score: {this.state.score} | Top Score: {this.state.topScore}</a>
        </Navbar>
        <Jumbotron />
        <Wrapper>
          <div className="row">
            
          {this.renderImages()}
          </div>
        </Wrapper>

        <Footer />
      </div>
    );
  }
}

export default App;
