import React, { Component } from 'react'
import logo from "./logo.svg";
import "./App.css";


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <a className="App-link" href="/api/greeting">
//             Greeting
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
// export default App;


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subTitle: '',
      paragraph: '',
    }
  }
  
  componentDidMount() {
    const reponse = fetch(`/api/greeting`)
      .then(res => res.json())
      .then(data => this.setState({ title: data.title
                                  , subTitle: data.subTitle
                                  , paragraph: data.paragraph
                                }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {this.state.title? <h1>{this.state.title}</h1>:<h1>loading...</h1>}
            {this.state.subTitle? <h3>{this.state.subTitle}</h3>:<h3>loading...</h3>}
            {this.state.paragraph? <h5>{this.state.paragraph}</h5>:<h5>loading...</h5>}
          </div>
        </header>
      </div>
    );
  }
}

export default App;