import React from "react";
import { connect } from "react-redux";

import Board from "./Components/Board/Board";
import ResultModal from "./Components/ResultModal/ResultModal";
import { showResultModal, switchClass, clearMarks } from "./redux/actions";

class App extends React.Component {
  restartGame = () => {
    const { showResultModal, clearMarks } = this.props;
    showResultModal(false);
    switchClass(true);
    clearMarks();
  };

  render() {
    const { showModal, resultMessage } = this.props;

    return (
      <>
        <Board />
        <ResultModal
          show={showModal}
          message={resultMessage}
          restartGame={this.restartGame}
        />
      </>
    );
  }
}

const mapStateToProps = ({ showModal, resultMessage }) => ({
  showModal,
  resultMessage,
});

const mapDispatchToProps = (dispatch) => ({
  showResultModal: (show) => dispatch(showResultModal(show)),
  switchClass: (current) => dispatch(switchClass(current)),
  clearMarks: () => dispatch(clearMarks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
