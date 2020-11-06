import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Welcome from './components/Welcome';
import NumberComp from './components/NumberComp';
import ColorWord from './components/ColorWord';

function App() {

  return (
    <div className="App">
      <Router>
        <Welcome path="/home"/>
        <NumberComp path="/:input"/>
        <ColorWord path="/:text/:bgcolor/:font" />
      </Router>
    </div>
  );
}

export default App;
