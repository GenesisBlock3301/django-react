import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from "./Components/Layout";
import ArticleList from "./Components/ArticleList";
import {BrowserRouter, Route} from 'react-router-dom'
import ArticleDetail from "./Components/ArticleDetail";
import {connect} from 'react-redux'
import * as actions from './store/actions/auth'

class App extends React.Component {
    componentDidMount() {
        this.props.onTryAutoSignup()
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <CustomLayout {...props}>
                        <div>
                            <Route exact path='/' component={ArticleList}/>
                            <Route path='/:articleID' component={ArticleDetail}/>
                        </div>
                    </CustomLayout>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.token !== null
    }
};
const mapDispatchToProps = () => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
};

export default connect(mapStateToProps, mapDispatchToProps())(App);
