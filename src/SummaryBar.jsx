import { useCounterData } from "./CounterContext";

export default function SummaryBar() {
  const counters = useCounterData();
  console.log(counters);
  const counterSumValue = () => counters.reduce((acc , counter ) =>  acc + counter.value, 0);
  return (
    <>
      <h2 className="summary">Summary Of All Counters' value: {counterSumValue()}</h2>
    </>
  )
}