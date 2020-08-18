import React, { Component } from 'react';
//import PopUp from './PopUp';
import CurPosition from './CurPosition';
import OrderDetail from './pages/OrderDetail';
import OrderList from './pages/OrderList';
//import Render from './test/Render';

class App extends Component{
  render(){
    return(
      <div className="App">
        <OrderDetail/>
      </div>
    )
  }
}


export default App;

