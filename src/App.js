import React from 'react';
import MacTable from './components/MacTable/MacTable.js';
import './api/api.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span role="img"> knock-knock 🚪👀 </span>
        </header>
        <MacTable/>
      </div>
    );
  }
}

export default App;
