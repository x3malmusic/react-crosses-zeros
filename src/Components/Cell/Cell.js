import React from "react";
import { connect } from "react-redux";
import {
  switchClass,
  setMark,
  showResultModal,
  setMessage,
} from "../../redux/actions";

import "./cell.scss";

class Cell extends React.Component {
  state = {
    canClick: true,
    giveClass: "",
  };

  handleClick = async () => {
    this.setState({ canClick: false });
    const { canClick } = this.state;
    if (canClick) {
      const {
        currentClass,
        switchClass,
        setMark,
        setMessage,
        winningCombinations,
        showResultModal,
        index,
      } = this.props;
      this.setState({ giveClass: this.whatClassToGive(currentClass) });
      await setMark({ value: currentClass, position: index });
      const { playerMarks } = this.props;
      if (this.checkWin(currentClass, playerMarks, winningCombinations)) {
        setMessage(`${this.whatClassToGive(currentClass)}'s wins`);
        showResultModal(true);
        return;
      }
      switchClass(!currentClass);
    } else return;
  };

  whatClassToGive = (currentClass) => {
    return currentClass ? "x" : "circle";
  };

  checkWin = (currentClass, playerMarks, winningCombinations) => {
    return winningCombinations.some((combination) => {
      return combination.every((value) => {
        return (
          currentClass === playerMarks[value]?.value &&
          value === playerMarks[value].position
        );
      });
    });
  };

  render() {
    const { giveClass } = this.state;

    return (
      <div className={`cell ${giveClass}`} onClick={this.handleClick}></div>
    );
  }
}

const mapStateToProps = ({
  currentClass,
  winningCombinations,
  playerMarks,
}) => ({
  currentClass,
  winningCombinations,
  playerMarks,
});

const mapDispatchToProps = (dispatch) => ({
  switchClass: (current) => dispatch(switchClass(current)),
  setMark: (position) => dispatch(setMark(position)),
  showResultModal: (show) => dispatch(showResultModal(show)),
  setMessage: (show) => dispatch(setMessage(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
