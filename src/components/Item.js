import React from 'react';
import injectSheet from 'react-jss'

const styles = {
  item: {
    backgroundColor: 'white',
    marginBottom: '20px',
    boxShadow: '0px 0px 4px 4px rgba(241,239,243,1)',
    padding: '20px',
    textAlign: 'left',
    position: 'relative',
    '&:after': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      boxShadow: '0px 0px 4px 4px rgba(0,0,0,1)',
      opacity: '0',
      transition: 'opacity 0.3s ease-in-out'
    },
    '&:hover:after': {
      opacity: '1'
    },
  },
  itemTitle: {
    margin: 0,
    marginBottom: '15px',
  },
  itemDescription: {
    margin: 0
  }
}

const Item = ({props, classes, itemElements}) => {
  return (
    <div className={classes.item}>
      <h4 className={classes.itemTitle}>{itemElements.ItemTitle}</h4>
      <p className={classes.itemDescription}>{itemElements.Description}</p>
    </div>
  );
}

export default injectSheet(styles)(Item);