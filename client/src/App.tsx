import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
state = {
  data: null
}

componentDidMount() {
  axios.get('http://localhost:5000')
  .then((response) => {
    this.setState({
      data: response.data
    })
  })
  .catch((error) => {
    console.error(`Error fetching data: ${error}`);
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Reaction
      </header>
      <p>
        Welcome to the forum for React Developers. This website is intended for 
        programmers to get together and discuss dev topics. If you haven't already, please sign up to start posting.
        Also, for existing members be sure to keep your password secure and hidden.
      </p>
      <p><a href="../public/signUp.html">SignUp Here!!...tsx</a></p>
      </div>
    );
  }

  
}

export default App;
