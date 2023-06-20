import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { useState } from 'react'

function App () {
  const [todosCard, setTodosCard] = useState([
    {title: 'Выучить JavaScript', status: true, id: 1, order: 1},
    {title: 'Выучить TypeScript', status: true, id: 2, order: 2},
    {title: 'Выучить React', status: true, id: 3, order: 3},
  ])
  const [todo, setTodo] = useState('')

  function handleAddTodo () {
    if (todo !== '') {
      setTodosCard([{ title: todo, status: true, id: todosCard.length + 1, order: todosCard.length + 1 }, ...todosCard])
      setTodo('')
    }
  }

  function handleDeleteTodo (card) {
    const newTodos = todosCard.filter(todo => {
      return todo !== card
    })
    setTodosCard(newTodos)
  }

  return (
    <div className='page'>
      <Header />
      <Main
        handleDeleteTodo={handleDeleteTodo}
        handleAddTodo={handleAddTodo}
        todo={todo}
        setTodo={setTodo}
        todosCard={todosCard}
        setTodosCard={setTodosCard}
      />
      <Footer />
    </div>
  )
}

export default App
