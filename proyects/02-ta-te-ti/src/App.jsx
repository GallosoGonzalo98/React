import { useState } from "react"
import {Square} from './components/Square'
import { TURNS} from './constants'
import { WinnerModal } from "./components/WinnerModal"
import { checkWinner, checkEndGame } from "./logic/board"


export function App() {
  const [board , setBoard] = useState(
    Array(9).fill(null)
    )

  const [turn, setTurn] = useState(TURNS.X)

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index)=>{
    // Si tiene algo no actualiza
    if (board[index]|| winner) return
    const newBoard = [...board]
    // Se hace copia porque las props son inmutables
    // los estados no se pueden modificar directamente
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Chequear si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board"> 
      <h1>ta-te-ti</h1>
      <button onClick={resetGame}>Resetear juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>    
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}/>

    </main>
  )
}