import Counter from './Counter'
import './App.css';

function App() {
  return (
    <div>
      <Counter appName="Counter 1" counterValue={200} />
      <Counter appName="Counter 2" counterValue={200} />
      <Counter appName="Counter 3" counterValue={200} />
    </div>
  )
}

export default App;
