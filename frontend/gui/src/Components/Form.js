import React from 'react';
import {Form, Input, Button} from 'antd';
import axios from 'axios'

const FormItem = Form.Item;

class CustomForm extends React.Component {

    handleFormSubmit=(event,requestType,articleId)=>{
        // event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        // console.log(title,content)
        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/',{
                    title: title,
                    content: content
                })
                    .then(res=>console.log(res))
                    .catch(err => console.log(err));


            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleId}/`,{
                    title: title,
                    content: content
                })
                    .then(res=>console.log(res))
                    .catch(err => console.log(err));

        }
    };
    render() {
        return (
            <form onSubmit={(event)=>this.handleFormSubmit(event,this.props.requestType,this.props.articleId)}>
                <FormItem label="Title" required>
                    <Input name='title' placeholder="Place a title here."/>
                </FormItem>
                <FormItem label="Content">
                    <Input name='content' placeholder="Enter your related content...."/>
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                </FormItem>
            </form>
        );
    }
}

export default CustomForm;