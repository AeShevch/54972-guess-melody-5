import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withAnswerChangeHandle = (Component) => {
  class WithAnswerChangeHandle extends PureComponent {
    constructor(props) {
      super(props);
    }

    _handleChange(evt) {
      const selectedElementIndex = parseInt(evt.target.value.replace(`answer-`, ``), 10);
      const {type} = this.props.question;
      const newValue = evt.target.checked;

      this.setState((state) => {
        return {
          userAnswers: state.userAnswers.map((value, index) => {
            const defaultValue = type === `artist` ? false : value;
            return index === selectedElementIndex ? newValue : defaultValue;
          }),
        };
      });
    }

    render() {
      return <Component handleChange={this._handleChange.bind(this)} {...this.props} />;
    }
  }

  WithAnswerChangeHandle.propTypes = {
    question: PropTypes.shape({
      type: PropTypes.oneOf([`artist`, `genre`]),
    }),
  };

  return WithAnswerChangeHandle;
};

export default withAnswerChangeHandle;
