import React from 'react'
import { NavLink } from 'react-router-dom'
import * as actions from "../store/actions/auth"

import {
    Form, Icon, Input, Button, Spin
} from 'antd';
import { connect } from 'react-redux'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.onAuth(values.userName, values.password)
            }
        });
        // this.props.history.push('/')
    }

    render() {
        let errorMessage = null
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                {errorMessage}
                {
                    this.props.loading
                        ?
                        <Spin indicator={antIcon} />
                        :
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginRight: '10px' }}>
                                    Login
                    </Button>
                                Or
                    <NavLink style={{ marginLeft: '10px' }} to="/signup">Sign Up</NavLink>
                            </Form.Item>
                        </Form>
                }
            </div>
        );
    }
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (userName, password) => dispatch(actions.authLogin(userName, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WrappedLoginForm);