import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from "./Components/Layout";
import ArticleList from "./Components/ArticleList";
import {BrowserRouter, Route} from 'react-router-dom'
import ArticleDetail from "./Components/ArticleDetail";
import {connect} from 'react-redux'
import * as actions from './store/actions/auth'
import Login from './container/Login'

class App extends React.Component {
    componentDidMount() {
        this.props.onTryAutoSignup()
    }

    render() {
        return (
            <div>
                    <CustomLayout {...this.props}>
                        <div>
                            <Route exact path='/' component={ArticleList}/>
                            <Route exact path='/:articleID' component={ArticleDetail}/>
                            <Route exact path='/login' component={Login}/>
                        </div>
                    </CustomLayout>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.token !== null
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
