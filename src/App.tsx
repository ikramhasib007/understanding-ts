import React from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {
  const todos = [{ id: 't1', text: 'Just finished!' }]

  const handleAddTodo = (newTodo: string) => {
    console.log('newTodo: ', newTodo);

  }

  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddTodo} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
