import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Adam"
    }
  }

changeStateData = () => {
  this.setState({
    userName: this.state.userName === "Adam" ? "Jakub" : "Adam"
  })
}

  render = () =>
         <div>
        <h4 className="bg-primary text-white text-center p-2">
          Lista zadań {this.state.userName}
        </h4>
        <button className="btn btn-primary m-2"
        onClick={this.changeStateData}>
          Zmień
        </button>
      </div>
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
