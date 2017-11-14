import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//contaieners
import Home from '../containers/Home';
import News from '../containers/News';
import GalleryItem from '../containers/GalleryItem';

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
            <Route exact path="/news/:id" component={News}></Route> {/* since using switch need more specific route on top*/}
            <Route exact path="/galleries/:id" component={GalleryItem}></Route> 
            <Route exact path="/" component={Home}></Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

    );

  }

}

export default App;
