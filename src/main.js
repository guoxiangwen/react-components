import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';

import Alert from './components/alert/Alert';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.okClick = this.okClick.bind(this)
        this.cancelClick = this.cancelClick.bind(this)

    }
    //确定
    okClick() {
        alert("ok");
        this.setState({
            visible: true
        })
    }
    //取消
    cancelClick() {
        alert("cancel")
        this.setState({
            visible: true
        })
    }

    render() {
        return (
            <div>
                <p>Index</p>
                <Alert title="提示" desc="这里是描述"
                    visible={this.state.visible} okClick={this.okClick} cancelClick={this.cancelClick} />
            </div>
        )
    }
}

render(
    <Index />,
    document.getElementById('app')
)