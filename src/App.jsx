import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import {useState} from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedDuration: 6,
        duration: 10
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        });
    }

    return (
        <>
            <Header />
            <UserInput userInput={userInput} onChangeInput={handleChange} />
            {!inputIsValid && (
                <p className="center">Please enter a duration greater than zero.</p>
            )}
            {inputIsValid && <Results userInput={userInput}/>}
        </>
    )
}

export default App
