import React, { useState } from 'react';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isOTurn, setIsOTurn] = useState(true);
  const winner = calcWin(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isOTurn ? '⭕' : '❌';
    setBoard(newBoard);
    setIsOTurn(!isOTurn);
  };

  const resetG = () => {
    setBoard(Array(9).fill(null));
    setIsOTurn(true); 
  };

  return (
    <div className="bg-[#1a1a2e] min-h-screen text-white flex flex-col items-center justify-center pt-20 px-4">
      <h1 className="text-4xl font-bold text-yellow-500 mb-4">🎮 Tic Tac Toe</h1>

      <p className="text-lg mb-6">
        {winner
          ? winner === 'Draw'
            ? "It's a draw!!!"
            : `🏆 Winner: ${winner}`
          : `${isOTurn ? '⭕' : '❌'}'s Turn`}
      </p>

      <div className="grid grid-cols-3 gap-2 mb-6">
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-20 h-20 bg-[#0f0f1c] border border-yellow-400 text-2xl font-bold hover:bg-yellow-500 hover:text-black transition duration-300"
          >
            {value}
          </button>
        ))}
      </div>

      <button
        onClick={resetG}
        className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2 px-6 rounded-xl transition duration-300"
      >
        🔁 Restart
      </button>
    </div>
  );

  function calcWin(board) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.includes(null) ? null : 'Draw';
  }
}

export default TicTacToe;
