const GuessedRight=false;
const NoGuesses=true;

const DisplayThis = () => {
  
  if (GuessedRight) {
    return "You Guessed Correctly!"
  }
  else if (NoGuesses) {
    return "Click on Image to Begin!"
  }
  else return "Sorry, you had alredy Clicked that!"
  };
  

  export default DisplayThis;