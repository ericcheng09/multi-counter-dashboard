import { useCounterData } from "./CounterContext";
import Counter from "./Counter";

export default function CounterList() {
  const counters = useCounterData();

  const counterCountent = counters.map(counter => <Counter counter={counter} key={counter.id} />)

  return (
    <>
      <div className="counter-list">
        {counterCountent}
      </div>
    </>
  )
}