import { useState } from "react"

const TURNS = {
  X: "❌",
  O: "🟢"
}

const Square = ({ childern, updateBoard, index}) => {
  return (
    <div className="square">
      {childern}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn,setTurn] = useState(TURNS.X)

  return (
    <main className="board">
      <h1>tic tac toe</h1>
      <section className="game">
        {
          board.map((_,  index)=>{
            return (
              <Square
                key={index}
                index={index}
              >
                {index}
              </Square>
            )
          })
        }

      </section>
    </main>
)
}

export default App
 