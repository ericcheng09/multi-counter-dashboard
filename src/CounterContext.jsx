import { useReducer, useContext, createContext } from "react"

const initCounters = [
  {id: 0, title: 'Counter 1', value: 0},
  {id: 1, title: 'Counter 2', value: 0},
  {id: 2, title: 'Counter 3', value: 0},
]
let counter_idx = 3;


const CounterDataContext = createContext(null);
const CounterDispatchContext = createContext(null);

export function useCounterData() {
  return useContext(CounterDataContext);
}

export function useCounterDispatch() {
  return useContext(CounterDispatchContext);
}


export const nextId = () => counter_idx++;

export function CounterProvider({children}){
  const [counters, dispatch] = useReducer(counterReducer, initCounters);

  return (
    <>
      <CounterDataContext value={counters}>
        <CounterDispatchContext value={dispatch}>
          {children}
        </CounterDispatchContext>
      </CounterDataContext>
    </>
  );
}


function counterReducer(state, action){
  switch (action.type) {
    case 'addCounter': {
      return [
        ...state,
        action.counter
      ]
    };
    case 'removeCounter': {
      return state.filter(counter => counter.id !== action.counterId);
    };
    case 'editTitle': {
      return state.map(counter => {
        if (counter.id === action.counterId) {
          return {
            ...counter,
            title: action.title
          };
        }
        return counter;
      })
    };
    case 'updateValue': {
      return state.map(counter => {
        if (counter.id === action.counterId) {
          let tempValue = counter.value + action.change;
          if (tempValue < 0) tempValue = 0;
          return {
            ...counter,
            value: tempValue
          };
        }
        return counter;
      })

    };
    case 'resetValue': {
      return state.map(counter => {
        if (counter.id === action.counterId) {
          return {
            ...counter,
            value: 0
          };
        }
        return counter;
      })
    };
  }
}