import './AddForm.css'

function AddForm (props) {
  return (
    <section className='addform'>
      <div className='addform__wrapper'>
        <input
          value={props.todo}
          name='todo'
          required
          type='text'
          className='addform__input'
          placeholder='ADD TASK TO BE DONE'
          autoComplete='off'
          onChange={e => {
            props.setTodo(e.target.value)
          }}
        ></input>
        <button onClick={props.handleAddTodo} className='button'>
          ADD
        </button>
      </div>
    </section>
  )
}

export default AddForm
