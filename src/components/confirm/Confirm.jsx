import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';

import Button from '../button/button';
import './confirm.scss';

class Confirm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const props = this.props;
        return (
            <div className={props.visible ? 'isVisible' : ''}>
                <div className="modal-mask">
                    <div className="confirm-body">
                        <div className="confirm-title">{props.title}</div>
                        <div className="confirm-desc">{props.desc}</div>
                        <div className="confirm-btns">
                            <Button text="确定"  onClick={props.okClick} />
                            <Button text="取消" onClick={props.cancelClick} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Confirm.defaultProps = {
    title: "default title"
}

Confirm.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    okClick:PropTypes.func.isRequired,
    cancelClick:PropTypes.func.isRequired
};


export default Confirm;