import React, { Component } from 'react';
import reactDOM from 'react-dom';
import Left from './Components/leftpane.jsx';
import Right from './Components/rightpane.jsx';
import Header from './Components/header.jsx'
import Footer from './Components/footer.jsx'

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
