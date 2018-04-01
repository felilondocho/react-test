import React, { Component } from 'react';
import Collection from './Collection';
import injectSheet from 'react-jss'

const styles = {
  board: {
    display: 'flex',
    flexDirection: 'row',
    padding: '40px',
    '@media only screen and (max-width : 768px)': {
      padding: '0',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    }
  }
}

class Board extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.board}>
        {this.props.boardElements.sort((a, b) => a.OrderInVertical - b.OrderInVertical)
          .map((collection, i) =>
            <Collection
              key={i}
              collectionElements = {collection}
            />
        )}
      </div>  
    );
  }
}

export default injectSheet(styles)(Board);
