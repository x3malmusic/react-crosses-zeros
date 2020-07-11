import React from "react";
import { connect } from "react-redux";

import Cell from "../Cell/Cell";
import { whatClassToGive } from "../../helper/whatClassToGive"
import "./board.scss";

class Board extends React.Component {

  render() {
    const { currentClass, playerMarks } = this.props;

    return (
      <div className={`board ${currentClass ? "x" : "circle"}`}>
        {playerMarks.map((cell, index) => {
          return (
            <Cell
              key={index}
              index={index}
              mark={
                cell?.position === index && whatClassToGive(cell.value)
              }
              clicked={cell?.position === index}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ currentClass, playerMarks }) => ({
  currentClass,
  playerMarks,
});

export default connect(mapStateToProps, null)(Board);
