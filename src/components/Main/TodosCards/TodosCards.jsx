import './TodosCards.css'
import del from '../../../images/delete.svg'
import { useState } from 'react'

function TodosCards (props) {
  const [currentCard, setCurrentCard] = useState(null)
  function handleTodoToggle (id) {
    const list = [...props.todosCard]
    list[id].status = !list[id].status
    props.setTodosCard(list)
  }

  function dragStartHandler (_, card) {
    setCurrentCard(card)
  }

  function dragEndHandler (e) {
   /*  e.target.style.backgroundImage =
      'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)' */
  }

  function dragOverHandler (e) {
    e.preventDefault()
    /* e.target.style.backgroundImage =
      'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)' */
  }

  function dropHandler (e, card) {
    e.preventDefault()
    props.setTodosCard(
      props.todosCard.map(c => {
        if (c.id === card.id) {
          return { ...c, order: currentCard.order }
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order }
        }
        return c
      })
    )
    /* e.target.style.backgroundImage =
      'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)' */
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <section className='todoscards'>
      {props.todosCard.length > 0 ? (
        <ul className='todoscard__rendered'>
          {props.todosCard.sort(sortCards).map((entry, id) => (
            <li
              key={id}
              className='card'
              draggable={true}
              onDragStart={e => dragStartHandler(e, entry)}
              onDragLeave={e => dragEndHandler(e)}
              onDragEnd={e => dragEndHandler(e)}
              onDragOver={e => dragOverHandler(e)}
              onDrop={e => dropHandler(e, entry)}
            >
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
