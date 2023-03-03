import AddForm from './AddForm/AddForm'
import TodosCards from './TodosCards/TodosCards'

function Main (props) {
  return (
    <main>
      <AddForm
        handleAddTodo={props.handleAddTodo}
        todo={props.todo}
        setTodo={props.setTodo}
      />
      <TodosCards
        handleDeleteTodo={props.handleDeleteTodo}
        todosCard={props.todosCard}
        setTodosCard={props.setTodosCard}
        todo={props.todo}
      />
    </main>
  )
}

export default Main
