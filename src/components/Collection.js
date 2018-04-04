import React from 'react';
import injectSheet from 'react-jss'
import Item from './Item';

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
  },
};

const Collection = ({props, classes, collectionElements}) => {
    return (
      <div className={classes.collection}>
        <h2 className={classes.collectionTitle}>
          {collectionElements.Description}
        </h2>
        {collectionElements.Items.sort((a, b) => a.OrderInLane - b.OrderInLane)
          .map((item, i) =>
            <Item key = {i} itemElements = {item} />
          )}
      </div>
    );
}

export default injectSheet(styles)(Collection);