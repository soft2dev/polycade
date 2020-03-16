import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';
import Machine from './Machine';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../reducers/Machines'
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './Detail';

class App extends Component{
  
  componentDidMount(){
    this.props.getMachines()
  }

  render(){
    return(
      <Router>
      <div className='App'>
        <header className='App-header'>
          <img alt='logo' height='272' width='800' src='https://i.imgur.com/jcvsFKh.png' />
        </header>

        <nav className='App-nav'>
          <Link to='/'>Home</Link>
          <Link to='/machines'>Machines</Link>
        </nav>
        <Switch>
          <Route exact path='/machines'>
            <Machine />
          </Route>
          <Route exact path='/detail/:id' component={Detail} />
        </Switch>
      </div>
    </Router>
    )
  }

}

const mapStateToProps = ( { machines } ) => ({
  machines: machines.machines
})

const mapDispatchToProps = ( dispatch ) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)