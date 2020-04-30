import React from 'react';

import Board from './components/Board.component';

class App extends React.Component {
  state = {
    height: 8,
    width: 8,
  };
  render() {
    const { height, width } = this.state;
    return (
      <div className="board-container">
        <Board height={height} width={width} />
      </div>
    );
  }
}

export default App;
