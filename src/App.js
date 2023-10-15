import logo from './logo.svg';
import './App.css';
import 'https://ucnaurobebi.net/style.css'
function App() {
  return (
    <div className="App">
   <div class="box2">
      <button class="round-6" onclick="redirectToRealm('realm1')">REALM 1</button>
    <button class="round-6" onclick="redirectToRealm('realm2')">REALM 2</button>
    <button class="round-6" onclick="redirectToRealm('realm3')">REALM 3</button>
    </div>
    <div class="flex">
      <h1 id="tot">welcome to</h1>
      <h1 id="silly">ucnaurobebi.net</h1>
    </div>
    </div>
    
  );
}

export default App;
