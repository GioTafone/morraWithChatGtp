import React, { useState } from 'react';

enum Choice {
  ROCK = 'ROCK',
  PAPER = 'PAPER',
  SCISSORS = 'SCISSORS',
}

const choices: Choice[] = [Choice.ROCK, Choice.PAPER, Choice.SCISSORS];

const getResult = (playerChoice: Choice, computerChoice: Choice) => {
  if (playerChoice === computerChoice) {
    return 'Tie';
  } else if (
    (playerChoice === Choice.ROCK && computerChoice === Choice.SCISSORS) ||
    (playerChoice === Choice.PAPER && computerChoice === Choice.ROCK) ||
    (playerChoice === Choice.SCISSORS && computerChoice === Choice.PAPER)
  ) {
    return 'You Win';
  } else {
    return 'Computer Wins';
  }
};

const App = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handlePlayerChoice = (choice: Choice) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerRandomChoice);
    setResult(getResult(choice, computerRandomChoice));
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div>
      <h1>Rock-Paper-Scissors</h1>
      {result ? (
        <>
          <p>You chose: {playerChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <p>{result}</p>
          <button onClick={resetGame}>Play Again</button>
        </>
      ) : (
        <>
          <p>Choose your weapon:</p>
          {choices.map((choice) => (
            <button key={choice} onClick={() => handlePlayerChoice(choice)}>
              {choice}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default App;
