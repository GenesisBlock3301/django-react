import React from 'react'
import Articles from "./Article";
import axios from 'axios';



class ArticleList extends React.Component{
    state ={
      articles:[]
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api')
            .then(resp=>{
                this.setState({articles:resp.data});
            })
    }

    render() {
        return(
            <Articles data={this.state.articles}/>
        )
    }
}
export default ArticleList