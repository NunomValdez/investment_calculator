import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
        //adding a plus value here will force the conversion of the input value to a number instead of a string. This newValue comes from the user input, and that e.target.value, even though we're defining it of type= number, it's processed as a string, always, and by putting this plus symbol, it will force the input to be a nr
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {inputIsValid && <Results userInputState={userInput} />}
      {/* this way, we're rendering the Results component dynamically, if the input is valid or not */}
    </>
  );
}

export default App;
