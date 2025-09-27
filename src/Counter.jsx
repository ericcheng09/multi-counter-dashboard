import { useState } from "react";
import { useCounterDispatch } from "./CounterContext";

function CounterTitle({id, title}) {
  const counterDispatch = useCounterDispatch();
  const [isEditing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');

  function handleEditTitle(e) {
    counterDispatch({
            type: 'editTitle',
            counterId: id,
            title: draft
          });
    setEditing(false);
  }

  let counterTitle = null;

  if (isEditing) {
    counterTitle = (
      <>
        <input type="text" value={draft} onChange={e => setDraft(e.target.value)}/>
        <button className="counter-button" onClick={handleEditTitle}>Save</button>
        <button className="counter-button" onClick={() => {
            setDraft(title);
            setEditing(false);
          }}>Cancel</button>
      </>
    );
  } else {
    counterTitle = (
      <>
        <p onClick={()=> {
            setDraft(title);
            setEditing(true);
          }}>
          {title}
        </p>
      </>
    );
  }
  return (
    <div className="counter-title">
      {counterTitle}
    </div>
  );
}

function CounterButtons({id, value}){
  const counterDispatch = useCounterDispatch();
  return (
    <div className="counter-button-groups">
      <button className="counter-button" onClick={
        () => counterDispatch({
          type: 'updateValue',
          counterId: id,
          change: 1
        })
        }>+</button>
        
      <button className="counter-button" onClick={() => counterDispatch({
          type: 'updateValue',
          counterId: id,
          change: -1
        })} disabled={value > 0? false:true}>-</button>
      <button className="counter-button" onClick={() => counterDispatch({
          type: 'resetValue',
          counterId: id
        })
        }>Reset</button>
      <button className="counter-button" onClick={() => counterDispatch({
          type: 'removeCounter',
          counterId: id
        })}>Remove</button>
    </div>
  )
  
}

export default function Counter({counter}){
  return (
    <>
      <div className="counter-card">
        <CounterTitle id={counter.id} title={counter.title} />
        <p className="counter-value">
          {counter.value}
        </p>
        <CounterButtons id={counter.id} value={counter.value}/>
      </div>
    </>
  )  
}