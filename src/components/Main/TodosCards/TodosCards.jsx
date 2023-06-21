import './TodosCards.css'
import { useState } from 'react'

const BACKGROUND_START =
  'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)'
const BACKGROUND_END = 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)'

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
    e.target.style.backgroundImage = BACKGROUND_END
  }

  function dragOverHandler (e) {
    e.preventDefault()
    e.target.style.backgroundImage = BACKGROUND_START
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
    e.target.style.backgroundImage = BACKGROUND_END
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
          {props.todosCard.sort(sortCards).map((entry, id, arr) => (
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
                {[`${entry.title} (${id + 1} из ${arr.length})`, entry.status]}
              </h3>

              <button
                className='card__del-button'
                onClick={() => {
                  props.handleDeleteTodo(entry)
                }}
              >
                <svg viewBox='0 0 448 512' className='card__svgIcon'>
                  <path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'></path>
                </svg>
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
