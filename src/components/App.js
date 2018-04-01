import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchData } from '../actions/fetch'
import Board from './Board';
import injectSheet from 'react-jss';

const styles = {
  appHeader: {
    backgroundColor: '#fff',
    position: 'fixed',
    width: '100vw',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.5)',
    top: '0',
    zIndex: '1000'
  },
  appTitle: {
    margin: '0',
    display: 'inline-block'
  },
  appBody: {
    marginTop: '80px',
    backgroundColor: '#f8f6f8'
  }
}

class App extends Component {
  componentWillMount() {
    this.props.fetchData()
  }
  render() {
    const { classes } = this.props;
    if (this.props.components.length > 0) {
      return (
        <div className="App">
          <header className={classes.appHeader}>
            <h1 className={classes.appTitle}>React App</h1>
          </header>
          <div className={classes.appBody}>
            <Board
              boardElements={this.props.components}
             />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className={classes.appHeader}>
            <h1 className={classes.appTitle}>React App</h1>
          </header>
          <div className={classes.appBody}>
          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
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

export default (connect(mapStateToProps, {fetchData})(injectSheet(styles)(App)));
