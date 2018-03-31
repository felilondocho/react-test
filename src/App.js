import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchData } from './actions/fetch'

import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchData()
  }
  render() {
    console.log(this.props.components)
    if (this.props.components.length > 0) {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React App</h1>
          </header>
          <div className="App-body">
            {this.props.components.sort((a, b) => a.OrderInVertical - b.OrderInVertical)
              .map((component, i) => 
                <div key={i}>{component.Description}</div>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React App</h1>
          </header>
          <div className="App-body">
            <h1>Cargando</h1>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    components: state.components
  }
}

export default connect(mapStateToProps, { fetchData })(App)
