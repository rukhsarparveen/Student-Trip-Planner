import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChalteHainApp from './components/ChalteHainApp';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <ChalteHainApp/>
      </div>
    );
  }
}

export default App;
