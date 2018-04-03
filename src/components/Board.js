import React from 'react';
import injectSheet from 'react-jss';
import Collection from './Collection';

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
};

const Board = ({ props, classes, boardElements }) => {
  return (
    <div className={classes.board}>
      {boardElements && boardElements
        .sort((a, b) => a.OrderInVertical - b.OrderInVertical)
        .map((collection, i) => <Collection key={i} collectionElements = {collection} />
      )}
    </div>
  );
}

export default injectSheet(styles)(Board);
