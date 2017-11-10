import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';

//components
import Header from './header';
import Footer from './footer';
// containers

class App extends Component {

  render() {

    return (

      <BrowserRouter className="App">
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

    );

  }

}

export default App;
