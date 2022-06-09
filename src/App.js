import Header from './components/Header';
import Convertation from './components/Convertation';
import React from 'react';

class App extends React.Component{
  render(){
    return (
      <div className="app">
       <Header/>
       <Convertation/>
      </div>
    );
  }
    
  
}

export default App;