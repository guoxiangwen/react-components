import React, { Component, PropTypes } from 'react';
import './button.scss';


class Button extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        const onClick = this.props.onClick;
        if (onClick) {
            onClick(e);
        }
    }

    render() {
        const props = this.props;
        return (
            <button type="button" className="im-btn" onClick={this.handleClick}>
                {props.text}
            </button>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'md', 'sm']),
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset'])
};

export default Button;