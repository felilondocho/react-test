import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchData } from '../actions/actions'
import App from '../components/App';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.loadCards = this.loadCards.bind(this);
  }
  loadCards() {
    this.props.dispatch(fetchData());
  }
  render() {
    return(
      <App />
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    error: state.error,
    isFetching: state.isFetching,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => { dispatch(fetchData()) }
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(App));
