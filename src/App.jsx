import './App.css'
import SummaryBar from './SummaryBar'
import { CounterProvider } from './CounterContext'
import AddCounter from './AddCounter'
import CounterList from './CounterList'

function App() {

  return (
    <>
      <h1>Multi Counter Dashboard</h1>
      <CounterProvider>
        <SummaryBar />
        <AddCounter />
        <hr />
        <CounterList />
      </CounterProvider>
    </>
  )
}

export default App
