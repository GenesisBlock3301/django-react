import React from 'react'
import {Form,Input, Button, Spin} from 'antd';
import {Icon } from '@ant-design/compatible';
import {connect } from 'react-redux'
import {NavLink} from 'react-router-dom'

// const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{fontSize:24}} Spin />;

class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        let errorMessage = null;
        if (this.props.error){
            errorMessage = <p>{this.props.error.message}</p>
        }
        return (
            <div>
                {
                    errorMessage
                }
                {
                    this.props.loading ?
                        <Spin indicator={antIcon}/>
                        :
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{required: true, message: 'Please input your username!'}],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>

                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: 'Please input your Password!'}],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type='primary' htmlType='submit' style={{marginRight: '10px'}}>
                                    Login
                                </Button>
                                <NavLink style={{marginRight: '10px'}}>
                                    Signup
                                </NavLink>
                            </Form.Item>
                        </Form>
                }
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

const mapStateToProps=(state)=>{
    return{
        loading: state.loading,
        error: state.error
    }
};
export default connect(mapStateToProps)(WrappedNormalLoginForm)
