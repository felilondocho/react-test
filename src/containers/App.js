import { connect } from 'react-redux'
import { fetchData } from '../actions/actions'
import App from '../components/App';

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
