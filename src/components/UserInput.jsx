export default function UserInput({userInput, onChangeInput}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) => onChangeInput('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        value={userInput.annualInvestment}
                        required
                        onChange={(event) => onChangeInput('annualInvestment', event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expect Duration</label>
                    <input
                        type="number"
                        value={userInput.expectedDuration}
                        required
                        onChange={(event) => onChangeInput('expectedDuration', event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        value={userInput.duration}
                        required
                        onChange={(event) => onChangeInput('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}