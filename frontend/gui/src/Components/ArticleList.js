import React from 'react'
import Articles from "./Article";
import axios from 'axios';
import CustomForm from "./Form";



class ArticleList extends React.Component{
    state ={
      articles:[]
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(resp=>{
                this.setState({articles:resp.data});
            })
    }

    render() {
        return(
           <div>
                <Articles data={this.state.articles}/>
               <h2>Create Article</h2>
               <CustomForm requestType="post" articleId={null} btnText="Created"/>
           </div>

        )
    }
}
export default ArticleList