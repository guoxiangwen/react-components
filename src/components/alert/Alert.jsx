import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';
import './alert.less';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
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
                            <button type="button" onClick={props.okClick}>确定</button>
                            <button type="button" onClick={props.cancelClick}>取消</button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

// Alert.propTypes = {
//     title: React.propTypes.string,
//     desc: React.propTypes.string,
// };


export default Alert;