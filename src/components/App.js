import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchData } from '../actions/actions'
import Board from './Board';
import injectSheet from 'react-jss';
import { bindActionCreators } from 'redux';

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
  constructor(props) {
    super(props);
    this.loadCards = this.loadCards.bind(this);
  }
  componentWillMount() {
    // this.props.fetchData()
  }
  loadCards() {
    this.props.dispatch(fetchData());
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <button onClick={this.loadCards}>
          Load Cards
        </button>
      </div>
    );
    // if (this.props.components.length > 0) {
    //   return (
    //     <div className="App">
    //       <header className={classes.appHeader}>
    //         <h1 className={classes.appTitle}>React App</h1>
    //       </header>
    //       <div className={classes.appBody}>
    //         <Board
    //           boardElements={this.props.components}
    //          />
    //       </div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="App">
    //       <header className={classes.appHeader}>
    //         <h1 className={classes.appTitle}>React App</h1>
    //       </header>
    //       <div className={classes.appBody}>
    //       <div className="spinner">
    //         <div className="bounce1"></div>
    //         <div className="bounce2"></div>
    //         <div className="bounce3"></div>
    //       </div>
    //       </div>
    //     </div>
    //   );
    // }
  }
}

// function mapStateToProps(state) {
//   return {
//     components: state.components
//   }
// }

function mapStateToProps(state) {
  return {
    estado: state.estado
  }
}

export default (connect(mapStateToProps, )(injectSheet(styles)(App)));
