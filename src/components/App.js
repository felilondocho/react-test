import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchData } from '../actions/actions'
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
    paddingTop: '80px',
    backgroundColor: '#f8f6f8',
    minWidth: '100vw',
    minHeight: 'calc(100vh - 80px)'
  },
  requestButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    borderRadius: '20px',
    height: '100px',
    lineHeight: '100px',
    color: '#000000',
    width: '200px',
    fontSize: '20px',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'translate(-50%,-50%) scale(1.1)'
    },
    '&:active': {
      borderStyle: 'solid'
    } 
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.loadCards = this.loadCards.bind(this);
  }
  loadCards() {
    this.props.dispatch(fetchData());
  }
  render() {
    const { classes } = this.props;
    switch (this.props.currentState) {
      case 'initial':
        return (
          <div className="App">
            <header className={classes.appHeader}>
              <h1 className={classes.appTitle}>React App</h1>
            </header>
            <div className={classes.appBody}>
              <button className={classes.requestButton} onClick={this.loadCards}>
                Load Cards
              </button>
            </div>
          </div>
        );
      case 'loading':
        return (
          <div className="App">
            <header className={classes.appHeader}>
              <h1 className={classes.appTitle}>React App</h1>
            </header>
            <div className={classes.appBody}>
              <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
              </div>
            </div>
          </div>
        );
      case 'success':
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
      case 'fail':
        return(
          <div className="App">
            <header className={classes.appHeader}>
              <h1 className={classes.appTitle}>React App</h1>
            </header>
            <div className={classes.appBody}>
              <h1>Failed Request</h1>
            </div>
          </div>
        );
      default:
        return(
          <div className="App">
            <header className={classes.appHeader}>
              <h1 className={classes.appTitle}>React App</h1>
            </header>
          </div>
        );
    }
  }
}

function mapStateToProps(state) {
  return {
    components: state.components,
    currentState: state.currentState
  }
}

export default (connect(mapStateToProps, )(injectSheet(styles)(App)));
