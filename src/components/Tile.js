import React from 'react';

const styles = {
  Card:{
    width: '250px',
    height: '250px',
    margin: '20px'
  },
  Image: {
    height: '250px',
    width: '250px'
  }
}

function Tile(props) {
  const id = props.id;

  return (
      <div 
        className="card" 
        style={styles.Card}
        onClick={(e) => props.onClick(id, e)}>
        <img src={props.image} style={styles.Image} alt={props.id} />
      </div>
 
  )
    
}

export default Tile;