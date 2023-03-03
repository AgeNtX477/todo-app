import './TodosCards.css'
import del from '../../../images/delete.svg'

function TodosCards (props) {
  function handleTodoToggle (id) {
    const list = [...props.todosCard]
    list[id].status = !list[id].status
    props.setTodosCard(list)
  }

  return (
    <section className='todoscards'>
      {props.todosCard.length > 0 ? (
        <ul className='todoscard__rendered'>
          {props.todosCard.map((entry, id) => (
            <li key={id} className='card'>
              <h3
                className={`card__title ${
                  !entry.status ? 'card__title-done' : ''
                }`}
                onClick={() => handleTodoToggle(id)}
              >
                {[entry.title, entry.status]}
              </h3>
              <button
                className='card__delete'
                onClick={() => {
                  props.handleDeleteTodo(entry)
                }}
              >
                <img className='card__img-del' src={del} alt='dellogo'></img>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className='todosCards__empty'>
          <p className='todosCards__empty-title'>
            you haven't added anything yet
          </p>
        </div>
      )}
    </section>
  )
}

export default TodosCards
