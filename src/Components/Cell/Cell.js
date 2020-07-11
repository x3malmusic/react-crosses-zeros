import React from "react";
import { connect } from "react-redux";
import { whatClassToGive } from "../../helper/whatClassToGive";
import {
  switchClass,
  setMark,
  showResultModal,
  setMessage,
} from "../../redux/actions";

import "./cell.scss";

class Cell extends React.Component {
  handleClick = async () => {
    this.setState({ canClick: false });
    const { clicked } = this.props;
    if (!clicked) {
      const {
        currentClass,
        switchClass,
        setMark,
        setMessage,
        winningCombinations,
        showResultModal,
        index,
      } = this.props;
      await setMark({ value: currentClass, position: index });
      const { playerMarks } = this.props;

      if (this.checkWin(currentClass, playerMarks, winningCombinations)) {
        setMessage(`${whatClassToGive(currentClass)}'s wins`);
        showResultModal(true);
        return;
      }

      if (this.checkDraw(playerMarks)) {
        setMessage("draw");
        showResultModal(true);
        return;
      }

      switchClass(!currentClass);
    } else return;
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

  checkDraw = (playerMarks) => {
    return playerMarks.every((mark) => mark !== undefined);
  };

  render() {
    const { mark } = this.props;

    return <div className={`cell ${mark}`} onClick={this.handleClick}></div>;
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
