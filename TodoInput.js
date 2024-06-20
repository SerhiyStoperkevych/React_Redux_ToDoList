import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import { v4 as uuidv4 } from 'uuid';

const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo.trim()) {
      dispatch(addTodo({
        id: uuidv4(),
        text: todo
      }));
      setTodo('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={todo} 
        onChange={(e) => setTodo(e.target.value)} 
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
