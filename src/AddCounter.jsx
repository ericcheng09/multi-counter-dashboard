import { useState } from "react";
import { nextId } from "./CounterContext";
import { useCounterDispatch } from "./CounterContext";

export default function AddCounter(){
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const dispatch = useCounterDispatch();

  function handleClick() {
    dispatch({
      type: 'addCounter',
      counter: {
        id: nextId(),
        title: title,
        value: Number(value)
      }
    });
    setIsAdding(false);
    setTitle('');
    setValue(0);
  }

  if (isAdding) {
    return (
      <div className="add-counter">
        <label>Counter Title: </label> <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        <label>Initial Value: </label> <input type="number" value={value} onChange={e => setValue(e.target.value)} min={0}/>
        <button onClick={handleClick}>Add</button>
      </div>
    );
  } else {
    return (
      <div className="add-counter">
        <button onClick={() => setIsAdding(true)}>Add Counter</button>
      </div>
    ) 
  }
}