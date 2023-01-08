import React, { useRef } from 'react'

type NewTodoProps = {
  onAddTodo: (t: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textRef.current!.value;
    props.onAddTodo(enteredText)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-input" />
      <input type="text" id='text-input' ref={textRef} />
      <button type="submit">Add</button>
    </form>
  )
}

export default NewTodo;