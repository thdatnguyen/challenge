import styled from 'styled-components';

const BoardStyled = styled.div`
  .cell {
    border: 1px solid #fff;
    float: left;
    line-height: 45px;
    height: 45px;
    text-align: center;
    width: 45px;
    cursor: pointer;
    border-radius: 5px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    -webkit-text-stroke: 2px black;
    -webkit-text-fill-color: white;
    &:focus {
      outline: none;
    }
    ${(props) =>
      props.color ? `background: #${props.color};` : `background: #7b7b7b;`};
  }
`;

export default BoardStyled;
