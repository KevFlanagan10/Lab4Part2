import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/read">Header</Nav.Link>
            <Nav.Link href="/create">Footer</Nav.Link>
            <Nav.Link href="/">Content</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
  <Route exact path="/" component={Content}/>
  <Route path="/read" component={Header}/>
  <Route path="/create" component={Footer}/>
</Switch>


        {/*<Header></Header>
        <Content></Content>
        <Footer></Footer>*/}


      </div>
      </Router>
    );
  }
}

export default App;
