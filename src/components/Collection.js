import React, { Component } from 'react';
import Item from './Item';
import injectSheet from 'react-jss'

const styles = {
  collection: {
    width: '350px',
    marginRight: '50px',
    '@media only screen and (max-width : 768px)': {
      margin: '0',
      marginTop: '40px',
      width: '40%',
    },
    '@media only screen and (max-width : 480px)': {
      width: '80%',
    }
  },
  collectionTitle: {
    margin: '0',
    textAlign: 'left',
    marginBottom: '30px'
  }
}

class Collection extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.collection}>
        <h2 className={classes.collectionTitle}>
          {this.props.collectionElements.Description}
        </h2>
        {this.props.collectionElements.Items.sort((a, b) => a.OrderInLane - b.OrderInLane)
          .map((item, i) =>
            <Item
            key = {i}
            itemElements = {item}
          />
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(Collection);