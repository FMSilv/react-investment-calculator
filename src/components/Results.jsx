import {calculateInvestmentResults} from "../util/investment.js";

export default function Results({userInput}) {

    console.log(userInput);

    const resultsData = calculateInvestmentResults(userInput);

    console.log(resultsData);

    return (
        <p>
            Results...
        </p>
    );
}