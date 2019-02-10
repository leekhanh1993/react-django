import React from 'react'
import {
    Form, Input, Button
} from 'antd';
import axios from 'axios'

export default class CustomForm extends React.Component {
    onSubmit = (e, requestType, articleID) => {
        e.preventDefault()
        const title = e.target.elements.title.value
        const content = e.target.elements.content.value
        switch (requestType) {
            case 'post':
                return (
                    axios.post('http://127.0.0.1:8000/api/', { title, content })
                        .then(res => console.log(res))
                        .catch(err => console.error(err))
                )
            case 'put':
                return (
                    axios.put(`http://127.0.0.1:8000/api/${articleID}`, { title, content })
                        .then(res => console.log(res))
                        .catch(err => console.error(err))
                )
            default:
                break;
        }
    }
    render() {
        return (
            <div>
                <Form onSubmit={(event) => this.onSubmit(
                    event,
                    this.props.requestType,
                    this.props.articleID
                )}>
                    <Form.Item
                        label="Title"
                    >
                        <Input
                            name='title'
                            placeholder="Enter a title here" />
                    </Form.Item>
                    <Form.Item
                        label="Content"
                    >
                        <Input
                            name='content'
                            placeholder="Enter some content ..." />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType={'submit'}>{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}