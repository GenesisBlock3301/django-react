import React from 'react'
import axios from 'axios';
import {Card} from 'antd'
import CustomForm from "./Form";


class ArticleDetail extends React.Component {
    state = {
        article: {}
    };

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(resp => {
                this.setState({article: resp.data});
            })
    }

    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                    <CustomForm requestType="put" articleId={this.props.match.params.articleID} btnText="Updated"/>
                </Card>
            </div>
        )
    }
}

export default ArticleDetail