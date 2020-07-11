import React from "react";
import { connect } from "react-redux";
import Cell from "../Cell/Cell";
import "./board.scss";

class Board extends React.Component {
  render() {
    const { currentClass, playerMarks } = this.props;

    return (
      <div className={`board ${currentClass ? "x" : "circle"}`}>
        {playerMarks.map((cell, index) => {
          return <Cell key={index} index={index} />;
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
