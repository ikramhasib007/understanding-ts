import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

export interface Todo {
  id: string;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodo = (text: string) => {
    setTodos(prevState => ([...prevState, { id: Math.random().toString(), text }]))
  }

  const onDeleteTodoHandler = (todoId: string) => {
    setTodos(prevState => {
      return prevState.filter(item => item.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddTodo} />
      <TodoList items={todos} onDeleteTodo={onDeleteTodoHandler} />
    </div>
  );
}

export default App;
