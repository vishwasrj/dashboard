import React, { Component } from 'react';
import reactDOM from 'react-dom';
import Left from './Components/LeftPane.jsx';
import Right from './Components/RightPane.jsx';
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

class App extends Component{

  render(){
    return (
      <div>
        <Header />
          <div className="main">
          <Left /><Right />
          </div>
        <Footer />
      </div>
      );
  }

}

reactDOM.render(<App />, document.getElementById('root'));
