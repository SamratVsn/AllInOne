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
    <div className="bg-gradient-to-br from-[#1e1e2f] to-[#151522] min-h-screen text-white flex flex-col items-center justify-center pt-24 px-4">
      <h1 className="text-4xl font-bold text-indigo-300 mb-3">🎮 Tic Tac Toe</h1>

      <p className="text-lg mb-6 text-slate-300">
        {winner
          ? winner === 'Draw'
            ? "🤝 It's a draw!"
            : `🏆 Winner: ${winner}`
          : `Turn: ${isOTurn ? '⭕' : '❌'}`}
      </p>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-24 h-24 bg-[#232336] border border-indigo-400 rounded-xl text-3xl font-bold text-white hover:bg-indigo-500/20 transition duration-300 shadow-md"
          >
            {value}
          </button>
        ))}
      </div>

      <button
        onClick={resetG}
        className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2 px-6 rounded-xl transition duration-300 shadow"
      >
        🔁 Restart
      </button>

      <footer className="mt-10 text-slate-500 text-xs border-t border-slate-700 pt-4">
        &copy; 2025 <span className="text-indigo-300 font-medium">AllInOneVsn</span>. Built by Samrat.
      </footer>
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
