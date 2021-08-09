
import './App.css';
import MemoryCard from './components/MemoryCard';
import './components/MemoryCard.css'

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Memory Game</h1>
      <h3 className="subtitle">Match Cards To Win</h3>
      <div>
        <MemoryCard /> <MemoryCard /> <MemoryCard /> <MemoryCard />
      </div>
      <br/>
      <div>
        <MemoryCard /> <MemoryCard /> <MemoryCard /> <MemoryCard />
      </div>
      <br/>
      <div>
        <MemoryCard /> <MemoryCard /> <MemoryCard /> <MemoryCard />
      </div>
      <br/>
      <div>
        <MemoryCard /> <MemoryCard /> <MemoryCard /> <MemoryCard />
      </div>
      
      
    </div>
  );
}

export default App;
