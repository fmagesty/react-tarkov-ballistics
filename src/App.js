import './App.css';
import CaliberDropdown from './CaliberDropdown.js';
import tarkovImage from './images/tarkovBodyParts.png';

function App() {
  return (
    <div id="app">
      <h1>Escape From Tarkov Ballistics Simulator</h1>
      <CaliberDropdown />
      <img src={tarkovImage} alt="" id="tarkov-img"/>
    </div>
  );
}

export default App;