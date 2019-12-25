import React from "react";
import Message from './Message';
import ScoreBoard from './ScoreBoard';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'red'
  }
}


function Header(props) {
    const 
      score = props.score,
      topScore = props.topScore,
      message = props.message

  return (
    <div style={styles.header}>
      <h1>Click Me Remember Me</h1>
      <Message>{message}</Message>
      <ScoreBoard 
        score={score}
        topScore={topScore}/>
    </div>
  
  )
}

export default Header;
