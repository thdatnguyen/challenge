import React, { Component } from 'react';
import BoardStyled from './Board.style';
import randomColor from '../helper/randomColor';

class Board extends Component {
  state = {
    boardData: this.initBoardData(this.props.height, this.props.width),
  };

  // Gets initial board data
  initBoardData(height, width) {
    let data = this.createEmptyArray(height, width);
    return data;
  }

  createEmptyArray(height, width) {
    let data = [];

    for (let i = 0; i < height; i++) {
      data.push([]);
      for (let j = 0; j < width; j++) {
        data[i][j] = {
          x: i,
          y: j,
          color: randomColor(),
        };
      }
    }
    return data;
  }

  handleDragStart = (e, dataItem) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode);
    this.startedItem = dataItem;
  };

  handleDragOver = (e) => {
    e.preventDefault();
  };

  drop = (e, x, y) => {
    e.preventDefault();
    const boardData = [...this.state.boardData];
    let dragOverItem = boardData[x][y];

    // if the item is dragged over itself, ignore
    if (this.startedItem === dragOverItem) {
      return;
    }

    // swap color
    [
      boardData[this.startedItem.x][this.startedItem.y].color,
      boardData[dragOverItem.x][dragOverItem.y].color,
    ] = [
      boardData[dragOverItem.x][dragOverItem.y].color,
      boardData[this.startedItem.x][this.startedItem.y].color,
    ];

    this.setState({
      boardData,
    });
  };

  renderBoard(data) {
    return data.map((dataRow) => {
      return dataRow.map((dataItem) => {
        const { x, y, color } = dataItem;
        return (
          <BoardStyled
            key={x * dataRow.length + y}
            color={color}
            onDragOver={this.handleDragOver}
          >
            <div
              draggable
              className="cell"
              onDragStart={(e) => this.handleDragStart(e, dataItem)}
              onDrop={(e) => this.drop(e, x, y)}
            >
              {x}
              {` `}|{` `}
              {y}
            </div>
            {dataRow[dataRow.length - 1] === dataItem && (
              <div className="clear" />
            )}
          </BoardStyled>
        );
      });
    });
  }

  render() {
    return <>{this.renderBoard(this.state.boardData)}</>;
  }
}

export default Board;
